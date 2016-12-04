
// the cards of the game
var cards = ['queen', 'queen', 'king', 'king'];

// the cards in play
var cardsInPlay = [];


var board = document.getElementById('game-board');
//function that creates the board
function createBoard() {
	// loop through cards array to create card elements for the board
	for (var i=0; i<cards.length; i++) {
		// create a div element which will be used as a card
		var cardElement = document.createElement('div');
		// add a class to the card element which will link styling
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);

		board.appendChild(cardElement);
		board.appendChild(cardElement);	
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
		console.log(this.getAttribute('data-card'));
		if (this.getAttribute('data-card') === 'king') {
			this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
		}	else {
			this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; // queen
		}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cards) {
	//alert winning message
	if (cards[0] === cards[1]) {
		alert("Your found a match!");
	} 	else {
		alert("Sorry, try again.");
	}	
}

createBoard();



