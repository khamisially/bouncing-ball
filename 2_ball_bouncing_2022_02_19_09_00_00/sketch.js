var x = 20; 
var y = 0; 
var speedx = 4; 
var speedy = -3  
var posx = 8;  

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220,100,100);
  
  move();
  limits_bounce();
  shape(50);

}

function move(){
  x = x+speedx;
  y = y+speedy;
}


function limits_bounce() {
  if ( (x>width) || (x<0) ){
    speedx = speedx *-1;
  }
  
  if ( (y>height) || (y<0) ){
    speedy = speedy *-1;
  } 
}

function shape() {
    ellipse (x,y,20,20,20,);
      ellipse (x/2,y,20,20,50);

}
