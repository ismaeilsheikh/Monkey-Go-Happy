
var monkey , monkey_running
var ground
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400);

  monkey=createSprite(50,180,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.13;

  ground=createSprite(200,380,800,200);
  ground.velocityX=-5;
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
}


function draw() {
  background(255);

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
  monkey.collide(ground);  
  
  monkey.velocityY=monkey.velocityY+0.8;
   
  if (ground.x<0){
    ground.x=200;
  }
  
  if (monkey.y==240.09){
    if (keyDown("space")){
      monkey.velocityY=-13;
    }
  }
  
  bananas();
  obstacles();
  drawSprites();
}

function obstacles(){
  
  if (frameCount % 300 === 0) {
    var obstacle=createSprite(450,250,50,50);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-5;
    obstacle.scale=0.175;
    obstacle.lifetime=100;

    obstacleGroup.add(obstacle);
  }


}

function bananas(){

  if (frameCount % 80 === 0) {
    var banana=createSprite(450,125,50,50);
    banana.addImage(bananaImage);
    banana.velocityX=-5;
    banana.scale=0.075;
    banana.lifetime=100;

    FoodGroup.add(banana);
  }


}







