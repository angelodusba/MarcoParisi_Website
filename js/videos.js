"use strict";

// Function to initialize the video containers
function initializeVideoContainers() {
  const videoContainers = document.querySelectorAll("div[data-vimeo-id]");

  videoContainers.forEach((container) => {
    // Extract data attributes
    const vimeoId = container.getAttribute("data-vimeo-id");
    const thumbnailSrc = container.getAttribute("data-thumbnail");
    const overlay = container.querySelector(".videoOverlay");

    // Add the thumbnail image
    const img = document.createElement("img");
    img.src = thumbnailSrc;
    img.alt = "Video Thumbnail";
    img.style.transition = "opacity 0.5s ease-in-out";
    container.appendChild(img);

    let iframe = document.createElement("iframe");
    if (container.classList.contains("vertical")) {
      iframe.src = `https://player.vimeo.com/video/${vimeoId}autoplay=1&background=1&muted=1`;
    } else {
      iframe.src = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&background=1&muted=1`;
    }
    iframe.allow = "autoplay";
    iframe.allowFullscreen = true;
    iframe.style.opacity = "0"; // Initially hidden
    iframe.style.zIndex = "-1";
    iframe.style.transition = "opacity 0.5s ease-in-out";
    container.appendChild(iframe);

    // Event listener for hover
    overlay.addEventListener("mouseenter", () => {
      iframe.style.opacity = "1"; // Fade in iframe
      iframe.style.zIndex = "1";
      img.style.opacity = "0"; // Fade out image
    });

    // Event listener for mouse leave
    overlay.addEventListener("mouseleave", () => {
      iframe.style.zIndex = "-1";
      img.style.opacity = "1"; // Fade in image
      iframe.style.opacity = "0"; // Fade out iframe
    });

    // Event listener for click on the overlay
    overlay.addEventListener("click", (e) => {
      // Redirect to a new page with the embedded video
      window.location.href = `video.html?id=${vimeoId}`;
    });
  });
}

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", initializeVideoContainers);
