var car,wall;
var speed,weight;

var deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50, 200, 30, 30);
  car.shapeColor = "white";
  car.velocityX = speed;
  car.debug = true;
  car.setCollider("rectangle",0,0,car.width,car.height);

  wall = createSprite(1500,200,60,200);
  wall.shapeColor = color(80,80,80);
  wall.debug = true;
  wall.debug = true;
  wall.setCollider("rectangle",0,0,wall.width,wall.height);

  deformation = (0.5*weight*speed*speed)/22500;
}

function draw() {
  background("black");  

if(wall.x - car.x < (car.width + wall.width)/2){
  car.collide(wall); 

  if(deformation > 180){
    car.shapeColor = "red";
  }

  if(deformation < 180 && deformation > 100){
    car.shapeColor = "yellow";
  }

  if(deformation < 100){
    car.shapeColor = "green";
  }
}
  drawSprites();
}