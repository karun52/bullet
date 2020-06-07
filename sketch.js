var wall;
var bullet,speed,weight;




function setup() {
  createCanvas(800,400);
  speed=random(223,321);
  weight=random(30,52);
  
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor="green";
  bullet.velocityX=speed;
   wall=createSprite(1200,200,thickness,height/2 );

}

function draw() {
  background(0);  
  if (wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    bullet.shapeColor="blue";
  }
  drawSprites();
}
