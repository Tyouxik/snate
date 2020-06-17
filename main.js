let game = new Game();
let snake = new Snake();
let fruit = new Fruit();
let score = 0
let start = 0
function addStart(){

  start++}
function preload() {
  snake.preload();
  fruit.preload();
  imgStart = loadImage("graphics/LANDING.svg")

}
function setup() {
  createCanvas(WIDTH, HEIGHT);

  frameRate(10) 

}

function draw() {
  console.log(start)
  if (start === 0){
    console.log("starting 0 stsrts")

  }
  else if(start ===1){
    console.log("vive")
  game.drawGrid();
  background('#B2BD08');
  fruit.draw();
  snake.draw();
  
  if (snake.eat(fruit)) {
    fruit.pickLocation()
    score ++
  }
}
 
else if (start > 1){
  console.log("muesrto")
  clear()
  background('#B2BD08');
  game.drawGrid();
}


}
function keyPressed() {
  snake.keys();
  if(keyCode === 32 && start == 0){
    start++
    document.getElementById("startImg").style.display= "none"
  }
  if(keyCode === 32 && start > 1){
    window.location.reload()
    
   
  }
}

/* function windowResized() {
  canv.position(windowWidth - width >> 1, windowHeight - height >> 1);

  const btnX = (width  - btn.width  >> 1) + canv.x,
        btnY = (height - btn.height >> 1) + canv.y;

  btn.position(btnX, btnY);
} */
// snake.bite()
//   console.log("biting");

