var scoreline;
var particle; 

var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var turn = 0;
var gameState = "play";

var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //particle = new Particle(mouseX, 10, 10, 10); // Initialize the particle variable

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) {    
       plinkos.push(new Plinko(j,375));
    }      
}
 
function mousePressed(){
  if (gameState != "end"){
    turn++;
    //var particle;
    particle = new Particle(mouseX, 10, 10, 10);
  }

}

function draw() {
  background("black");
  
  textSize(40);
  text("500", 7, 530);
  
  textSize(40);
  text("500", 87.5, 530);

  textSize(40);
  text("500", 168, 530);

  textSize(40);
  text("500", 245, 530);
  
  textSize(40);
  text("300", 325, 530);

  textSize(40);
  text("300", 405, 530);

  textSize(40);
  text("300", 487.5, 530);
  
  textSize(40);
  text("100", 565, 530);
  
  textSize(40);
  text("100", 647, 530);
  
  textSize(40);
  text("100", 727, 530);

  textSize(20);
  text("Score : "+ score, 20, 30);

  textSize(20);
  text("Turn : "+ turn, 720, 30);


  Engine.update(engine);
    
   for (var i = 0; i < plinkos.length; i++) {
      plinkos[i].display();
   }
   
   for (var k = 0; k < divisions.length; k++) {
       divisions[k].display();
   }
  
  if (particle != null) { 
    particle.display();
    if (particle.body.position.y > 700) {
      if (particle.body.position.x < 300) {
        score = score + 500;
        particle = null
        if (turn >= 5) gameState = "end";
        text("GAME OVER", 200, 50);
      } 
      else if (particle.body.position.x > 301 && particle.body.position.x < 600) {
        score = score + 300;
        particle = null
        if (turn >= 5) gameState = "end";
        text("GAME OVER", 200, 50);
      }
      else if (particle.body.position.x > 601 && particle.body.position.x < 820) {
        score = score + 300;
        particle = null
        if (turn >= 5) gameState = "end";
        text("GAME OVER", 200, 50);
      }
    }
  }

  //console.log(gameState);

  textSize(64);
  if (gameState === "end") text("GAME OVER", 200, 180);

}