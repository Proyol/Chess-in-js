const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

const width = cvs.clientWidth;
const height = cvs.clientHeight;
const c = 8;

$.getScript("cell.js", function(){});

//create and display the board
let board = [];
let color;
let i, j;
for(i = 0; i < c; i++){
    board[i] = [];
    for(j = 0; j < c; j++){
        if(i % 2 ){
            color = 'white';
        } else {
            color = 'black';
        }
        board[i][j] = new Cell(j * cw, i * cw, null, color);
        board[i][j].display();
    }
}