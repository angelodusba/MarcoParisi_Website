function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Get vimeoId from URL
const vimeoId = getQueryParam("id");
const videoWrapper = document.getElementById("videoWrapper");
const title = document.querySelector("h2");
const iframe = document.getElementById("vimeoPlayer");

iframe.src = `https://player.vimeo.com/video/${vimeoId}`;
// Determine the aspect ratio based on the referring page
if (document.referrer.includes("vertical.html")) {
  videoWrapper.classList.add("vertical");
} else {
  //Remove the ?
  iframe.src = iframe.src.slice(0, -1);
  videoWrapper.classList.add("ratio-16x9");
}

// Set iframe src

const player = new Vimeo.Player(iframe);

player
  .getVideoTitle()
  .then(function (titleString) {
    title.textContent = titleString;
  })
  .catch(function (error) {
    title.textContent = "Not existing video";
  });
