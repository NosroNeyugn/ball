
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paperObject, dustbin;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	
	ground = new Ground(400,650,800,10);
	
	dustbin = new Dustbin(650,550,75,100);

	paperObject = new Paper(20,500,35);
	
	
	

}


function draw() {
  rectMode(CENTER);
  background("white");
  paperObject.display();
  ground.display();
  dustbin.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	 }
   }


