class Rope{
    constructor(bodyA,bodyB){
        var options={
            stiffness:0.2,
            length:40,
            bodyA:bodyA,
            bodyB:bodyB
        }
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        push()
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4)
        stroke("black")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()
    }
}