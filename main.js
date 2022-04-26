song = "";
lwx = 0;
lwy = 0;

rwx = 0;
rwy = 0;

function preload(){
    song = loadSound("song1.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        lwx = results[0].pose.leftWrist.x;
        lwy = results[0].pose.leftWrist.y;
        console.log("left wrist x = "+lwx+" left wrist y ="+ lwy);
        rwx = results[0].pose.rightWrist.x;
        rwy = results[0].pose.rightWrist.y;
        console.log("right wrist x = "+rwx+" right wrist y ="+ rwy);


    }
}

function modelLoaded(){
    console.log('Posenet is Initialized');
}

function draw(){
    image(video, 0, 0, 600, 500);
}


function  play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function pause(){
    song.pause();
}

function stop(){
    song.stop();
}