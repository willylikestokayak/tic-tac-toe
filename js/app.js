console.log('Hello frontend');

var resetGame = document.getElementById("button");
var game = document.getElementsByClassName("box");
var gameBoard = false;
var div1 = document.getElementById('1');
var div2 = document.getElementById('2');
var div3 = document.getElementById('3');
var div4 = document.getElementById('4');
var div5 = document.getElementById('5');
var div6 = document.getElementById('6');
var div7 = document.getElementById('7');
var div8 = document.getElementById('8');
var div9 = document.getElementById('9');
var playerOne = 'X';
var playerTwo = 'O';
var turnCounter = 0;
keepPlaying = true;
var winnerX = "Player 1 wins!"
var winner0 = "Player 2 wins!"


var turn = function (){
	if(turnCounter % 2 === 0) {
		return ('.X');
	} else {
		return ('.O');
	}
};

var checkForWinner = function(){
	// console.log(div1.style.backgroundImage);
	if(div1.style.backgroundImage === div2.style.backgroundImage && div1.style.backgroundImage === div3.style.backgroundImage && div2.style.backgroundImage === div3.style.backgroundImage){
		declareWinner(turn());
	}else if(div4.style.backgroundImage === div5.style.backgroundImage && div4.style.backgroundImage === div6.style.backgroundImage && div5.style.backgroundImage === div6.style.backgroundImage){
		declareWinner(turn());
	} else if(div7.style.backgroundImage === div8.style.backgroundImage && div7.style.backgroundImage === div9.style.backgroundImage && div8.style.backgroundImage === div9.style.backgroundImage){
		declareWinner(turn());
	} else if(div1.style.backgroundImage === div4.style.backgroundImage && div1.style.backgroundImage=== div7.style.backgroundImage && div4.style.backgroundImage === div7.style.backgroundImage){
		declareWinner(turn());
	} else if(div2.style.backgroundImage === div5.style.backgroundImage && div2.style.backgroundImage === div8.style.backgroundImage && div5.style.backgroundImage === div8.style.backgroundImage){
		declareWinner(turn());
	} else if(div3.style.backgroundImage === div6.style.backgroundImage && div3.style.backgroundImage === div9.style.backgroundImage && div6.style.backgroundImage === div9.style.backgroundImage){
		declareWinner(turn());
	} else if(div1.style.backgroundImage === div5.style.backgroundImage && div1.style.backgroundImage === div9.style.backgroundImage && div5.style.backgroundImage === div9.style.backgroundImage){
		declareWinner(turn());
	} else if(div3.style.backgroundImage === div5.style.backgroundImage && div3.style.backgroundImage === div7.style.backgroundImage && div5.style.backgroundImage === div7.style.backgroundImage){
		declareWinner(turn());
	}
}

// 	for(var i = 0; i < 9; i++){
// 		// if(turnCounter(i)=='') 
// 		// return true;
// 	}
// };

var play = function (){
	if(!this.classList.contains('X') && !this.classList.contains('O') && keepPlaying) {
		this.classList.add(turn());
		console.log('test play');
			}
		};
// 		// console.log(this.style.backgroundImage);
// 		//checkForWinner();
// 		// checkForTie();
// 		//farge();
// 		// if(turnCounter % 2 === 0) {
// 		// 	return winnerX;
// 		// } else {
// 		// 	return winner0;
// 		// };
// 		turnCounter++;
// 			// if(turnCounter >= 9 && keepPlaying = true){
// 			// console.log('tie game');
// 	} 
// }; 

var declareWinner = function(winner){
	keepPlaying = false
	console.log(winner);
};

var startBoard = function (){
	var gameBoxes = document.getElementsByClassName('box');
	for(var i=0; i < gameBoxes.length; i++) {
		gameBoxes[i].addEventListener('click', play);
	}
};

var resetBoard = function () {
    var clearSquares = document.getElementsByClassName('box');
    console.log('Im in the function')
    for (var i=0; i < clearSquares.length; i++) {
          clearSquares[i].classList.remove('X');
          clearSquares[i].classList.remove('O');
          turnCounter = 0;
          keepPlaying = true;
	}
};  
resetGame.addEventListener("click", resetBoard);        

startBoard();

