const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, box1, box2, box3, ground;
var paper_img, dustbin_img, bin_x, bin_y;
var bin_width, bin_height;

function preload(){
	paper_img = loadImage("images/paper.png");
	dustbin_img = loadImage("images/dustbin.png");
}

function setup() {
	createCanvas(1280, 605);

	engine = Engine.create();
	world = engine.world;

	dustbin = new Dustbin(1030, 455, 200, 20);
	
	paper = new Paper(200, 400, 50);

	ground = new Ground(640, 490, 1280, 50);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(211);
  
  drawSprites();

  paper.display();
  ground.display();
  dustbin.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.position, {x: 50, y: -42});
	}
}