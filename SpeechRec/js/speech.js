var result = document.getElementById('result');
var mic = document.getElementById('mic');

mic.onclick = function () {
    if ('webkitSpeechRecognition' in window) {
        var specch = new webkitSpeechRecognition();
        specch.continuous = true;//interface controls whether continuous results are returned for each recognition, or only a single result
        specch.interimResults = true;//interface controls whether interim results should be returned (true) or not (false.)
        specch.lang = 'hy-AM';
        specch.start();
        var finalScripts = '';
        specch.onresult = function (e) { //  will run when the speech recognition service returns a result
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
            result.innerHTML = finalScripts + '<span style="color:#999">' +interimScripts + '</span>';
        };
        specch.onerror = function (e) { // will run when a speech recognition error occurs

        };
    } else {
   result.innerHTML = "Change your bowser to support the Speech Recognition";
    }

}

