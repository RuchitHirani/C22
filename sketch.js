const Engine=Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies


var engine,world,ground,groundoptions,ball,balloptions

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
groundoptions={
  isStatic:true
}
  ground=Bodies.rectangle(200,350,400,20,groundoptions)
  World.add(world,ground)
console.log(ground)
balloptions={
  restitution:1
}
 ball=Bodies.circle(300,100,30,balloptions)
 World.add(world,ball)
}

function draw() {
  background("black")
  rectMode(CENTER)
  Engine.update(engine)
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
}
