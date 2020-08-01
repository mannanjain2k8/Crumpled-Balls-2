class Ball{
constructor(x,y,radius){
    var options = {
        'isStatic': false,
        'restitution': 0.3,
        'friction': 0.5,
        'density': 1.2
    }
   this.radius = radius;
   this.x = x;
   this.y = y;
   this.body = Bodies.circle(x,y,radius,options);
   this.image = loadImage("sprites/CrumpledPaper.png");
   this.body.scale = 1.5;
   World.add(world,this.body);
   
}
display(){
   var pos = this.body.position;
   imageMode(CENTER);
   image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)

}

}