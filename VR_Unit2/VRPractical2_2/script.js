let car, pokeball, rocket, dude, sun;
window.addEventListener("DOMContentLoaded",function() {

    car = document.querySelector("#car");
    pokeball = document.querySelector("#pokemonball");
    rocket = document.querySelector("#rocket");
    dude = document.querySelector("#dude");
    sun = document.querySelector("#sun");
    
    car.x = 0;
    car.dx = 0.01;

    pokeball.rotate = 0;
    pokeball.drotate = 15;
    pokeball.y = 1;
    pokeball.dy = 0.2;

    rocket.y = -1;
    rocket.dy = 0.1;

    dude.scale = 2;
    dude.dscale = 0.006;
    dude.y = 1.2;
    dude.dy = 0.003;

    sun.o = 0;
    sun.do = 0.01;

    loop();
})

function loop(){
    car.x += car.dx;
    car.setAttribute("position", {x:car.x, y:0, z:-8});

    pokeball.rotate += pokeball.drotate;
    pokeball.setAttribute("rotation", {x:pokeball.rotate, y:0, z:0});

    if(pokeball.y > 2){
        pokeball.y -= pokeball.dy;
        pokeball.setAttribute("position", {x:0, y:pokeball.y, z:-4});
    }else if(pokeball.y < 1){
        pokeball.y += pokeball.dy;
        pokeball.setAttribute("position", {x:0, y:pokeball.y, z:-4});
    }

    rocket.y += rocket.dy;
    rocket.setAttribute("position", {x:3, y:rocket.y, z:-4});

    dude.scale += dude.dscale;
    dude.setAttribute("scale", {x:dude.scale, y:dude.scale, z:dude.scale})
    dude.y += dude.dy;
    dude.setAttribute("position", {x:-2, y:dude.y, z:-10})

    sun.o += sun.do;
    sun.setAttribute("opacity", `${sun.o}`);

    window.requestAnimationFrame(loop);
}


/**
    Make the car move to the left.
    Make the pokeball rotate on the x axis
    Make the rocket fly up.
    Make the dude “grow”
    Make the sun fade in
 */

