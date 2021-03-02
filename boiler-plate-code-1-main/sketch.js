var car, wall;
var speed, weight;

function setup() {
  createCanvas(1200,800);
 
 car = createSprite(50,200,50,50);
 wall = createSprite(1500, 200,50,50);
 car.shapeColor = "red";

  wall = createSprite(1500, 200, 50, 50);
  wall.shapeColor = "grey";
  
}

function draw() {
  background(0,0,0);  
  car.velocityx = speed;
 

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  if (isTouching(movingRect,rect)){
  rect.velocityX=2;


  }

  else {
    car.shapeColor = "green";
  
    car.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(car,wall){
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x -car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - wall.y < wall.height/2 + car.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}
