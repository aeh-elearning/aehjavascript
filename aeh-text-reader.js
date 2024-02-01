function aehPlayStop(audio) {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}

function aehPause(audio) {
  if (!audio.paused) {
    audio.pause();
  }
}
