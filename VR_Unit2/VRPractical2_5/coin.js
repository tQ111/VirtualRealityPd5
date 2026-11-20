
class Coin{
  constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;

    this.dy = 0.011;
    this.a = 0;
    this.da = 1;
    
    this.obj = document.createElement("a-entity");

    let ring = document.createElement("a-torus");
    ring.setAttribute("color", "#f5d742");
    ring.setAttribute("radius", "0.2");
    ring.setAttribute("radius-tubular", "0.015");
    this.obj.append(ring);

    let body = document.createElement("a-cylinder");
    body.setAttribute("src", "cointexture.png");
    body.setAttribute("radius", "0.2");
    body.setAttribute("height", "0.04");
    body.setAttribute("rotation", "0 90 90");
    this.obj.append(body);

    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    scene.append(this.obj);

  }
  float(){
    this.y += this.dy;
    this.a += this.da;
   
    if(this.y > 1.2){
      this.dy = -this.dy;
    }
    if(this.y < 0.2){
      this.dy = -this.dy;
    }
    
    this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
    this.obj.setAttribute("rotation",{x:0,y:this.a,z:0});
  }
}
