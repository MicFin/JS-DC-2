// Card class

function Card(value, suit) {
  this.value = value;
  this.suit = suit;
}

Card.prototype.values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

Card.prototype.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

Card.prototype.getValue = function() {
  return this.values[this.value];
};

Card.prototype.getSuit = function() {
  return this.suits[this.suit];
};

Card.prototype.getName = function() {
  return this.getValue() + ' of ' + this.getSuit();
};

Card.prototype.getImage = function() {
  return 'img/' + this.getValue().toLowerCase() + '_of_' + this.getSuit().toLowerCase() + '.png';
};

// Deck class

function Deck() {
  this.cards = [];

  for (var s = 0; s < 4; s++) {
    for (var v = 0; v < 13; v++) {
      this.cards.push(new Card(v, s));
    }
  }
}

Deck.prototype.shuffle = function() {
  for (var i = this.cards.length - 1; i > 0; i -= 1) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = this.cards[i]
    this.cards[i] = this.cards[j]
    this.cards[j] = temp
  }
};

Deck.prototype.drawCard = function() {
  return this.cards.pop();
};

// Game class

function Game() {
  this.deck = new Deck();
  this.deck.shuffle();
  this.playerScore = 0;
  this.computerScore = 0;
  this.playerCard = undefined;
  this.computerCard = this.deck.drawCard();
  this.winner = undefined;
}

Game.prototype.draw = function() {
  this.playerCard = this.deck.drawCard();

  if (this.playerCard.value > this.computerCard.value) {
    this.playerScore++;
  } else if (this.playerCard.value !== this.computerCard.value) {
    this.computerScore++;
  }
};

Game.prototype.nextTurn = function() {
  if (this.deck.cards.length === 0) {
    if (this.playerScore > this.computerCard) {
      this.winner = 'You Win!';
    } else if (this.playerScore === this.computerScore) {
      this.winner = 'Tie!';
    } else {
      this.winner = 'You lose :(';
    }
  } else {
    this.playerCard = undefined;
    this.computerCard = this.deck.drawCard();
  }
};

Game.prototype.getGameState = function() {
  return {
    cardsLeft: this.deck.cards.length,
    playerCardImage: this.playerCard ? this.playerCard.getImage() : undefined,
    playerCardName: this.playerCard ? this.playerCard.getName() : undefined,
    playerScore: this.playerScore,
    computerCardImage: this.computerCard.getImage(),
    computerCardName: this.computerCard.getName(),
    computerScore: this.computerScore,
    winner: this.winner
  };
};

// Model

var model = new Game();

// View

var template;
function compileTemplates() {
  var source = $('#board-template').html();
  template = Handlebars.compile(source);
}

function renderBoard() {
  var renderedHtml = template(model.getGameState());
  $('#board').html(renderedHtml);
}

// Controller

function setup() {
  compileTemplates();
  renderBoard();

  $('#board').on('click', '#playerDraw', handlePlayerDraw);
  $('#board').on('click', '#nextTurn', handleNextTurn);
}

function handlePlayerDraw() {
  model.draw();
  renderBoard();
}

function handleNextTurn() {
  model.nextTurn();
  renderBoard();
}

$(document).ready(setup);
