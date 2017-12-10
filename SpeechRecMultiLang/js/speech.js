var result = document.getElementById('result');
var mic = document.getElementById('mic');
var lang = document.getElementById('lang');
var langChange ;
var copy = document.getElementById("copy");
var speech = new webkitSpeechRecognition();
mic.onclick = function () {
        if ('webkitSpeechRecognition' in window) {
            speech.continuous = true;//interface controls whether continuous results are returned for each recognition, or only a single result
            speech.interimResults = true;//interface controls whether interim results should be returned (true) or not (false.)
            speech.lang = "'" + langChange + "'";
            console.log(speech.lang);
            speech.start();
            var finalScripts = '';
            speech.onresult = function (e) { //  will run when the speech recognition service returns a result
                // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
                // It has a getter so it can be accessed like an array
                // The first [0] returns the SpeechRecognitionResult at position 0.
                // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
                // These also have getters so they can be accessed like arrays.
                // The second [0] returns the SpeechRecognitionAlternative at position 0.
                // We then return the transcript property of the SpeechRecognitionAlternative object
                var interimScripts = "";
                for (var i = e.resultIndex, word = e.results.length; i < word; i++) {
                    var transcript = e.results[i][0].transcript;
                    transcript.replace('\n', '<br>');
                    if (e.results[i].isFinal) {
                        finalScripts += transcript;
                    } else {
                        interimScripts += transcript;
                    }
                }
                result.innerHTML = finalScripts + interimScripts;
            };
            speech.onerror = function () { // will run when a speech recognition error occurs
                // alert("Something is wrong,cheack your device!");
            };
        } else {
            result.innerHTML = "Change your bowser to support the Speech Recognition";
        }

};
// mic.ondblclick = function () {
//     if (mic.innerHTML === '<i class="fas fa-microphone-slash"></i>') {
//         mic.innerHTML = '<i class="fas fa-microphone"></i>';
//     } else {
//         mic.innerHTML = '<i class="fas fa-microphone-slash"></i>';
//         // speech.continuous = false;
//         // speech.interimResults = false;
//         speech.stop();
//         }
// };

lang.onchange = function () {
langChange = lang.value;
console.log(langChange);
};


copy.onclick = function() {
    result.select();
    document.execCommand("Copy");
};
