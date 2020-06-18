let game = new Game();
let snake = new Snake();
let fruit = new Fruit();
let score = 0
let start = 0
let gameoverimg
function addStart(){

  start++}
function preload() {
  snake.preload();
  fruit.preload();
  imgStart = loadImage("graphics/LANDING.svg")

}
function setup() {
  createCanvas(WIDTH, HEIGHT);

  frameRate(7) 

  gameoverimg = loadImage("graphics/overscreen.svg")

}

function draw() {
  console.log(start)
  if (start === 0){
    console.log("starting 0 stsrts")
    document.getElementById("defaultCanvas0").style.display= "none"
    // document.getElementById("overscreen").style.display="none"
    document.getElementById("startscreen").style.display=""

  }
  else if(start ===1){
    if (score > 3){
      frameRate(20) 
    }
    document.getElementById("defaultCanvas0").style.display=""
    document.getElementById("startscreen").style.display="none"
    // document.body.style.backgroundImage = "url('../graphics/zoomNOKEY.svg')" ;
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
  image(gameoverimg, WIDTH/4, HEIGHT/4)
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

