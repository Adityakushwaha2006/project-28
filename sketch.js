var stone, backgroundImg,fx,chain,mango1,mango2,mango3,mango4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	backgroundImg = loadImage("Untitled design (1).png");
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	fx = new bl(125,350,1)
stone= new Stone(120,360,40,40);
chain= new Chain(stone.body,fx.body);
mango1= new ball(740,240,60,60);
mango2= new ball(500,170,60,60);
mango3= new ball(600,80,60,60);
mango4= new ball(640,190,60,60);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
stone.display();
fx.display();
chain.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();




  drawSprites();
 
}

function detection(Stone,ball){

mangoBodyPosition= ball.body.Position
stoneBodyPosition= Stone.body.position

var distance =dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x , mangoBodyPosition.y )
if(distance<=ball.width+Stone.width){
Matter.Body.setStatic(ball.body,false);
}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   chain.fly();
}

















