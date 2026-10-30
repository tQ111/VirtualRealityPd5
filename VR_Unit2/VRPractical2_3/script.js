let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 150; i++){
    let x = rnd(-48,48);
    let z = rnd(-48,48);
    let tree = new Tree(x, 0, z);
  }

    for(let i = 0; i < 1000; i++){
      let x = rnd(-200,200);
      let z = rnd(-200,200);
      let cloud = new Cloud(x,40,z);
    }

  for(let i = 0; i < 20; i++){
    let x = rnd(-45,45);
    let z = rnd(-45,45);
    let house = new House(x,0,z);
  }

})
