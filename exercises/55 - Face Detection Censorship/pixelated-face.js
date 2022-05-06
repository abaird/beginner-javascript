// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.
const video = document.querySelector('.webcam')
const canvas = document.querySelector('.video')
const ctx = canvas.getContext('2d')
const faceCanvas = document.querySelector('.face')
const faceCtx = faceCanvas.getContext('2d')
const faceDetector = new FaceDetector({fastMode: true})
const optionsInputs = document.querySelectorAll(
  '.controls input[type="range"]'
);

const options = {
  SIZE: 10,
  SCALE: 1.35,
};

function handleOption(event){
  const {value, name} = event.currentTarget;
  // console.log(value, name);
  options[name] = parseFloat(value)
}
optionsInputs.forEach(input => input.addEventListener('input', handleOption))

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720},
  })
  video.srcObject = stream;
  await video.play();

  console.log(video.videoWidth, video.videoHeight);
  canvas.width = video.videoWidth
  canvas.height = video.videoHeight
  faceCanvas.width = video.videoWidth
  faceCanvas.height = video.videoHeight
}

async function detect() {
  const faces = await faceDetector.detect(video);
  // console.log(faces);
  faces.forEach(drawFace)
  faces.forEach(censor)
  requestAnimationFrame(detect)
}
function drawFace(face) {
  const { width, height, top, left } = face.boundingBox
  ctx.clearRect(0,0, canvas.width, canvas.height)
  ctx.strokeStyle = "#ffc600"
  ctx.lineWidth = 2
  ctx.strokeRect(left, top, width, height)
}


function censor({boundingBox: face}) {
  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  
  // draw the small face
  faceCtx.drawImage(
    // 5 source args
    video, // where does the source come from?
    face.x, // where do we start the source pull from?
    face.y,
    face.width,
    face.height,
    // 4 draw args
    face.x, // where should we start drawing the x and y?
    face.y,
    options.SIZE,
    options.SIZE
  );

  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;
  
  //blur the face
  faceCtx.drawImage(
    faceCanvas,
    face.x,
    face.y,
    options.SIZE,
    options.SIZE,
    face.x - (width - face.width) / 2,
    face.y - (height - face.height) / 2,
    width,
    height
  )
}

console.log("alan version");
populateVideo().then(detect)
