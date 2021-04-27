var fixedRect, movingRect;
var room1,room2,room3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY=-2;
  
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY=2;

  room1=createSprite(600,600,50,50);
  room1.shapeColor="white";

  room3=createSprite(800,600,50,50);
  room3.shapeColor="white";

  room2=createSprite(400,600,50,50);
  room2.shapeColor="white";
 
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;
  
 if(isTouching(movingRect,room1)){

  movingRect.shapeColor = "red";
  room1.shapeColor = "red";
  

}
else{

  movingRect.shapeColor = "green";
  room1.shapeColor = "white";
  

}
  
  bounceOff(movingRect,fixedRect);
  drawSprites();

}

