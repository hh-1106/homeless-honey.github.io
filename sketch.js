var x = 200
var y = 200


function setup() {
  createCanvas(400, 400)
  rectMode(CENTER)

  createP('xswl')
  createP('11.13')
}

function draw() {
  background(200, 0, 200)
  fill(0,255,255)
  rect(x, y, 60, 60, 10)


  fill(0,155,255)
  rect(x/2, y/2, 60, 60, 10)
  x += random(-5,5)
  y += random(-5,5)

}
