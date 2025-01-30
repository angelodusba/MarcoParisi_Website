"use strict";

// Function to initialize the video containers
function initializeVideoContainers() {
  const videoContainers = document.querySelectorAll("div[data-vimeo-id]");

  videoContainers.forEach((container) => {
    // Extract data attributes
    const vimeoId = container.getAttribute("data-vimeo-id");
    const thumbnailSrc = container.getAttribute("data-thumbnail");

    // Add the thumbnail image
    const img = document.createElement("img");
    img.src = thumbnailSrc;
    img.alt = "Video Thumbnail";
    //img.classList = "d-block w-80";
    container.appendChild(img);

    // Event listener for click
    container.addEventListener("click", () => {
      // Replace the thumbnail with the iframe
      const iframe = document.createElement("iframe");
      iframe.src = `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
      iframe.allow = "autoplay; fullscreen; picture-in-picture";
      iframe.allowFullscreen = true;

      // Clear the container and add the iframe
      container.innerHTML = "";
      container.appendChild(iframe);
    });
  });
}

// Initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", initializeVideoContainers);
