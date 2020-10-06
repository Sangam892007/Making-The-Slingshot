class Drops {
    constructor(){
        this.body = Bodies.circle(random(50,1150),-10,7);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        strokeWeight(1);
        fill(random(0,255),random(0,255),random(0,255));
        ellipse(pos.x,pos.y,7);

    }
}

