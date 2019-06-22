// Program which randomly fills out dots on screen

//for color of dots
var col= {
  r : 0,
  g : 0,
  b : 0
};

//for position of dots
var spot = {
  x : 0 ,
  y : 0 
};


function setup() {
  createCanvas(600, 400);
  background(0);
  frameRate(10);
}

function draw() {
 col.r = random(100 ,255);
 col.g = 0;
 col.b = random(100 , 190);
 spot.x = random(0  , width );
 spot.y = random(0 , height);
 fill(col.r , col.g , col.b  );
 ellipse(spot.x , spot.y , 25 , 25 )
}
