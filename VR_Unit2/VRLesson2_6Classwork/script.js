let scene;
let meches = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  mech = document.getElementById("mech-1");

  for(let x = -30; x <= 30; x += 10){
    for(let z = -30; z <= 30; z += 10){
      let clone = new Mech(x, 13, z);
      meches.push(clone);
    }
  }

  loop();
})

function loop(){


  window.requestAnimationFrame( loop );
}
