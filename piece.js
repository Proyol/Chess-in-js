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
}
