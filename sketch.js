var x = 200
var y = 200


function setup() {
  createCanvas(400, 400)
  rectMode(CENTER)

  createP('xswl')
}

function draw() {
  background(200, 0, 200)
  fill(0,255,255)
  rect(x, y, 100, 100, 10)

  x += random(-5,5)
  y += random(-5,5)

}
