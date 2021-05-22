let videoPlayer = document.querySelector("video");
let constraints = {video:true};

(async function() {
    // let devices = await navigator.mediaDevices.enumerateDevices();
    // enumerateDevices is used to list all the audio devices
    // console.log(devices);

    let mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    //getUserMedia is used to access the video or audio

    console.log(mediaStream);

    videoPlayer.srcObject = mediaStream;
    // ************ how src has been set? *********************
})();