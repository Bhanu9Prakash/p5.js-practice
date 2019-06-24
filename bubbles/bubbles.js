// To create the bubble class which can be used over again and again

class  Bubble {
    constructor(_x,_y,_r){
      this.x = _x;
      this.y = _y;
      this.r = _r;
      this.color = 0 ;
    }
// change color of bubble 
    rollover(x , y){
      let d = dist(x , y , this.x , this.y);
      return (d < this.r );
    }
// change color of bubble
   changeColor(_color){
     this.color = _color ;
   }
// check and remove bubble if clicked 
    checkRemove(x , y){
      let d = dist(x , y , this.x , this.y);
      return ( d < this.r );
    }
// checks if two bubbles are intersecting
    intersect(other){
      let d = dist ( this.x , this.y , other.x , other.y );
      return ( d  < this.r + other.r ) ;
    }
// To move the position of bubble
    move(){
     this.x = this.x + random(-5,5);
     this.y = this.y + random(-5,5);
    }
// To show the bubble with updated with move()
   show(){
     stroke(255);
     strokeWeight(4);
     fill(this.color ,100);
     ellipse(this.x , this.y , this.r, this.r );
   }
}
