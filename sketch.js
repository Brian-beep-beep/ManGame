
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Man, ManImg
var Man2, Man2Img
var PoliceMan, PoliceManImg
function preload()
{
ManImg = loadImage("Man.png")	
Man2Img = loadImage("Man 2.jpeg")
PoliceManImg = loadImage("PoliceMan Mate.png")
RobloxArmyManImg = loadImage("Roblox Army Man.png")
WoManImg = loadImage("Mother.png")
GodManImg = loadImage("God Man.png")
}

function setup() {
	createCanvas(2000, 2000);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Man = createSprite(500,300,50,50)
	Man.addImage(ManImg)
    Man.scale = 0.5
  
	Man2 = createSprite(500,600,50,50)
	Man2.addImage(Man2Img)
	Man2.scale = 0.4
	Engine.run(engine);
  
    PoliceMan = createSprite(800,600,50,50)
	PoliceMan.addImage(PoliceManImg)
	PoliceMan.scale = 0.4

	RobloxArmyMan = createSprite(1000,300,50,50)
	RobloxArmyMan.addImage(RobloxArmyManImg)
	RobloxArmyMan.scale = 0.5

    WoMan = createSprite(100,300,70,70)
	WoMan.addImage(WoManImg)
	WoMan.scale = 1

    GodMan = createSprite(300,300,100,100)
	GodMan.addImage(GodManImg)
    GodMan.scale = 0.8

	Man.visible = false
	Man2.visible = false
	PoliceMan.visible = false
	RobloxArmyMan.visible = false
	WoMan.visible = false
	GodMan.visible = false
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  
}
function keyPressed(){
	if (keyCode===71){
		GodMan.visible = true
	}
	if (keyCode===65){
		RobloxArmyMan.visible = true
	}
	if (keyCode===87){
		WoMan.visible = true
	}
	if (keyCode===77){
		Man.visible = true
	}
	if (keyCode===50){
		Man2.visible = true
	}
	if (keyCode===80){
		PoliceMan.visible = true
	}
}



