class Tree{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
  
    let pines = document.createElement("a-cone");
    pines.setAttribute("color","green");
    pines.setAttribute("position","0 1.5 0");
    pines.setAttribute("height","2");
    this.obj.append( pines );
  
    let stump = document.createElement("a-cylinder");
    stump.setAttribute("position","0 0 0");
    stump.setAttribute("color","brown");
    stump.setAttribute("radius","0.25");
    this.obj.append( stump );
  
    let s = rnd(0.5, 2.5);
    let sy = s+1;
    this.obj.setAttribute("scale", {x:s, y:sy, z:s})
    this.obj.setAttribute("position",{x:x, y:s/2, z:z});

    scene.append( this.obj )
  }
}