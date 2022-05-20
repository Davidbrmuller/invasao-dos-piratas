class Barco {
    constructor(x,y,width,height,barcopos,boatanimation){
        this.animation=boatanimation
        this.speed=0.05
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height
        this.barcopos=barcopos;
        this.isbroken=false;
this.body=Bodies.rectangle(x,y,width,height);
this.image=loadImage("assets/boat/boat.png")
World.add(world,this.body);
    }
    remove(i){
        this.animation=brokenboatanimation
        this.speed=0.05
        this.height=300
        this.width=300
        this.isbroken=true;
        setTimeout(()=>{
        Matter.World.remove(world,barcos[i].body)
        delete barcos[i]},500)
    }
    animate(){
        this.speed+=0.05
    }
    display(){
var pos=this.body.position;
var index =floor(this.speed%this.animation.length)
var angle=this.body.angle;
push()
translate(pos.x,pos.y)
rotate(angle);
imageMode(CENTER)
image(this.animation[index],0,this.barcopos,this.width,this.height)
pop();
    }
}