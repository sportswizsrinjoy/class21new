var movingRect, fixedRect;

function setup() {

  createCanvas(1200,800);

  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  
  fixedRect= createSprite(200,300,50,80);
  fixedRect.shapeColor = "green";

  gameObject1 = createSprite(100,100, 50,50);
  gameObject1.shapeColor = "green";
gameObject1.velocityX=2;
   gameObject2 = createSprite(200,100, 50,50);
  gameObject2.shapeColor = "green";
gameObject2.velocityX=-2;
   gameObject3 = createSprite(300,100, 50,50);
  gameObject3.shapeColor = "green";

   gameObject4 = createSprite(400,100, 50,50);
  gameObject4.shapeColor = "green";
  
}

function draw() {

  background(0,0,0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
bounceOff(gameObject1,gameObject2);
  if(isTouching(movingRect, gameObject2)){

   gameObject2.shapeColor= "blue";
   movingRect.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor= "green";
   gameObject2.shapeColor = "green";
  }
  

  console.log(movingRect.y- fixedRect.y);
  
  drawSprites();
  
}

function isTouching(object1, object2) {

if (object1.x- object2.x < object1.width/2+ object2.width/2
 && object2.x - object1.x < object1.width/2+ object2.width/2
 && object1.y- object2.y < object1.height/2+ object2.height/2
 && object2.y - object1.y < object1.height/2+ object2.height/2) {
  
  return true;
  
}
else {
  return false;
}
  
}
function bounceOff(object1,object2){
  if(object1.x- object2.x < object1.width/2+ object2.width/2
    && object2.x - object1.x < object1.width/2+ object2.width/2){
      object1.velocityX=(-1)*object1.velocityX;
    object2.velocityX=(-1)*object2.velocityX;
  }
  if(object1.y- object2.y < object1.height/2+ object2.height/2
    && object2.y - object1.y < object1.height/2+ object2.height/2){
      object1.velocityY=(-1)*object1.velocityY;
    object2.velocityY=(-1)*object2.velocityY;
  } 
}