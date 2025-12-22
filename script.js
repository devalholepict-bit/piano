const soundMap = {
  KeyQ: "24.mp3",
  Digit2: "29.mp3",
  KeyW: "36.mp3",
  Digit3: "41.mp3",
  KeyE: "48.mp3",
  KeyR: "53.mp3",
  Digit5: "60.mp3",
  KeyT: "64.mp3",
  Digit6: "65.mp3",
  KeyY: "69.mp3",
  Digit7: "72.mp3",
  KeyU: "77.mp3",
  KeyI: "79.mp3",
  Digit9: "84.mp3",
  KeyO: "96.mp3"
};


function playSound(code) {
  if (!soundMap[code]) return;

  const audio = new Audio(`./${soundMap[code]}`);
  audio.currentTime = 0;
  audio.play();
}


document.addEventListener("keydown", function (e) {
  playSound(e.code);
});


document.querySelectorAll(".key").forEach(key => {
  key.addEventListener("click", function () {
    playSound(this.dataset.key);
  });
});

