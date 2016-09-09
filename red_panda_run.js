var redPanda;
var bamboos;
var distance;

function Red_Panda(){
  redPanda = new component(25, 25, "red", 50, 200);
  redPanda.gravity = 0.25;
  distance = new component("17px", "Arial", "black", 300, 50, "text");
  game.start();
}

var game = {
  canvas : document.createElement("canvas"),
  start : function(){
    this.canvas.width = 700;
    this.canvas.height = 300;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInvertal(traveling, 10);
  }
}


