//creating a class which would act as a parent for other classes and would define the properties of the ground 
class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
          //properties of the class
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //this would make a body in the shape of the rectangle and the properties given above
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //loads the image to use
        this.image = loadImage("sprites/base.png");
        //adds the body to the our world
        World.add(world, this.body);
      }
      display(){
        //namespacing time!!
        var angle = this.body.angle;
        //makes the body rotate like in the real world
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        //the most important part; helps in displaying the image which the following properties
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}