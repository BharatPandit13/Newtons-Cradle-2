class Roof{

constructor(x,y){

var options = {

isStatic:true

}

this.body = Bodies.rectangle(x,y,250,20,options);

World.add(world,this.body);


}

display(){
    fill("red")
rectMode(CENTER);
rect(this.body.position.x,this.body.position.y,250,20) 

    
}

}