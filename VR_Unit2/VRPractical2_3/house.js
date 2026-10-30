class House{
    constructor(x, y, z){
    this.obj = document.createElement("a-entity");
    
    let base = document.createElement("a-box");
    base.setAttribute("position", "0 1.5 0");
    base.setAttribute("width", "5");
    base.setAttribute("height", "3");
    base.setAttribute("depth", "5");
    base.setAttribute("color", "#ff9e9e");
    this.obj.append(base);

    let roof = document.createElement("a-cone");
    roof.setAttribute("position", "0 4.5 0");
    roof.setAttribute("radius-bottom", "4");
    roof.setAttribute("height", "3");
    roof.setAttribute("color", "#ff3d3d");
    this.obj.append(roof);
    
    
    this.obj.setAttribute("position", {x:x, y:y, z:z});
    scene.append(this.obj);
    }
}