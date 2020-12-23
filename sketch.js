const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;

var divisions =[];

var divisionHeight=300;


function setup() {
   createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
 
  
 
 ground = new Ground (100,500,1000,20);

 for (var k = 0; k <=width; k = k + 100) {
  divisions.push(new division(k, height-divisionHeight/2, 10, divisionHeight));
}
}

function draw() {
 
  background(255,255,255);
  Engine.update(engine); 
  ground.display();
  for(var k = 0; k<divisions.length;k++){
    divisions.display();
 }
  drawSprites();
}