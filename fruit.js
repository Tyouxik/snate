class Fruit {
    constructor(){
        this.col = Math.floor(Math.random()*22)*25
        this.row = Math.floor(Math.random()*16)*25
    }
    preload () {
        this.img = loadImage('graphics/food.svg')
    }

    pickLocation () {
        
        this.col = Math.floor(Math.random()*22)*25
        this.row = Math.floor(Math.random()*16)*25
        console.log(this.row, this.col);
}
    draw () {
        image(this.img, this.col, this.row, SQUARE_SIDE,SQUARE_SIDE)
    }

  

}
