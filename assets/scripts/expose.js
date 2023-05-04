// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // elements for horn image and audio selection
  const horn = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose>img");
  const audio = document.querySelector("audio");

  // elements for volume icon and set
  const volume = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls>img");
  const jsConfetti = new JSConfetti()

  // element of button
  const button = document.querySelector("button");


  // select a horn and select correct image and audio
  function setHorn(){
    // audioCanBePlayed = true;
    switch (horn.value){
      case "air-horn":
        hornImage.src = "assets/images/air-horn.svg"
        hornImage.alt = "Air Horn"
        audio.src = "assets/audio/air-horn.mp3"
        break;
      case "car-horn":
        hornImage.src = "assets/images/car-horn.svg"
        hornImage.alt = "Car Horn"
        audio.src = "assets/audio/car-horn.mp3"
        break
      case "party-horn":
        hornImage.src = "assets/images/party-horn.svg"
        hornImage.alt = "Party Horn"
        audio.src = "assets/audio/party-horn.mp3"
        break
      default:
        hornImage.src = "assets/images/no-image.png"
        hornImage.alt = "No image selected"
        break
    }
  }

  // When you change the volume, set image and corresponding volume
  function setVolume(){
    audio.volume = volume.value / 100
    const val = volume.value
    if (val == 0){
      volumeIcon.src = "assets/icons/volume-level-0.svg"
    } else if (val >= 1 && val <33){
      volumeIcon.src = "assets/icons/volume-level-1.svg"
    } else if (val >= 33 && val < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg"
    } else if (val >= 67){
      volumeIcon.src = "assets/icons/volume-level-3.svg"
    }
  }

  // click the “Play Sound” button and play corresponding sound 
  function playSound(){
    if (horn.value == 'party-horn'){
      jsConfetti.addConfetti()
    }
    audio.play()
  }

  // Event Listener
  horn.addEventListener("change", setHorn);
  volume.addEventListener("input", setVolume);
  button.addEventListener("click", playSound);

}
