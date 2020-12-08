//For declaring the variables here so that it becomes PUBLIC(Global).
var monkey,monkeyImages,monkeyCollide;
var banana,bananaImage,bananaGroup; 
var ground;
var obstacle,obstacleImage,obstaclesGroup;
var END = 0;
var PLAY = 1;
var gameState = PLAY;
var gamestate = END;
var score = 0;
var score2 = 0;
var bck,bckImage;


function preload()
{
//For loading Images.  
monkeyImages = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png");

bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
monkeyCollide = loadAnimation("sprite_1.png");
bckImage = loadImage("jungle.jpg");

}

function setup() 
{
//For creating canvas  
createCanvas(800,400);
  
//For creating background sprite.
 bck = createSprite(0,0,800,400);
 bck.addImage(bckImage);
 bck.scale = 1.5;
 bck.velocityX = -3;
// bck.x = bck.width/2;
  
//For creating monkey sprite.
 monkey = createSprite(80,295,15,15);
 monkey.addAnimation("moving",monkeyImages);
 monkey.addAnimation("collided",monkeyCollide);
 monkey.scale = 0.1;
 monkey.setCollider("circle",0,0);
 monkey.debug = true;
// monkey.velocityY = -7;
  
//For making a gorup for the banana's.
 bananaGroup = createGroup();
 obstaclesGroup = createGroup()
//For creating ground sprite.
 ground = createSprite(225,345,900,15);
 ground.velocityX = -3;
 ground.shapeColor = "green";
 ground.visible = false;
}

function draw() 
{
//for giving colour to the canvas.
 background("cyan");
//For declaring the variables in the function draw at the top.
 obstacles();
 bananas();
  
  
 if (ground.x === 0)
 {
   ground.x = 225;  
 }
 if (bck.x < 100)
 {
   bck.x = bck.width/2;
 } 
  
  
  
//For making the monkey colliding the ground.
  monkey.collide(ground);
  
//If the game State is PLAY various function swill happen.
 if (keyDown("space"))
 {
  monkey.velocityY = -7;
 }
 score = score + 1;

 monkey.velocityY = monkey.velocityY + 0.3;

  if (bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score2 = score2 + 2;
  }
  switch(score2){
    case 10 : monkey.scale = 0.12;
    break;  
    case 20 : monkey.scale = 0.15;
    break;
    case 30 : monkey.scale = 0.2;
    break;
    case 40 : monkey.scale = 0.25;
    break;
    default :
    break;
  }

 if (obstaclesGroup.isTouching(monkey)){
   monkey.scale = 0.1;
 } 

//Making the sprites appear.
 drawSprites();

//For making the score appear.
 textFont("times new roman")
 textSize(30);
 fill("white");
 text("Survival Time : "+score , 50,35); 
  
 textFont("times new roman")
 textSize(30);
 fill("white");
 text("Score : "+ score2 , 650,35); 
}

function obstacles()
{
  if (frameCount % 200 === 0){
 obstacle = createSprite(400,300,20,20);
 obstacle.addImage(obstacleImage);
 obstacle.scale = 0.2;
 obstacle.velocityX = -3;
 obstacle.lifetime = 400;
 obstacle.debug = true;
 obstacle.setCollider("circle",0,0);
 obstaclesGroup.add(obstacle);
}
}

function bananas()
{
if (frameCount % 150 === 0){
 banana = createSprite(800,200,10,10);
 banana.addImage(bananaImage);
 banana.scale = 0.1;
 banana.y = Math.round(random(80,200));
 bananaGroup.add(banana);
 banana.velocityX = -3;
 banana.lifetime = 400;
 banana.setCollider("circle",0,0);
 banana.debug = true;
 } 
}

