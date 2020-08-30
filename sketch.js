var back  ;
var monkey1 , monkey1Img;
var fruita , Img ;
var obstacle ;
var fruita ;
var ground ;

function preload(){ 
backImg=loadImage("jungle.jpg");
  monkey1Img=loadAnimatipon("monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png","monkey_9.png","monkey_10.png");
  graniteImg=loadImage("stone.png");
  fruitImg=loadImage("banana.png");
}
    
function setup() {
  createCanvas(400, 400);
  back=createSprite(200,200,10,10);
  back.addImage(backImg);
  back.scale=1;
  back.velocityX=-5;
 
  monkey1 = createSprite(50,350,20,50);
  ground=createSprite(200,380,500,10);
   obstaclesGroup = new Group();
  fruitsGroup = new Group ();
  ground.visible=false;
}
function draw() {
  background(220);
   if (back.x  < 0) {
          back.x = back.width/2;
            }
  
  if (keyDown("space") && monkey1.y >= 330) {
    monkey1.velocityY=-20;
  }
  monkey1.velocityY = monkey1.velocityY + 0.8;
   monkey1.collide(ground);
  spawnObstacles();
  spawnFruit();
   
   if (obstaclesGroup.isTouching(monkey1)){
     monkey1.scale=0.5;
   }
  
  
   if (fruitsGroup.isTouching(monkey1)){
     monkey1.scale=2;
   }
  
  drawSprites();
}


function spawnObstacles() {
  if(frameCount % 160 === 0) {
    var obstacle = createSprite(400,300,40,40);
   
    obstacle.velocityX = -4;
    obstacle.lifetime = 300;
    
     obstaclesGroup.add(obstacle);
  }
}
function spawnFruit() {
  if(frameCount % 90 === 0) {
    var fruita = createSprite(400,200,20,60);
    fruita.velocityX = -4;
       fruita.lifetime = 300;
    fruitsGroup.add(fruita);
  }
}