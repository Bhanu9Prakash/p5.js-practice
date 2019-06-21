// Drawing of a simple emoji 
// For colorchoice check colorhunt.co

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  background("#23eae6");
  
  // face of emoji
  noStroke();
  // stroke(0);
  // strokeWeight(5);
  ellipseMode(CENTER);
  fill("#f7ff56");
  ellipse(200,200,255,255);
  
  // eyes
  fill(0);
  ellipse(145,155,25,25);
   fill(0);
  ellipse(260,155,25,25);
    
  // mouth
  fill("#e41749");
  ellipse(200,250,120,120);
  
  
}
