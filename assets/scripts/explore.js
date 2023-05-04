// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const button = document.querySelector("button");
  const input = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const faceImage = document.querySelector("#explore>img");
  const synth = window.speechSynthesis;

  // add voice list to select dropdown
  function populateVoiceList() {
    const voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  // speak the input text
  function playVoice() {
    const voices = speechSynthesis.getVoices();
    const utterThis = new SpeechSynthesisUtterance(input.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    input.blur();

    utterThis.addEventListener("start", function openMouth(){
      faceImage.src = "assets/images/smiling-open.png";
    });

    utterThis.addEventListener("end", function closeMouth(){
      faceImage.src = "assets/images/smiling.png";
    });
  }


  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener("click", playVoice);
}