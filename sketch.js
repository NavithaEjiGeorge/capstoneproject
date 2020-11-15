const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1;

function setup(){
    createCanvas(1300,700);
    engine = Engine.create();
    world = engine.world;

 // { 
    box1 = new Weight(100,-800,100,100);
    box2 = new Box2(300,0,50,50);
    box22 = new Box2(300,0,50,50);
  //  box222 = new Box2(300,250,50,50);
    bBox = new Ground(200,360,20,60)
    m=new Ground(600,160,30,30)
    roof=new Ground(960,200,200,20)
    ground = new Ground(200,400,400,20)
    ground2 = new Saw(200,300,400,20)
    sling = new Rope(ground2.body,bBox.body)
    sling2 = new Rope(box22.body,box2.body)
    b1=new Box(600,200,15,30)
    b2=new Box(700,230,15,30)
    b3=new Box(600,320,15,30)
    b4=new Box(500,550,15,30)
    b5=new Box(650,100,15,30)
    b6=new Box(680,250,15,30)
    b7=new Box(700,550,15,30)
    b8=new Box(500,600,15,30)
    b9=new Box(400,650,15,30)
    b10=new Box(900,100,15,30)
    mb = new Rope(m.body,b1.body)
m=new Ground(600,160,30,30)
m1 = new Rope(b1.body,b2.body)
m2 = new Rope(b2.body,b3.body)
m3 = new Rope(b3.body,b4.body)
m4 = new Rope(b4.body,b5.body)
m5 = new Rope(b5.body,b6.body)
m6 = new Rope(b6.body,b7.body)
m7 = new Rope(b7.body,b8.body)
m8 = new Rope(b8.body,b9.body)
m9 = new Rope(b9.body,b10.body)
//}
border1 = new Border(450,300,20,800)
border2 = new Border(750,300,20,800)
border3 = new Border(1200,300,20,800)

bob1= new Bob(900,400)
bob2= new Bob(940,400)
bob3= new Bob(980,400)
bob4= new Bob(1020,400)
rope1 = new Rope2(bob1.body,roof.body,{x:-60,y:10});
rope2 = new Rope2(bob2.body,roof.body,{x:-20,y:10});
rope3 = new Rope2(bob3.body,roof.body,{x:20,y:10});
rope4 = new Rope2(bob4.body,roof.body,{x:60,y:10})
}

function draw(){
    background("pink");
    Engine.update(engine);
    box1.display();
    box2.display();
    box22.display();
   // box222.display();
    ground.display();
    ground2.display()
    bBox.display()
    sling.display()
   sling2.display()
   m.display()
   b1.display()
   b2.display()
   b3.display()
   b4.display()
   b5.display()
   b6.display()
   b7.display()
   b8.display()
   b9.display()
   b10.display()
   m1.display()
   m2.display()
   m3.display()
   m4.display()
   m5.display()
   m6.display()
   m7.display()
   m8.display()
   m9.display()
   mb.display()
  // m10.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  roof.display()
  border1.display()
  border2.display()
  border3.display()

  fill("green")
  textSize(20)
  text("NEWTON'S CRADLE",900,100)
  text("SEE SAW",100,100)
  text("CHAIN",600,100)
  fill("blue")
  text("Press UP ARROW",900,450)
  text("Press DOWN ARROW",900,500)
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:-20});
	}
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:20,y:20})
	}
}