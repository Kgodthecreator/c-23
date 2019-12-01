const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var box1;
var box2;
var ground1;

function setup(){
var canvas = createCanvas(500,500);
engine=Engine.create();
world=engine.world;
box1=new Box(250,250,20,20);
box2=new Box(253,180,20,20);
ground1=new Ground(250,480,500,20);





}
 function draw(){
            background("blue");

            Engine.update(engine);
box1.display();
box2.display();
ground1.display();
 }