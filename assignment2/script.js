const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here
function restartVideo() {
  const video = document.getElementById("custom-video-player");
  video.currentTime = 0; // go back to start
  video.play(); // start playing again
}

function increaseVolume() {
  const video = document.getElementById("custom-video-player");
  if (video.volume < 1.0) {
    video.volume = Math.min(1.0, video.volume + 0.1);
  }
}

function decreaseVolume() {
  const video = document.getElementById("custom-video-player");
  if (video.volume > 0.0) {
    video.volume = Math.max(0.0, video.volume - 0.1);
  }
}

function saveGoals() {
  const goalsText = document.getElementById("study-goals").value;
  const message = document.getElementById("goal-message");
  const savedGoalDisplay = document.getElementById("saved-goal");

  if (goalsText.trim() === "") {
    message.textContent = "Please write some goals before saving.";
    message.style.color = "red";
  } else {
    message.textContent = "Your study goals have been saved!";
    message.style.color = "green";
    savedGoalDisplay.textContent = `Your Goal: ${goalsText}`;
  }
}
