class Paper{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.5,
            'friction':11.0,
            'density':1.1
        }
       // this.image = loadImage();
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        this.body.scale = 10.0;
        World.add(world,this.body);
     
      }
      display(){
        var angle = this.body.angle;
       push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(RADIUS);
        image( this.image, 0, 0, this.radius, this.radius);
       pop();
      }
}
