class Pawn{
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;

        //parameters to select a sprite in the image
        this.imgx = 1000;
        this.imgy = 0;
        this.imgw = 200;
        this.scl = 50;

        //image source
        this.asset = new Image;
        this.asset.src = 'chess pieces.png';
    }

    display(){
        if(this.color == 'black'){
            this.imgy = 200;
        }
        ctx.drawImage(this.asset, this.imgx, this.imgy, this.imgw, this.imgw, this.x,  this.y, this.scl, this.scl);
    }

    showMoves(board, cell){
        //Piece position accordding to the board
        let pi = cell.y / 65;
        let pj = cell.x / 65;

        if(this.color == 'black'){
            if(board[pi+1][pj].Piece == null){
                ctx.beginPath();
                ctx.arc(cell.x+32.5, cell.y + 97.5, 20, 0, 2 * Math.PI, false);
                ctx.lineWidth = 3;
                ctx.strokeStyle = 'green';
                ctx.stroke();
            }
        }

        if(this.color == 'white'){
            if(board[pi-1][pj].Piece == null){
                ctx.beginPath();
                ctx.arc(cell.x+32.5, cell.y - 32.5, 20, 0, 2 * Math.PI, false);
                ctx.lineWidth = 3;
                ctx.strokeStyle = 'green';
                ctx.stroke();
            }
        }
        //console.log(pj, pi);
    }
}

class Rook{
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;

        this.imgx = 800;
        this.imgy = 0;
        this.imgw = 200;
        this.scl = 50;

        this.asset = new Image;
        this.asset.src = 'chess pieces.png';
    }

    display(){
        if(this.color == 'black'){
            this.imgy = 200;
        }
        ctx.drawImage(this.asset, this.imgx, this.imgy, this.imgw, this.imgw, this.x,  this.y, this.scl, this.scl);
    }

    showMoves(board, cell){
        let pi = cell.y / 65;
        let pj = cell.x / 65;
    }
}

class Knight{
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;

        this.imgx = 600;
        this.imgy = 0;
        this.imgw = 200;
        this.scl = 50;

        this.asset = new Image;
        this.asset.src = 'chess pieces.png';
    }

    display(){
        if(this.color == 'black'){
            this.imgy = 200;
        }
        ctx.drawImage(this.asset, this.imgx, this.imgy, this.imgw, this.imgw, this.x,  this.y, this.scl, this.scl);
    }

    showMoves(board, cell){
        let pi = cell.y / 65;
        let pj = cell.x / 65;
    }
}

class Bishop{
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;

        this.imgx = 400;
        this.imgy = 0;
        this.imgw = 200;
        this.scl = 50;

        this.asset = new Image;
        this.asset.src = 'chess pieces.png';
    }

    display(){
        if(this.color == 'black'){
            this.imgy = 200;
        }
        ctx.drawImage(this.asset, this.imgx, this.imgy, this.imgw, this.imgw, this.x,  this.y, this.scl, this.scl);
    }

    showMoves(board, cell){
        let pi = cell.y / 65;
        let pj = cell.x / 65;
    }
}

class Queen{
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;

        this.imgx = 200;
        this.imgy = 0;
        this.imgw = 200;
        this.scl = 50;

        this.asset = new Image;
        this.asset.src = 'chess pieces.png';
    }

    display(){
        if(this.color == 'black'){
            this.imgy = 200;
        }
        ctx.drawImage(this.asset, this.imgx, this.imgy, this.imgw, this.imgw, this.x,  this.y, this.scl, this.scl);
    }

    showMoves(board, cell){
        let pi = cell.y / 65;
        let pj = cell.x / 65;
    }
}

class King{
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;

        this.imgx = 0;
        this.imgy = 0;
        this.imgw = 200;
        this.scl = 50;

        this.asset = new Image;
        this.asset.src = 'chess pieces.png';
    }

    display(){
        if(this.color == 'black'){
            this.imgy = 200;
        }
        ctx.drawImage(this.asset, this.imgx, this.imgy, this.imgw, this.imgw, this.x,  this.y, this.scl, this.scl);
    }

    showMoves(board, cell){
        let pi = cell.y / 65;
        let pj = cell.x / 65;
    }
}