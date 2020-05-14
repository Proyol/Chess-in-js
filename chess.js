const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = cvs.clientWidth;
const height = cvs.clientHeight;
const c = 8;
const p = 16;

let clicked = false;
let clickedBefone = false;
document.addEventListener('mousedown', function(event){
    clicked = true;
});

//create the board
let board = new Array(8);
function startBoard(){
    let color;
    let i, j;
    let aux = 1;

    for(i = 0; i < c; i++){
        board[i] = new Array(8);
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

//Insert the pieces on the board
function insertPieces(){
    //Black pieces
    board[0][0].Piece = bp[8];
    board[0][1].Piece = bp[10];
    board[0][2].Piece = bp[12];
    board[0][3].Piece = bp[14];
    board[0][4].Piece = bp[15];
    board[0][5].Piece = bp[13];
    board[0][6].Piece = bp[11];
    board[0][7].Piece = bp[9];

    board[1][0].Piece = bp[0];
    board[1][1].Piece = bp[1];
    board[1][2].Piece = bp[2];
    board[1][3].Piece = bp[3];
    board[1][4].Piece = bp[4];
    board[1][5].Piece = bp[5];
    board[1][6].Piece = bp[6];
    board[1][7].Piece = bp[7];

    //White pieces
    board[7][0].Piece = wp[8];
    board[7][1].Piece = wp[10];
    board[7][2].Piece = wp[12];
    board[7][3].Piece = wp[14];
    board[7][4].Piece = wp[15];
    board[7][5].Piece = wp[13];
    board[7][6].Piece = wp[11];
    board[7][7].Piece = wp[9];

    // board[6][0].Piece = wp[0];
    // board[6][1].Piece = wp[1];
    // board[6][2].Piece = wp[2];
    // board[6][3].Piece = wp[3];
    // board[6][4].Piece = wp[4];
    // board[6][5].Piece = wp[5];
    // board[6][6].Piece = wp[6];
    // board[6][7].Piece = wp[7];
}

startBoard();
startPieces();
insertPieces();

//update every frame of the came
let selectedCell = [];
let bColor = 'white';
function update(){
    let i, j;
    //display the board
    for(i = 0; i < c; i++){
        for(j = 0; j < c; j++){
            board[i][j].display();

            //select a cell white a piece on it
            if(board[i][j].mouseOver() && board[i][j].Piece != null && clicked){
                if(selectedCell.length == 0){ //first cell of the game to be selected
                    selectedCell.push(board[i][j]);
                    bColor = board[i][j].color;
                } else {
                    selectedCell.push(board[i][j]);
                    selectedCell[0].color = bColor;
                    bColor = board[i][j].color;
                    selectedCell.shift();
                }
                clicked = false;
            }

            if(selectedCell.length > 0){
                selectedCell[0].color = 'green';

                selectedCell[0].Piece.showMoves(board, selectedCell[0]);
            }
        }
    }

    //display the pieces
    for(i = 0; i < p; i++){
        wp[i].display();
        bp[i].display();
    }
}

let game = setInterval(update, 100);