nosex=0;
nosey=0;
function preload() {
    clown_nose=loadImage('https://i.postimg.cc/ZYPBr8mV/766b82d6927aea9353efbfd7eca67e63.png');
}

function setup() {
canvas = createCanvas(400, 400);
canvas.center();
 video = createCapture(VIDEO);
video.size(400, 400);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function gotPoses(results) {
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-50;
        nosey=results[0].pose.nose.y-40;
        console.log("nosex="+nosex+"nosey="+nosey);
    }
}
function modelLoaded  () {
    console.log('PoseNet is Intialized')
    
}

function draw(){
image(video, 0, 0, 400, 400);
image(clown_nose,nosex,nosey,90,90);
}
function take_snapshot(){
    save('myFilterImage.png');
}

