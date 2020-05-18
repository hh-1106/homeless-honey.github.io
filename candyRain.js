function CandyRain() {
  this.candies = []

  this.addCandy = function(){
    for(var i=0; i<10; i++){
      this.candies.push(new Candy())
    }
  }

  this.update = function() {
    for(var can of this.candies){
      can.update()
    }
  }

  this.show = function() {
    push()
    translate(-width*0.5, -height*0.5)
    for(var can of this.candies){
      can.show()
    }
    pop()
  }
}