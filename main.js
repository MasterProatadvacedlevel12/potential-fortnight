leftWristX = 0
rightWristX = 0
difference = 0
function setup(){
    canvas = createCanvas(550,450);
    canvas.position(550,150);
    video = createCapture(VIDEO);
    video.size(550,450);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        leftWristX= results[0].pose.leftWrist.x;
        rightWristX= results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}



function draw(){
    background("#6C91C2");
    textSize(difference);
    fill("#FFE787");
    text("Peter", 50, 400,);
}