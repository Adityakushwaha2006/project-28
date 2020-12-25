class Chain{

    constructor (bodyA,bodyB){
    
        var options={
            isStatic:false,
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:5
            }
            this.bodyA=bodyA;
            this.Chain=Constraint.create(options);
            
            World.add(world,this.Chain);
            
           
    
    }

 fly(){
                this.Chain.bodyA = null;
            }




    display(){
    
    var pointA=this.Chain.bodyA.position;
    var pointB=this.Chain.bodyB.position;
    
    stroke(1000,0,0);
    strokeWeight(2);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }

    