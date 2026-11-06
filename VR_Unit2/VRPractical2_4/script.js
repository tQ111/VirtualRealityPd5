let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket, ufo;
let rockets = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  let ufo = new UFO(0, 0, 0);

  for(let r = -5; r < 5; r++){
    for(let c = -18; c < -8; c++){
      let rocket = new Rocket(r*5, 0, c*5);
      rockets.push(rocket);
    }
  }


  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.fly();
  }

  window.requestAnimationFrame( loop );
}
