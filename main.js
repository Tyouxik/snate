console.log("it works bananas!");
let game = new Game();
let snake = new Snake();
function preload() {
  console.log("preload");
  snake.preload();
}
function setup() {
  console.log("setup");
  createCanvas(WIDTH, HEIGHT).position(200, 150);
}
function draw() {
  console.log("draw");
  game.drawGrid();
  snake.draw();
}
function keyPressed() {
  snake.keys();
}
