class Snake {
  constructor() {
    this.row = 0;
    this.col = 0;
  }
  preload() {
    this.img = loadImage("graphics/snake-piece.svg");
  }
  moveUp() {
    this.row -= SQUARE_SIDE;
  }

  moveDown() {
    this.row += SQUARE_SIDE;
  }

  moveLeft() {
    this.col -= SQUARE_SIDE;
  }

  moveRight() {
    this.col += SQUARE_SIDE;
  }

  keys() {
    if (keyCode === 37) {
      console.log("left");
      this.moveLeft();
    } else if (keyCode === 39) {
      this.moveRight();
    } else if (keyCode === 38) {
      this.moveUp();
    } else if (keyCode === 40) {
      this.moveDown();
    }
  }
  draw() {
    image(this.img, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }
}
