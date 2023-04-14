noseX=0;
noseY=0;
difference= 0;
left_wristX=0;
right_wristX=0;



function setup() 
{
    video= createCapture(VIDEO);
    video.size(550,500);

canvas=createCanvas(550,500);
canvas.position(600,135);

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw ()
{
    background('#ba8706'); 
    fill("#9011fa");
    stroke("#9011fa");
    square(noseX, noseY , difference);
    document.getElementById("square_side").innerHTML="Width & Height of the Square will be =" + difference + "px";
}

function modelLoaded()
{
    console.log("posenet is initialized");
}

function gotPoses(results) 
{
if (results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("Nose x =" + noseX + "And Nose Y = " + noseY);

    left_wristX=results[0].pose.leftWrist.x;
    right_wristX=results[0].pose.rightWrist.x;
    console.log("left wrist X =" +  left_wristX + "And right wrist X = " +  right_wristX);

    difference= floor(left_wristX - right_wristX);
}
}