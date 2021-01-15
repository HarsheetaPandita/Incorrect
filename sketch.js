var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	var canvas = createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);
	fairy.scale =0.25;

	star = createSprite(star.position.x,star.position.y);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	var starBody_options = {
		restitution : 0.5
	  }

	starBody = Bodies.circle(650 , 30 , 5 , starBody_options);
	World.add(world, starBody);
	
	Engine.run(engine);

	if(starBody.position.y > 470){

	}

}


function draw() {
  background(bgImg);

  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(star.position.x,star.position.y,20,20);

  drawSprites();

}

function keyPressed() {
	//write code here

	if(keyCode === LEFT_ARROW){
	 fairy.x = 2;
	}

	if(keyCode === RIGHT_ARROW){
		fairy.x = -2;
	   }
}
