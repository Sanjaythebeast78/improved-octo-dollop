song1=""
song2=""
function preload(){
song1=loadSound("music.mp3")
song2=loadSound("music2.mp3")
}
function play(){
    song1.play()
    song1.setvolume(1)
    song1.rate(1)

}

function setup(){
canvas=createCanvas(600,500)
canvas.center()

video=createCapture(VIDEO)
video.hide()
}

function draw(){
image(video,0,0,600,500)
}
