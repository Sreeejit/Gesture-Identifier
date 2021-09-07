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
