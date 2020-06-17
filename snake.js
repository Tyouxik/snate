class Snake {
  constructor() {
    this.row = HEIGHT / 2;
    this.col = WIDTH / 2;
    this.speed = 1
    this.direction="N"
    this.tail = []
    this.total=0;
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
  // endGame () {
  //   let x = this.tail[this.tail.length - 1].col;
  //   let y = this.tail[this.tail.length - 1].row;
  //   if (x > WIDTH - 1 || x < 0 || y > HEIGHT - 1 || y < 0) {
  //     return true;
  //   }
  //   // for (let i = 0; i < this.tail.length - 1; i++) {
  //   //   let part = this.tail[i];
  //   //   if (part.x == x && part.y == y) {
  //   //     return true;
  //   //   }
  //   // }
  //   return false;
  // }
  eat (position) {
    let d = dist(this.row, this.col, position.row, position.col)
    if (d < 1) {
      console.log(this.tail,"d");
      this.tail.push(this)
    
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
  update(cuadrao){
    if(cuadrao.direction=="N"){
      cuadrao.row-=SQUARE_SIDE
    }
    if(cuadrao.direction=="S"){
      cuadrao.row+=SQUARE_SIDE

    }
    if(cuadrao.direction=="W"){
      cuadrao.col-=SQUARE_SIDE

    }
    if(cuadrao.direction=="E"){
      cuadrao.col+=SQUARE_SIDE

    }
  }
  
  draw() {
    // console.log(this.tail,{row:this.row,col:this.col})

   
     for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    } 
    /* if (this.total >= 1) {
      this.tail[this.total - 1] = {row:this.row,col:this.col,img:this.img
      };
    } */
    if(this.tail.length){
      this.tail[this.tail.length - 1] = {...this}
    }
    
    this.update(this)
    this.row = constrain(this.row, 0, height-25)
    this.col = constrain(this.col, 0, width-25)
    image(this.img, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
    this.tail.forEach((elem,index)=>{
      image(elem.img, elem.col, elem.row, SQUARE_SIDE, SQUARE_SIDE);
      this.tail.find((item,ind) => {
        if(item.col === elem.col && item.row == elem.row && index !== ind) {
          console.log("now you can die");
          game.died=true;
          
          return;
        }
      })
    })
    
  }
}


