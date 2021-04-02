class Paper {
    constructor(x,y,r){

        var options= {
            isStatic:false,
            restitution : 0.3,
            friction : 0.5,
            density:1.8
        }

        this.body=Bodies.circle(x,y,r,options);
        this.diameter=2 * r;
        
        World.add(world,this.body);
    }

    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(angle);
        ellipseMode(CENTER);
        fill("pink")
        ellipse(0,0, this.diameter,this.diameter);
        pop();
     
    }
}