var values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

function makeCard(value, suit) {
  return {
    value: value,
    suit: suit,
    getValue: function() {
      return values[this.value];
    },
    getSuit: function() {
      return suits[this.suit];
    },
    getName: function() {
      return this.getValue() + ' of ' + this.getSuit();
    },
    getImage: function() {
      return 'img/' + this.getValue().toLowerCase() + '_of_' + this.getSuit().toLowerCase() + '.png';
    }
  };
}

function makeDeck() {
  var cards = [];

  for (var s = 0; s < 4; s++) {
    for (var v = 0; v < 13; v++) {
      cards.push(makeCard(v, s));
    }
  }

  return {
    cards: cards,
    shuffle: function() {
      for (var i = this.cards.length - 1; i > 0; i -= 1) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = this.cards[i]
        this.cards[i] = this.cards[j]
        this.cards[j] = temp
      }
    },
    drawCard: function() {
      return this.cards.pop();
    }
  };
}

function makeGame() {
  var deck = makeDeck();
  deck.shuffle();

  return {
    deck: deck,
    playerScore: 0,
    computerScore: 0,
    playerCard: undefined,
    computerCard: deck.drawCard(),
    winner: undefined,
    draw: function() {
      this.playerCard = this.deck.drawCard();

      if (this.playerCard.value > this.computerCard.value) {
        this.playerScore++;
      } else if (this.playerCard.value !== this.computerCard.value) {
        this.computerScore++;
      }
    },
    nextTurn: function() {
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
    },
    getGameState: function() {
      return {
        cardsLeft: this.deck.cards.length,
        playerCardImage: typeof this.playerCard === 'object' ? this.playerCard.getImage() : undefined,
        playerCardName: typeof this.playerCard === 'object' ? this.playerCard.getName() : undefined,
        playerScore: this.playerScore,
        computerCardImage: this.computerCard.getImage(),
        computerCardName: this.computerCard.getName(),
        computerScore: this.computerScore,
        winner: this.winner
      };
    }
  };
}

// Model
var model = makeGame();

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
