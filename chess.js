const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = cvs.clientWidth;
const height = cvs.clientHeight;
const c = 8;
const p = 16;

//create the board
let board = [];
function startBoard(){
    let color;
    let i, j;
    let aux = 1;

    for(i = 0; i < c; i++){
        board[i] = [];
        for(j = 0; j < c; j++){
            if(aux == 1){
                color = 'white'
            } else {
                color = 'gray'
            }
            board[i][j] = new Cell(j * cw, i * cw, null, color);
            aux *= -1;
        }
        aux *= -1;
    }
}

//create the pieces
let wp = []; //white pieces
let bp = []; //black pieces
function startPieces(){
    //white Pawns
    wp[0] = new Pawn(5, 395, 'white');
    wp[1] = new Pawn(70, 395, 'white');
    wp[2] = new Pawn(135, 395, 'white');
    wp[3] = new Pawn(200, 395, 'white');
    wp[4] = new Pawn(265, 395, 'white');
    wp[5] = new Pawn(330, 395, 'white');
    wp[6] = new Pawn(395, 395, 'white');
    wp[7] = new Pawn(460, 395, 'white');

    //white Rooks
    wp[8] = new Rook(5, 460, 'white');
    wp[9] = new Rook(460, 460, 'white');

    //white Knights
    wp[10] = new Knight(70, 460, 'white');
    wp[11] = new Knight(395, 460, 'white');

    //white Bishops
    wp[12] = new Bishop(135, 460, 'white');
    wp[13] = new Bishop(330, 460, 'white');

    //white Queen
    wp[14] = new Queen(200, 460, 'white');
    
    //white King
    wp[15] = new King(265, 460, 'white');

    //black Pawns
    bp[0] = new Pawn(5, 70, 'black');
    bp[1] = new Pawn(70, 70, 'black');
    bp[2] = new Pawn(135, 70, 'black');
    bp[3] = new Pawn(200, 70, 'black');
    bp[4] = new Pawn(265, 70, 'black');
    bp[5] = new Pawn(330, 70, 'black');
    bp[6] = new Pawn(395, 70, 'black');
    bp[7] = new Pawn(460, 70, 'black');

    //black Rooks
    bp[8] = new Rook(5, 5, 'black');
    bp[9] = new Rook(460, 5, 'black');

    //black Knights
    bp[10] = new Knight(70, 5, 'black');
    bp[11] = new Knight(395, 5, 'black');

    //black Bishops
    bp[12] = new Bishop(135, 5, 'black');
    bp[13] = new Bishop(330, 5, 'black');

    //black Queen
    bp[14] = new Queen(200, 5, 'black');
    
    //black King
    bp[15] = new King(265, 5, 'black');
}

startBoard();
startPieces();

//update every frame of the came
function update(){
    let i, j;
    //display the board
    for(i = 0; i < c; i++){
        for(j = 0; j < c; j++){
            board[i][j].display();
            board[i][j].mouseOver();
        }
    }
    
    //display the pieces
    for(i = 0; i < p; i++){
        wp[i].display();
        bp[i].display();
    }
}

let game = setInterval(update, 100);
