let game = new Game();
let snake = new Snake();
let fruit = new Fruit();
let score = 0

function preload() {
  snake.preload();
  fruit.preload();

}
function setup() {
  createCanvas(WIDTH, HEIGHT).position(200, 150);
  frameRate(10) 

}
function draw() {
  game.drawGrid();
  background('#B2BD08');
  fruit.draw();
  snake.draw();


  if (snake.eat(fruit)) {
    fruit.pickLocation()
    score ++
  }

  // if (snake.endGame()) {
  //   print('END GAME');
  //   background(255, 0, 0);
  //   noLoop();
  // }
  
}
function keyPressed() {
  snake.keys();
}
// snake.bite()
//   console.log("biting");


