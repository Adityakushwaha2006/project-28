class bl{
    constructor (x,y,r){
        var bl_options={
            isStatic:true ,
            restitution:0.3,
friction:0,
density:0.8
        }
    this.body=Bodies.circle(x,y,r,bl_options);
    this.r=r;
    

    World.add(world,this.body);
    }
display(){

    var pos=this.body.position;

    push ();
    translate(pos.x,pos.y);
  
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    strokeWeight(4);
    stroke("green")
    fill(0,0,500);
    pop();
}
}