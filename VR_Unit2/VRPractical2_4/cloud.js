class Cloud{

    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dx = 0.05;
        this.dbx = 0.02

        this.obj = document.createElement("a-entity");
        
        let sphere1 = document.createElement("a-sphere");
        sphere1.setAttribute("position", "0 0 0");
        sphere1.setAttribute("color", "white");
        this.obj.append(sphere1);
        let sphere2 = document.createElement("a-sphere");
        sphere2.setAttribute("position", "1 0 -0.5");
        sphere2.setAttribute("color", "white");
        this.obj.append(sphere2);
        let sphere3 = document.createElement("a-sphere");
        sphere3.setAttribute("position", "-1 0 0");
        sphere3.setAttribute("color", "white");
        this.obj.append(sphere3);
        let sphere4 = document.createElement("a-sphere");
        sphere4.setAttribute("position", "-0.5 0 -1");
        sphere4.setAttribute("color", "white");
        this.obj.append(sphere4);
        
        this.obj.setAttribute("position", {x:x, y:y, z:z});
        scene.append(this.obj);
    }

    move(){
        this.x += this.dx;
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        if(this.x >= 200){
            this.x -= 400;
        }
    }

    moveslow(){
        this.x += this.dbx;
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        if(this.x >= 200){
            this.x -= 400;
        }
    }
}