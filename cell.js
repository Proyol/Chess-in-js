const cw = 65;
let x, y;

document.addEventListener('mousemove', function(event){
    x = event.clientX;
    y = event.clientY;
});

class Cell{
    constructor(x, y, Piece, color){
        this.x = x;
        this.y = y;
        this.Piece = Piece;
        this.color = color;
        this.mouseIsOver = false;
    }

    mouseOver(){
        if(x > this.x &&
           x < this.x + cw &&
           y > this.y &&
           y < this.y + cw){
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 5;
            ctx.strokeRect(this.x, this.y, cw, cw);
        }
    }

    display(){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, cw, cw);
    }
}
