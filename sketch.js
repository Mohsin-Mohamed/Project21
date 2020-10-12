// variables
var wall, bullet
var speed, weight
//setup function
function setup() {
  createCanvas(1500,400);
  thickness = random(22,83)
  wall = createSprite(1200, 200, thickness, height/2);
  bullet = createSprite(10, 200, 20, 20);
  
  speed = random(223, 321);
  weight = random(30, 52);

  bullet.velocityX = speed;
}
// draw
function draw() {
  background(0);
  
  if(wall.x - bullet.x < bullet.width/2 + wall.width/2) {
    bullet.velocityX = 0;
  
    var deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
    if(deformation > 10) {
      bullet.shapeColor = "red";
    }
    if (deformation < 10) {
      bullet.shapeColor = "green";
    }
    console.log(deformation)
    
  }

  drawSprites();
}