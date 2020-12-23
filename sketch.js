var movingRect, gameObject1, gameObject2, gameObject3, gameObject4

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(200, 200, 50, 50)
  gameObject1.shapeColor = "blue"
  gameObject2 = createSprite(300, 200, 50, 50)
  gameObject2.shapeColor = "blue"
  gameObject3 = createSprite(400, 200, 50, 50)
  gameObject3.shapeColor = "blue"
  gameObject4 = createSprite(500, 200, 50, 50)
  gameObject4.shapeColor = "blue"


}

function draw() {
  background(0,0,0);  
  movingRect.y = mouseY
  movingRect.x = mouseX
  if(isTouching(gameObject1, movingRect)){
    gameObject1.shapeColor = "red"
    movingRect.shapeColor = "red"
  }
  else{
    gameObject1.shapeColor = "blue"
    movingRect.shapeColor = "blue"
  }
  drawSprites();
}
function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 + object1.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2){
    return true
  }
  else{
    return false
  }
}