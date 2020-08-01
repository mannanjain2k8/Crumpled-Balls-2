
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var Dustbin1;
function preload()
{
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     Dustbin1 = new Dustbin(610,510,180,210);
    
     Ball1 = new Ball(67,620,40);
     Ground1 = new Ground(10,630,1600,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Ball1.display();
  Dustbin1.display();

  Ground1.display();

 drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(Ball1.body,Ball1.body.position,{x: 176 , y: -165 })
  }

}

