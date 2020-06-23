
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Dustbin1, dustbin2, dustbin3;
var paper,ground;
var box1,box2,box3;

function preload()
{
boxImg = loadImage("dustbingreen.png");   
}

function setup() {
	
	createCanvas(800, 700);

	dustbin2 = createSprite(700,520,20,20);
	dustbin2.addImage(boxImg);
	dustbin2.scale = 0.4;
	engine = Engine.create();
	world = engine.world;
	
	paper = new Paper(100, 500,45);
	
	ground = new Ground(400,580,800,20);
	box1 = new Box(700, 565, 100,10);
	
	box2= new Box(650, 542, 10, 55);
	box3= new Box(750, 542, 10, 55);
   
	
}


function draw(){
  background(255);
  Engine.update(engine);
  drawSprites();
  paper.display();
  ground.display();
  console.log("bye")
  box1.display();
  box2.display();
  box3.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:360,y:-209});
	   
	 }
}
