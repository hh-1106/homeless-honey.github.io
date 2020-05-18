function Rabbit() {
  this.pos = createVector(0.53*width, 0.6*height)
  this.img = loadImage("data/img/rabbit.png")
  this.a = 0.
  this.r = 200
  
  this.update = function(){
    if(left == null)  return
    this.pos.lerp(right.x, right.y, 0, 0.1)

    this.a = noise(left.x*0.01, left.y*0.01, frameCount*0.005)
    this.a = map(this.a, 0, 1, -HALF_PI, PI)
    this.r = map(cos(frameCount*0.005), -1, 1, 50, 250)
    
  }

  this.show = function(){
    push()
    translate(-width*0.5, -height*0.5)
    translate(this.pos.x, this.pos.y)
    rotate(this.a)
    image(this.img, 0, 0, this.r, this.r)
    pop()
  }

}
  