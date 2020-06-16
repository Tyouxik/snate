let game = new Game();
let snake = new Snake();
let fruit = new Fruit();

function preload() {
  snake.preload();
  fruit.preload();
  // fruit.pickLocation()
}
function setup() {
  createCanvas(WIDTH, HEIGHT).position(200, 150);
  frameRate(10) 
  // fruit.pickLocation();
}
function draw() {
  
  
  game.drawGrid();
  background('#B2BD08');
  fruit.draw();
  snake.draw();

  if (snake.eat(fruit)) {
    fruit.pickLocation()
  }

  
}
function keyPressed() {
  snake.keys();
}


