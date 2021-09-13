// https://teachablemachine.withgoogle.com/models/30uHULH3C/
Webcam.set({
    height: 350,
    width: 350,
    image_format: "png",
    png_quality: 90
})
Webcam.attach("#camera")
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id = "captured_image" src ="' + data_uri + '"/>'
    })
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/30uHULH3C/model.json', modelLoaded);
function modelLoaded() {
    console.log('Model Loaded!')
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The prediction is" + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    utterThis.rate = 0.5;
    synth.speak(utterThis)
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}


function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;

        prediction_1 = results[0].label;

        speak()
        if (results[0].label == "Happy") {
            document.getElementById("update_emoji").innerHTML = "&#128522";
        }
        if (results[0].label == "Sad") {
            document.getElementById("update_emoji").innerHTML = "&#128532";
        }
        if (results[0].label == "Angry") {
            document.getElementById("update_emoji").innerHTML = "&#128548";
        }
    }
}