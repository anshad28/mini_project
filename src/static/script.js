const textarea=document.querySelector("textarea"),
voiceList=document.querySelector("select")
speechbtn=document.querySelector("button")
let synth=speechSynthesis,
isSpeaking=true;
voices();
function voices(){
    for(let voice of synth.getVoices()){
        let selected = voice.name==="Google US English" ? "selected" : "";
        let options ='<option value="${voice.name}" ${selected}>${voice.name}(${voice.lang})</option>';
    voiceList.insertAdjacentHTML("beforeend",options);
    }
}

synth.addEventListener("voicechanged",voices);
function texttospeech(text){
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.voice=voice;
    synth.speak(utterance);
}

speechBtn.addEventListener("click", e=>{
    e.preventDefault();
    if(textarea.value!==""){
        if(!synth.speaking){
            texttospeech(textarea.value);
        }
        speechbtn.innerText="convert to speech";

    }
});
