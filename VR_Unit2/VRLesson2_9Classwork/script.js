let maze = [
  "----T-----x-----T-o----o--T----x--",
  "----T---x----------o--------x",
  "--T-------x---T-----T----xx-",
  "-o-o--------x------------x",
  "--o----T--x-------x-x-x-----",
  "-o----------x---x------T--",
  "-------T----x----T-------",
  "--T--------x------------",
  "----------x---------T--o-",
  "-o------T----x-------o----",
  "-o----T------x-------o--o--",
  "----------x---------T---",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})