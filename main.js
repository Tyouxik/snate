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

  frameRate(8) 

  gameoverimg = loadImage("graphics/overscreen.svg")

}

function draw() {
  document.querySelector("#banana").innerText="Score: "+score
  console.log(start)
  if (start === 0){
    console.log("starting 0 stsrts")
    document.getElementById("defaultCanvas0").style.display= "none"
    document.getElementById("startscreen").style.display=""
    document.getElementById("banana").style.display="none"

  }
  else if(start ===1){
    if (score > 3){
      frameRate(10) 
    } if (score > 6) {
      frameRate(13)
    } if (score > 8) {
      frameRate(18)
    } if (score > 12) { 
      frameRate(24)
    } if (score > 16) {
      frameRate(28)
    } if (score > 20) {
      frameRate(30)
    }
  
    document.getElementById("defaultCanvas0").style.display=""
    document.getElementById("startscreen").style.display="none"
    document.getElementById("banana").style.display=""
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
  clear()
  background('#B2BD08');
  image(gameoverimg, 115, 150)
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

