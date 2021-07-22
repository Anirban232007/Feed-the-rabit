var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  leafImg=loadImage("leaf.png")
}

function setup(){
  
  createCanvas(1900,960);
  
// Moving background
garden=createSprite(1000,500);
garden.addImage(gardenImg);
garden.scale=4
garden.scalewidth=6


//creating boy running
rabbit = createSprite(900,940,30,30);
rabbit.scale =0.16;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  appledrop()
  leafdrop()
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if (keyDown("left")){
    rabbit.x=rabbit.x-7
  }
  if (keyDown("right")){
    rabbit.x=rabbit.x+7
  }
  

  drawSprites();
}
function appledrop(){
  if (frameCount%40===0){
    apple=createSprite()
    apple.addImage(appleImg)
    apple.velocityY=4
    apple.x=Math.round(random(100,1700))
    apple.scale=0.1
    apple.lifetime= 1000
    apple.collide(rabbit)
    if (apple.collide(rabbit)){
      destroy(apple)
    }
  }
}
function leafdrop(){
  if (frameCount%200===0){
    leaf=createSprite()
    leaf.addImage(leafImg)
    leaf.velocityY=4
    leaf.x=Math.round(random(100,1700))
    leaf.scale=0.1
    leaf.lifetime= 1000
    
   
  }
}
function destroy(sprite){
  sprite.destroy
}