let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket, ufo;
let rockets = [];
let UFOs = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 


  for(let r = -5; r < 5; r++){
    for(let c = -18; c < -8; c++){
      let rocket = new Rocket(r*5, 0, c*5);
      rockets.push(rocket);
    }
  }

    for(let i = 0; i < 25; i++){
      let x = rnd(-48,48);
      let z = rnd(-48,48);
      let ufo = new UFO(x, 30, z);
      UFOs.push(ufo);
    }

  loop();
})

function loop(){

  for(let rocket of rockets){
    rocket.fly();
  }

  for(let ufo of UFOs){
    ufo.invade();
  }

  window.requestAnimationFrame( loop );
}
