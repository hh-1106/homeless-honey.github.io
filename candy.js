
function Candy() {
  this.pos = createVector(random(0.2, 0.4)*width, 0.28*height)
  this.vel = createVector(0, random(0.1, 2))
  this.acc = createVector(random(-0.01, 0.01), 0.02)
  this.col = color(random(360), 100, 100)
  this.r   = random(15, 20)

  this.update = function() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
  }

  this.show = function() {
    noStroke()
    fill(this.col)
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2)
  }
}