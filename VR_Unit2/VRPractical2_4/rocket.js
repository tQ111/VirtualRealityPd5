// Challenge 2
// Create a Rocket class using the following guidelines.
// 1) Rocket class accepts coordinates x,y, and z when created.
// 2) Rocket must consist of at least two components.  Make appropriate adjustments to attributes. Contain the rocket in an entity.
// 3) Add animation variables so that each rocket created “flies” up at different speeds. Hint: Random numbers for your delta.
// 4) Create launch( ) function which makes the rocket “fly” up

// Challenge 3
// 1) Create 100 rockets in a grid or random pattern on the X-Z plane just below the plane.  Provide each rocket an appropriate random y coordinate below the plane.
// 2) Animate each rocket “launching”. 

class Rocket{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = 0.2;

        this.obj = document.createElement("a-entity");

        let rocket = document.createElement("a-entity");
            let head = document.createElement("a-cone");
            head.setAttribute("radius-top", "0");
            head.setAttribute("radius-bottom", "0.5");
            head.setAttribute("height", "1");
            head.setAttribute("color", "red");
            head.setAttribute("position", "0 0 0");
            rocket.append(head);
            let body = document.createElement("a-cylinder");
            body.setAttribute("radius", "0.5");
            body.setAttribute("height", "2");
            body.setAttribute("color", "gray");
            body.setAttribute("position", "0 -1.5 0");
            rocket.append(body);
            let fire = document.createElement("a-cone");
            fire.setAttribute("radius-top", "0");
            fire.setAttribute("radius-bottom", "0.25");
            fire.setAttribute("height", "2");
            fire.setAttribute("color", "orange");
            fire.setAttribute("position", "0 -3.5 0");
            fire.setAttribute("rotation", "-180 0 0");
            rocket.append(fire);
        rocket.setAttribute("position", {x:x, y:y, z:z});
        this.obj.append(rocket);


        scene.append(this.obj);
    }

    fly(){

        this.y += this.dy;
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    }
}
