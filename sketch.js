const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var particle = [];
var plinko = [];
var division = [];

var divisionHeight = 300;

function setup() {
  createCanvas(650,700);

  engine = Engine.create();
  world = engine.world;

  b1 = new Division(645, 450, 10, 700);
  b2 = new Division(5, 450, 10, 700);
  b3 = new Division(325, 695, 650, 10);
  b4 = new Division(325, 5, 650, 10);

  for(var k = 0; k <= width; k = k+95){
    division.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var l = 0; l <= width; l = l+50){
    plinko.push(new Plinko(l, 60, 15));
  }
  for(var l = 0; l <= width; l = l+50){
    plinko.push(new Plinko(l, 160, 15));
  }
  for(var l = 0; l <= width; l = l+50){
    plinko.push(new Plinko(l, 260, 15));
  }

  for(var j = 0; j <= width; j = j + random(10, 640)){
    particle.push(new Particle(j, 10, 10))
  }

  ground = new Ground(width/2,693,650,10);

  Engine.run(engine);
}

function draw() {
  background("black");  

  ground.display();

  for(var k = 0; k < division.length; k++){
    division[k].display();
  }

  for(var l = 0; l < plinko.length; l++){
    plinko[l].display();
  }
  for(var l = 0; l < plinko.length; l++){
    plinko[l].display();
  }
  for(var l = 0; l < plinko.length; l++){
    plinko[l].display();
  }

  for(var j = 0; j < particle.length; j++){
    particle[j].display(); 
  }

  if(frameCount % 10 === 0){
    particle.push(new Particle(random(50,600), 10, 10));
  }
  
  drawSprites();
}