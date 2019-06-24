let bubbles = [] ;
let overlapping;

function setup() {
  createCanvas(600, 400);
  for ( var i = 0 ; i < 50 ; i++){
  x = random(width);
  y = random(height);
  r = random(20 , 40 );
  bubble = new Bubble(x , y , r);
  bubbles.push(bubble);
  }
}
function draw() {
  background(0);
  for (let b of bubbles) {
    if (b.rollover(mouseX , mouseY)){
      b.changeColor(255);
    }else {
      b.changeColor(0);
    }
    b.move();
    b.show();
    for (let other of bubbles) {
      if (b != other && b.intersect(other)){
          overlapping = true;
      }
    }
    if (overlapping) {
      b.changeColor(255); }
    else {
      b.changeColor(0); }
  }
}

function mousePressed(){
  // let bubble = new Bubble(mouseX , mouseY ,40); 
  // bubbles.push(bubble);
  for (var i = bubbles.length -1 ; i >= 0 ; i--){
    if (bubbles[i].checkRemove(mouseX , mouseY)){
        bubbles.splice(i , 1);
    }
  }
}

