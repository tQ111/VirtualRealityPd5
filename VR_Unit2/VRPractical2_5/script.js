/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/



let maze = [
  "----wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
  "-------w-----------------------------c---w",
  "--------------------w---------w---------w",
  "----wwwwwwwwwwwwwwwww---wwwwwwwwwwww---ww",
  "w-------------------w---w--w--w---------w",
  "wwwwwwwww--www--wwww------w--w---w------w",
  "w------------w------w---------w---w-----w",
  "ww---wwwwwwwww----------wwwwwwwwwww--w--w",
  "w------------w---w--------w----------w--w",
  "w----wwwwwwwww---w-------------------w--w",
  "w----w--wwwwww---wwwww-----wwwwwwwww-w--w",
  "w----w-------w---w----------------c-----w",
  "w----wwww----w---wwwwwwwwwwwww-----wwwwww",
  "w------------w---w--------c--w-----w----w",
  "wwwwwwwwww-------w--wwwwwwwwww-----w----w",
  "w----------------w----c-----------------w",
  "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",

];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;
let coins = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "w"){
        new Wall(c,1,r)
      }
      else if(cols[c] == "c"){
        let coin = new Coin(c,1,r);
        coins.push(coin);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }
  loop();
})
function loop(){
  for(let coin of coins){
    coin.float();
  }
  window.requestAnimationFrame( loop );
}