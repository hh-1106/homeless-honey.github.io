function mouseClicked(){
  interactive(mouseX, mouseY)
  if(frameCount%3 == 0){
    candyRain.addCandy()
  }
}

function interactive(x, y){
  // 摸云
  let cloud = imgs[1].get(x, y)
  if(cloud[0] != 0){
    console.log("下糖果雨!")
    candyRain.addCandy()
  }

  // 摸鸟
  let bird = imgs[5].get(x, y)
  if(bird[0] != 0){
    console.log("布谷布谷!!")
    if(!bugu.isPlaying()){
      bugu.play()
    }
  }
}