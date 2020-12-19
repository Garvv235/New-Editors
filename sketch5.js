var car,wall
var speed,weight
function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 100, 100);
  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(0);  
  car.velocityX=speed;
  drawSprites();
  
}