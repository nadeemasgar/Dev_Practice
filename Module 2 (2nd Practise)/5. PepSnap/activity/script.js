let videoPlayer = document.querySelector("video");
let recordButton = document.querySelector("#record-video");
let photoButton = document.querySelector("#capture-photo");
let recordingState = false;
let constraints = {video:true};
let mediaRecorder;
let recordedData;

(async function() {
    
    try {
        // let devices = await navigator.mediaDevices.enumerateDevices();
        // enumerateDevices is used to list all the audio devices
        // console.log(devices);
    
        let mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        //getUserMedia is used to access the video or audio
    
        console.log(mediaStream);
    
        videoPlayer.srcObject = mediaStream;
        // ************ how src has been set? *********************
    
        mediaRecorder = new MediaRecorder(mediaStream);
    
        // We have to attach function to these events
        mediaRecorder.onstop = function(e) {
            console.log("Inside on stop !!");
            console.log(e);
        }
    
        mediaRecorder.onstart = function(e) {
            console.log("Inside on start !!");
            console.log(e);
        }
    
        mediaRecorder.ondataavailable = function(e) {
            console.log("Inside on data available");
            recordedData = e.data;
            saveVideoToFs();
        }
    
        //console.log(mediaRecorder);
    
        recordButton.addEventListener("click", function() {
            if(recordingState) {
                // stop the recording
                mediaRecorder.stop();
                recordButton.innerHTML = "Record";
            }
            else {
                // start the recording
                mediaRecorder.start();
                recordButton.innerHTML = "Recording";
            }
            recordingState = !recordingState;
        })
        
    } catch (error) {
        // if any of the await fail or promise rejects
    }

})();


function saveVideoToFs() {
    console.log("Saving Video");
    // File object in recordedData

    let videoUrl = URL.createObjectURL(recordedData); // Create Blob object into URL
    console.log(videoUrl);

    let aTag = document.createElement("a");
    aTag.download = "video.mp4";
    aTag.href = videoUrl;

    aTag.click();
    aTag.remove();
}

// Blob is an object of video data