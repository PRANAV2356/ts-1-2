var e =Matter.Engine
var w=Matter.World
var b=Matter.Bodies
var en,wo
function setup(){
    createCanvas(1200,600)
    en=e.create()
    console.log(en)
    wo=en.world
    g1=new Ground(600,580,1200,10)
    stand1=new Ground(750,450,300,10)
    b1=new Box(700,410)
    b2=new Box(750,410)
    b3=new Box(800,410)
    b4=new Box(725,360)
    b5=new Box(775,360)
    b6=new Box(750,310)
    p1=new Polygon(200,280)
    r1=new Rope(p1.body,{x:200,y:200})
}

function draw(){
    e.update(en)
    background("red")
g1.display();
stand1.display()
b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
p1.display()
r1.display()
}
function mouseDragged(){
    Matter.Body.setPosition(p1.body,{x:mouseX,y:mouseY})}
    function mouseReleased(){
        r1.fly()
    }
