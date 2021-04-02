
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,leftBox,baseBox,rightBox
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,650,800,20)
paper =new Paper(100,100,20)

leftBox=new Box(500,600,20,100);
baseBox=new Box(600,648,200,20)
rightBox=new Box(700,640,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  leftBox.display();
  baseBox.display();
  rightBox.display();
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-85});
	}
}


