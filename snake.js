class Snake {
  constructor() {
    this.row = HEIGHT / 2;
    this.col = WIDTH / 2;
    this.speed = 1
    this.direction="N"
    // this.total = 0 
    // this.tail =
  }
  preload() {
    this.img = loadImage("graphics/snakepiece.svg");
  }

  moveUp() {
    if(this.direction!=="S")  
     {
      this.direction="N"
     }
  }

  moveDown() {
    if(this.direction!=="N")
    {
    this.direction="S"
    }
  }

  moveLeft() {
    if(this.direction!=="E")
    {
    this.direction="W"
    }
  }

  moveRight() {
    if(this.direction!=="W")
    {
    this.direction="E"
    }
  }
  eat (position) {
    let d = dist(this.row, this.col, position.row, position.col)
    console.log(d,"d");
    if (d < 1) {
      return true
    }
  }
  keys() {
    if (keyCode === 37) {
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


    if(this.direction=="N"){
      this.row-=SQUARE_SIDE
    }
    if(this.direction=="S"){
      this.row+=SQUARE_SIDE

    }
    if(this.direction=="W"){
      this.col-=SQUARE_SIDE

    }
    if(this.direction=="E"){
      this.col+=SQUARE_SIDE

    }

    this.row = constrain(this.row, 0, height-25)
    this.col = constrain(this.col, 0, width-25)
    image(this.img, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
    
  }
}


