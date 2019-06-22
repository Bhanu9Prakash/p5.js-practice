// flashing bouncing ball

var x = 0; // initial x coordinate of ball
var speed = -3; // initial speed of ball

var col = {
  r : 0,
  g : 0,
  b : 0
};

function setup() {
  createCanvas(400, 400);
  frameRate(50);
}

function draw() {
  col.r = random(100 ,255);
  col.g = 0;
  col.b = random(100 ,190);
  background(255);
  
  //Ellipse
  noStroke();
  fill(col.r,col.g,col.b);
  ellipse(x, 200 , 80 ,80 );
  if ( x > width || x <= 0){
     speed = speed*-1 ;
  }
  x += speed;
  
}
