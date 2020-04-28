//making the names of the Engine, the World, the Bodies and the constraining between the two bodies smaller
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//defining the variables to be used
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    //loading the image for background
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    //creating the canvas
    var canvas = createCanvas(1200,400);
    //creating our physics engine which is to be used
    engine = Engine.create();
    //adding our world to the engine we've just created
    world = engine.world;

    //creating the objects such ass ground, platform, the boxes, the pigs, the logs and the bird
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);

    //log6 = new Log(230,180,80, PI/2);
    //creating the slingshot
    slingShot = new Sling(bird.body,{x:200,y:100});
}

function draw(){
    //changing the background to the image we've loaded
    background(backgroundImg);
    //it keeps updating the engine which would help is making the physics engine work
    Engine.update(engine);
    strokeWeight(4);
    //calling the function display for every object we've created
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingShot.display();    
}
function mouseDragged(){
    //whenever the mouse is dragged, the birds position should change to that of the mouse's
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    //whenever the mouse is dragged and then released, the bird should fly!!!
    slingShot.fly();
}
