const cw = 65;

class Cell{
    constructor(x, y, Piece, color){
        this.x = x;
        this.y = y;
        this.Piece = Piece;
        this.color = color;
    }

    display(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.x + cw, this.y + cw);
    }
}

Cell.prototype.constructor = Cell;