let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.getElementById("select")

window.speechSynthesis.onvoiceschanged = () =>{
   voices = window.speechSynthesis.getVoices()
   speech.voice = voices[0];

   voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name , i)))
}








document.querySelector("#button").addEventListener("click" , (e) =>{
 if(e.target.tagName === "I"){
    e.target.classList.toggle("changed")
    console.log("cheaked")
 }else{
    speech.text = document.querySelector("#textarea").value
    window.speechSynthesis.speak(speech)
 }
   
})

