let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rocket, ufo, cloud;
let rockets = [];
let UFOs = [];
let clouda = [];
let cloudb = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 


  for(let r = -5; r < 5; r++){
    for(let c = -18; c < -8; c++){
      let rocket = new Rocket(r*5, 0, c*5);
      rockets.push(rocket);
    }
  }

    for(let i = 0; i < 25; i++){
      let x = rnd(-25,25);
      let z = rnd(-25,25);
      let ufo = new UFO(x, 50, z);
      UFOs.push(ufo);
    }

    for(let i = 0; i < 100; i++){
    let x = rnd(-45,45);
    let z = rnd(-45,45);
    createTree(x,-0.5,z);
  }

  for(let i = 0; i < 1000; i++){
    let x = rnd(-200,200);
    let z = rnd(-200,200);
    let cloud = new Cloud(x,40,z);
    clouda.push(cloud);
  }

  for(let i = 0; i < 500; i++){
    let x = rnd(-200,200);
    let z = rnd(-200,200);
    let cloud = new Cloud(x,55,z);
    cloudb.push(cloud);
  }

  for(let i = 0; i < 20; i++){
    let x = rnd(-45,45);
    let z = rnd(-45,45);
    createHouse(x,0,z);
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

  for(let cloud of clouda){
    cloud.move();
  }

  for(let cloud of cloudb){
    cloud.moveslow();
  }

  window.requestAnimationFrame( loop );
}

function createHouse(x, y, z){
  let house = document.createElement("a-entity");
  
  let base = document.createElement("a-box");
  base.setAttribute("position", "0 1.5 0");
  base.setAttribute("width", "5");
  base.setAttribute("height", "3");
  base.setAttribute("depth", "5");
  base.setAttribute("color", "#ff9e9e");
  house.append(base);

  let roof = document.createElement("a-cone");
  roof.setAttribute("position", "0 4.5 0");
  roof.setAttribute("radius-bottom", "4");
  roof.setAttribute("height", "3");
  roof.setAttribute("color", "#ff3d3d");
  house.append(roof);
  
  
  house.setAttribute("position", {x:x, y:y, z:z});
  scene.append(house);
}

function createTree(x, y, z){
  let tree = document.createElement("a-entity");
  
  let pines = document.createElement("a-cone");
  pines.setAttribute("color","green");
  pines.setAttribute("position","0 2 0");
  pines.setAttribute("height","2");
  tree.append( pines );

  let stump = document.createElement("a-cylinder");
  stump.setAttribute("position","0 1 0");
  stump.setAttribute("color","brown");
  stump.setAttribute("radius","0.25");
  tree.append( stump );

  tree.setAttribute("position",{x:x, y:y, z:z});
  scene.append( tree )
}