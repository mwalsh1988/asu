const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealEls.forEach((el) => observer.observe(el));

const featuredProduct = document.querySelector("#featuredProduct");
const featuredCaption = document.querySelector("#featuredCaption");
const featuredGallery = featuredProduct?.closest(".gallery-main");
const galleryButtons = document.querySelectorAll(".gallery-button");

galleryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    galleryButtons.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");

    featuredProduct.src = button.dataset.image;
    featuredProduct.alt = button.dataset.alt || button.textContent.trim() + " ONIT product image";
    featuredGallery.dataset.background = button.dataset.background || "plain";
    featuredCaption.textContent = button.dataset.caption;
  });
});

const videoModal = document.querySelector("#video-modal");
const videoFrame = videoModal?.querySelector("iframe");
const videoTriggers = document.querySelectorAll("[data-youtube-id]");
const videoCloseButtons = document.querySelectorAll("[data-video-close]");

const closeVideoModal = () => {
  if (!videoModal || !videoFrame) return;

  videoModal.classList.remove("is-open");
  videoModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("video-modal-open");
  videoFrame.src = "";
};

videoTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    if (!videoModal || !videoFrame) return;

    event.preventDefault();
    const videoId = trigger.dataset.youtubeId;
    const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
    embedUrl.searchParams.set("autoplay", "1");
    embedUrl.searchParams.set("rel", "0");

    if (window.location.origin.startsWith("http")) {
      embedUrl.searchParams.set("origin", window.location.origin);
    }

    videoFrame.src = embedUrl.toString();
    videoModal.classList.add("is-open");
    videoModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("video-modal-open");
  });
});

videoCloseButtons.forEach((button) => {
  button.addEventListener("click", closeVideoModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeVideoModal();
  }
});
