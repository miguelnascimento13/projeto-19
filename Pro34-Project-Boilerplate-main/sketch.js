const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var ball
var ground
var left1,right2

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      var ball_options={
		isStatic:false,
		restitution:0.3, 
		friction:0,
		density:1.2
	  }

	  var ground_options={
        isStatic:true,
	  }


      ball = Bodies.circle(200,100,20,ball_options);
      World.add(world,ball)
      
	  ground = Bodies.rectangle(width/2,670,width,20,ground_options)
      World.add(world,ground)

      left1 = Bodies.rectangle(1100,600,20,120,ground_options);
      World.add(world,left1)
      
      right2 = Bodies.rectangle(1350,600,20,120,ground_options);
      World.add(world,right2)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
  rect(ground.position.x,ground.position.y,width,20);
  rect(left1.position.x,left1.position.y,20,120)
  rect(right2.position.x,right2.position.y,20,120)

}



function keyPressed() {
    if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
		
	}
}