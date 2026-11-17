let target;

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#target");
  rotate = document.querySelector("#rotate");

  rotate.a = 0;
  rotate.da = 1;
  target.a = 0;
  time = 0;

  loop();
})

function loop(){
  target.da = 1;
  time += 0.1;

  if(time >= 14){
    if(target.a > 101){
      target.da = -target.da;
    }
    if(target.a < 79){
      target.da = -target.da;
    }
  }

  target.a += target.da;
  target.setAttribute("rotation",{x:target.a, y:0, z: 0});

  console.log(target.a);

  rotate.a += rotate.da;
  if(rotate.a > 180){
    rotate.a = 180;
  }
  rotate.setAttribute("rotation", {x:rotate.a, y:0, z: 0})

  window.requestAnimationFrame( loop );
}