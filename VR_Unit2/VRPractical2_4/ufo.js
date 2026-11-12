// Challenge 4 (Hint: Use Challenge 2 and 3 as your guide for this challenge)
// 1) Create a UFO class similar in logic to the Rocket class except that they fall from the sky.  Use at least two components to model the UFO. Add an invade( ) function to make the UFO drop to the ground at random speeds and stay on the ground. 
// 2) Create an array of UFOs at random high locations and make them invade.

class UFO{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;


        this.obj = document.createElement("a-entity");
            let full = document.createElement("a-entity");
            let head = document.createElement("a-sphere");
            head.setAttribute("color", "#ededed");
            head.setAttribute("scale", "1.2 1.2 1.2");
            head.setAttribute("position", "0 0.5 0");
            head.setAttribute("opacity", "0.5");
            full.append(head);

            let body = document.createElement("a-sphere");
            body.setAttribute("scale", "2 0.8 2");
            body.setAttribute("color", "#c7c7c7");
            body.setAttribute("position", "0 0 0");
            full.append(body);

            let trim = document.createElement("a-sphere");
            trim.setAttribute("scale", "2.2 0.2 2.2");
            trim.setAttribute("color", "#9e9e9e");
            trim.setAttribute("position", "0 0 0");
            full.append(trim);

            let btrim = document.createElement("a-cylinder");
            btrim.setAttribute("radius", "1.2");
            btrim.setAttribute("color", "#828183");
            btrim.setAttribute("position", "0 -0.5 0");
            btrim.setAttribute("height", "0.5");
            full.append(btrim);

            let beam = document.createElement("a-cylinder");
            beam.setAttribute("radius", "1");
            beam.setAttribute("color", "#c175ff");
            beam.setAttribute("position", "0 -50 0");
            beam.setAttribute("height", "100");
            beam.setAttribute("opacity", "0.5");
            full.append(beam);
            
            full.setAttribute("position", {x:x, y:y, z:z});
        this.obj.append(full);

        scene.append(this.obj);
    }

    invade(){
        let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
        this.dx = rnd(-0.2,1.167);
        this.dy = 0.1;
        this.dz = rnd(-0.2,1.167);

        if(this.x >= 65){
            this.x -= 1;
        }else{
            if(this.x <= -65){
                this.x += 1;
            }else{
                this.x += this.dx;
            }
        }

        if(this.y == -48){
            this.y == -48;
        }else{
            if(this.y > -48){
                this.y -= this.dy;
            }
        }

        if(this.z >= 65){
            this.z -= 1;
        }else{
            if(this.z <= -65){
                this.z += 1;
            }else{
                this.z += this.dz;
            }
        }
        
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});

    }
}