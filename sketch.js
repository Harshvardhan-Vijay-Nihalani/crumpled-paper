
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ballX;
var ballY;
var paperX,paperY;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

 
	engine = Engine.create();
	world = engine.world;
	var paper_options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

	//Create the Bodies Here.
	paper=Bodies.circle(paperX,paperY,30, paper_options);
	fill("purple");
	World.add(world,paper);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ballX,ballY,30,30);
  if(mouseClicked===true){
	paper=Bodies.circle(paperX,paperY,30, paper_options);
	fill("purple");
	paperX=mouseX;
	paperY=mouseY;
	paperX=ballX;
	paperY=ballY;
  } 
}



