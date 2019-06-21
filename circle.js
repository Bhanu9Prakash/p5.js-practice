// animation of a circle growing and  shrinking changing its color
circleRadius = 0;
circleColor = 0;

function setup() {
  createCanvas(400, 400);
  // setting frame rate
  frameRate(30);
}

function draw() {
  background(255);
  //circle
  fill(200 , 150 , circleColor);
  ellipse(200,200,circleRadius,circleRadius);
  // checking size
  if (circleRadius == 400 ){
    circleRadius = 0;
  }
  // checking color
  if( circleColor == 255){
    circleColor = 0;
  }
  circleRadius += 1;
  circleColor += 1 ;
}
