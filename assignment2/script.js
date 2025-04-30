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

//Despite me implementing the loop function in the HTML file, I think it is nice to have the option to restart the video without needing to complete the entire video. Providing more options for the user allows them to feel freedom and more satisifed with using such website.
function restartVideo() {
  const video = document.getElementById("custom-video-player");
  video.currentTime = 0; // go back to start
  video.play(); // start playing again
}

//By adding the increaseVolume function, they can listen in more attentively to the music if they need to relax and have something enjoyable to hear.
function increaseVolume() {
  const video = document.getElementById("custom-video-player");
  if (video.volume < 1.0) {
    video.volume = Math.min(1.0, video.volume + 0.1);
  }
}

//I have set up this function in case the user is getting too distracted from how loud the music is, providing them an option to lower the volume to increase focus or put as background music.
function decreaseVolume() {
  const video = document.getElementById("custom-video-player");
  if (video.volume > 0.0) {
    video.volume = Math.max(0.0, video.volume - 0.1);
  }
}

//This function will allow users to save their study goals and have a constant reminder of what tasks should be completed. I was hoping that this will provide guideline to people who struggle to study.
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
