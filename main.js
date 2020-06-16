let game = new Game();
let snake = new Snake();
let fruit = new Fruit();
let score = 0

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
    score ++
  }
  console.log(score)
  
  // if (snake.total === snake.tail.length) {
  //   for (let i = 0; i < snake.tail.length -1; i++){
  //     snake.tail[i] = snake.tail[i+1]
  //   } else {
  //     snake.tail[snake.total-1] = loadImage(snake.img) 
  //   }
  //   }
}
function keyPressed() {
  snake.keys();
}


