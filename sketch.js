let video
let imgs = []
let bgm, bugu
var candyRain
var rabbit

function preload(){
  for(let i=0; i<6; i++){
    imgs[i] = loadImage("data/img/" + i + ".png")
  }
  bgm  = loadSound("data/music/bgm.mp3")
  bugu = loadSound("data/music/bugu.wav")
}

function setup() {
  createCanvas(1200, 849)
  colorMode(HSB, 360, 100, 100, 100)
  imageMode(CENTER)

  bgm.loop()
  video = createCapture(VIDEO)
  video.hide()
  console.log(video.width, video.height)

  poseNet = ml5.poseNet(video, modelLoaded)
  poseNet.on('pose', gotPoses)

  for(var img of imgs){
    img.resize(width, height)
  }

  candyRain = new CandyRain()
  rabbit = new Rabbit()
  background(30)
}

function draw() {
  background(30)
  // image(video,0,0,width, height)
  push()
  translate(width*0.5, height*0.5)
  image(imgs[0] ,0, 0)
  candyRain.update()
  candyRain.show()
  image(imgs[1] ,0, 0)
  image(imgs[2] ,0, 0)
  image(imgs[3] ,0, 0)
  rabbit.update()
  rabbit.show()
  image(imgs[5] ,0, 0)
  pop()

  drawWrists()
}


