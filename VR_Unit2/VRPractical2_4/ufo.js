// Challenge 4 (Hint: Use Challenge 2 and 3 as your guide for this challenge)
// 1) Create a UFO class similar in logic to the Rocket class except that they fall from the sky.  Use at least two components to model the UFO. Add an invade( ) function to make the UFO drop to the ground at random speeds and stay on the ground. 
// 2) Create an array of UFOs at random high locations and make them invade.

class UFO{
    constructor(x, y, z){
        let build = document.createElement("a-entity");
            // let head = document.createElement("a-sphere");
            // head.setAttribute("scale", "2 0.8 2");
            // head.setAttribute("radius-bottom", "0.5");
            // head.setAttribute("height", "1");
            // head.setAttribute("color", "red");
            // head.setAttribute("position", "0 0 0");
            // rocket.append(head);
            let body = document.createElement("a-sphere");
            body.setAttribute("scale", "2 0.8 2");
            body.setAttribute("color", "gray");
            body.setAttribute("position", "0 0 0");
            build.append(body);
        build.setAttribute("position", {x:x, y:y, z:z});
        this.obj.append(build);

        scene.append(this.obj);
    }
}