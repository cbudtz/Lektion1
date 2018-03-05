/**
 * Created by Christian on 07-02-2018.
 */
let context = document.getElementById("mycanvas").getContext('2d');

let columns = []; //TODO find på en måde at holde styr på brikkerne - Data model

drawBoard();


//Optegning af Boardet
function drawBoard() {
    for(let i = 0; i<7;i++){
        for (let j=0;j<6;j++){
            drawCircle(25+i*53,25+j*53, 20);
        }
    }

}

//EventHandler for knapperne - colNo svarer til søjlens nummer - se i index.html
function putPieceInColumnNo(colNo){
    //TODO - sæt en ny brik i kolonnenummer colNo


}


//------Tegne funktioner------

function drawPieceAt(col, row, color) {
    drawCircle(25+col*53,25+row*53,20, color)
}

function drawCircle(x, y, r, fill) {
    //Fill the circle if fill is set
    if (fill){
        debugger;
        context.beginPath();
        context.arc(x,y,r,0,Math.PI*2);
        context.fillStyle = fill;
        context.fill();
    } else {
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2);
        context.stroke();
    }
}


//------------------

//TODO Implementeres senere...
function showScore(player1Score, player2Score){

}
//TODO Implementeres senere...
function showWinner(playerName){

}