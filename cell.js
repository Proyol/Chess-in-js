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
<<<<<<< HEAD
        this.baseColor = color;
=======
>>>>>>> aef4339ccc7cb87011db2085a359bfe003d9da78
        this.mouseIsOver = false;
    }

    mouseOver(){
        if(x > this.x &&
           x < this.x + cw &&
           y > this.y &&
           y < this.y + cw){
<<<<<<< HEAD
            return true;
=======
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 5;
            ctx.strokeRect(this.x, this.y, cw, cw);
>>>>>>> aef4339ccc7cb87011db2085a359bfe003d9da78
        }
    }

    display(){
        if(this.mouseOver()){
            ctx.strokeStyle = 'green';
            ctx.lineWidth = 3;
            ctx.strokeRect(this.x, this.y, cw, cw);
        }

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, cw, cw);
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> aef4339ccc7cb87011db2085a359bfe003d9da78
