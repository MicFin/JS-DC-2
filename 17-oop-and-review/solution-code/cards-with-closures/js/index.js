// Card class

function Card(value, suit) {
  // All properties are local variables instead of
  // stored in `this`
  var values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  var value = value;
  var suit = suit;

  // These methods _are_ stored in `this`, but they
  // now reference the local variables above. This works
  // because they will remember the local scope (closure) created by
  // this constructor after it has run.
  this.getValue = function() {
    return values[value];
  };
  this.getSuit = function() {
    return suits[suit];
  };
  this.getNumberValue = function() {
    return value;
  };
}

// These methods only reference other methods,
// not properties directly, so they don't need to be in
// the same local scope and can stay in the prototype.
Card.prototype.getName = function() {
  return this.getValue() + ' of ' + this.getSuit();
};

Card.prototype.getImage = function() {
  return 'img/' + this.getValue().toLowerCase() + '_of_' + this.getSuit().toLowerCase() + '.png';
};

// Deck class

function Deck() {
  var cards = [];

  for (var s = 0; s < 4; s++) {
    for (var v = 0; v < 13; v++) {
      cards.push(new Card(v, s));
    }
  }

  this.shuffle = function() {
    for (var i = cards.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
  };
  this.drawCard = function() {
    return cards.pop();
  };
  // We have to add this function since we no
  // longer have direct access to the cards array
  this.cardsLeft = function() {
    return cards.length;
  }
}

// Game class

function Game() {
  var deck = new Deck();
  deck.shuffle();
  var playerScore = 0;
  var computerScore = 0;
  var playerCard = undefined;
  var computerCard = deck.drawCard();
  var winner = undefined;

  this.draw = function() {
    playerCard = deck.drawCard();

    if (playerCard.getNumberValue() > computerCard.getNumberValue()) {
      playerScore++;
    } else if (playerCard.getNumberValue() !== computerCard.getNumberValue()) {
      computerScore++;
    }
  };
  this.nextTurn = function() {
    if (deck.cardsLeft() === 0) {
      if (playerScore > computerCard) {
        winner = 'You Win!';
      } else if (playerScore === computerScore) {
        winner = 'Tie!';
      } else {
        winner = 'You lose :(';
      }
    } else {
      playerCard = undefined;
      computerCard = deck.drawCard();
    }
  };
  this.getGameState = function() {
    return {
      cardsLeft: deck.cardsLeft(),
      playerCardImage: playerCard ? playerCard.getImage() : undefined,
      playerCardName: playerCard ? playerCard.getName() : undefined,
      playerScore: playerScore,
      computerCardImage: computerCard.getImage(),
      computerCardName: computerCard.getName(),
      computerScore: computerScore,
      winner: winner
    };
  };
}

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
