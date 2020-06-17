class Game {
  constructor() {
    this.died = false;
  }
  drawGrid() {
    createCanvas(WIDTH, HEIGHT);

    if(this.died) {
      console.log("GameOver");
    }
    for (let i = 0; i <= HEIGHT; i += SQUARE_SIDE) {
      line(0, i, WIDTH, i);
    }
    for (let i = 0; i <= WIDTH; i += SQUARE_SIDE) {
      line(i, 0, i, HEIGHT);
    }
  }
}
