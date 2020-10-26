
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var roof, rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
roof1 = new Roof (400, 100, 600, 30);

bobObj1 = new bob(200, 600, 100);
bobObj2 = new bob(300, 600, 100);
bobObj3 = new bob(400, 600, 100);
bobObj4 = new bob(500, 600, 100);
bobObj5 = new bob(600, 600, 100);

rope1 = new Rope(bobObj1.body, roof1.body, -200, 0)
rope2 = new Rope(bobObj2.body, roof1.body, -100, 0)
rope3 = new Rope(bobObj3.body, roof1.body, 0, 0)
rope4 = new Rope(bobObj4.body, roof1.body, 100, 0)
rope5 = new Rope(bobObj5.body, roof1.body, 200, 0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}

function keyPressed()
{
if (keyCode === UP_ARROW)
{
	Matter.Body.applyForce(bobObj3.body,bobObj3.body.position,{x:1200,y:-1000});
}
}


