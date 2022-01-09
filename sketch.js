var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var score = 0;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 50, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(400, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(400, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Crea el Suelo
	ground = Bodies.rectangle(400, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition+30, boxY+10, 20,80);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 150,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 150,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+170 , boxY+10, 20,80);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,80 , {isStatic:true} );
 	World.add(world, boxRightBody);

	boxleftSprite2=createSprite(boxPosition+188, boxY+10, 20,80);
 	boxleftSprite2.shapeColor=color(0,255,0);

 	boxLeftBody2 = Bodies.rectangle(boxPosition+188, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase2=createSprite(boxPosition+260, boxY+40, 150,20);
 	boxBase2.shapeColor=color(0,255,0);

 	boxBottomBody2 = Bodies.rectangle(boxPosition+260, boxY+45-20, 150,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite2=createSprite(boxPosition+330 , boxY+10, 20,80);
 	boxleftSprite2.shapeColor=color(0,255,0);

 	boxRightBody2 = Bodies.rectangle(boxPosition+330 , boxY, 20,80 , {isStatic:true} );
 	World.add(world, boxRightBody);


	 boxleftSprite3=createSprite(boxPosition-130, boxY+10, 20,80);
 	boxleftSprite3.shapeColor=color(0,0,255);

 	boxLeftBody3 = Bodies.rectangle(boxPosition-130, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase3=createSprite(boxPosition-60, boxY+40, 150,20);
 	boxBase3.shapeColor=color(0,0,255);

 	boxBottomBody3 = Bodies.rectangle(boxPosition-60, boxY+45-20, 150,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite3=createSprite(boxPosition+10 , boxY+8, 20,80);
 	boxleftSprite3.shapeColor=color(0,0,255);

 	boxRightBody3 = Bodies.rectangle(boxPosition+10 , boxY, 20,80 , {isStatic:true} );
 	World.add(world, boxRightBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 if (packageSprite.collide(boxBase)){
	 //packageSprite.visible=false;
	 Matter.Body.setStatic(packageBody,true);
	 Matter.Body.translate(packageBody,{x:0, y: -410})
	 score = score+10;
 }

 if (packageSprite.collide(boxBase2)){
	//packageSprite.visible=false;
	Matter.Body.setStatic(packageBody,true);
	Matter.Body.translate(packageBody,{x:0, y: -410})
    score = score+50;
}

if (packageSprite.collide(boxBase3)){
	//packageSprite.visible=false;
	Matter.Body.setStatic(packageBody,true);
	Matter.Body.translate(packageBody,{x:0, y: -410})
    score = score+100;

}
  textSize(40);
  drawSprites();
  
  text("PUNTAJE: "+score,550,60);

}

function keyPressed(){

	if (keyCode=== LEFT_ARROW){
		helicopterSprite.x-=30;
		Matter.Body.translate(packageBody,{x:-30, y: 0})
	}
	if (keyCode=== RIGHT_ARROW){
		helicopterSprite.x+=30;
		Matter.Body.translate(packageBody,{x:+30, y: 0})
	}

	if(keyCode === DOWN_ARROW){
     Matter.Body.setStatic(packageBody,false);
	}
}
