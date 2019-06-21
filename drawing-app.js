// Simple Program to do Drawing
// How to use :
// mouse click for reset
// Type key for :
// w  white
// other black
// v violet
// i indigo 
// b blue 
// g green
// y yellow
// o orange
// r red

// For Stroke size type from 1 to 9 ascending


let value = 0 ;
let stroke = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background
  background(255);
}

function draw() {
  noStroke();
  fill(value);
  ellipse(mouseX , mouseY , stroke , stroke);
}

 // resets background
function mousePressed(){
 background(255); 
}

// selects Color
function keyTyped(){
 switch (key){
   case 'w' :
     value = "#FFFFFF";
     break;
   case 'v' :
     value = "#800080";
     break;
   case 'i' :
     value = "#4B0082";
     break;
   case 'b' :
     value = "#0000FF";
     break;
   case 'g' :
     value = "#008000" ;
     break;
   case 'y' :
     value = "#FFFF00";
     break;
   case 'o' :
     value = "#FFA500";
     break;
   case 'r' :
     value = "#FF0000";
     break;
   case '1':
     stroke = 10;
     break;
   case '2':
     stroke = 20;
     break;
   case '3':
     stroke = 30;
     break;
   case '4':
     stroke = 40;
     break;
   case '5':
     stroke = 50;
     break;
   case '6':
     stroke = 60;
     break;
   case '7':
     stroke = 70;
     break;
   case '8':
     stroke = 80;
     break;
   case '9':
     stroke = 90;
     break;
   default :
     value = 255 ;
     stroke = 5;
}
  
   
  

}
