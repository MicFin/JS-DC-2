var gamePrompt = require('game-prompt');
var colors = require('colors');

var playerName;
var safeInventory = ['white', 'green', 'blue', 'yellow', 'red'];
var playerInventory;
var door = [];
var isTableDusty = true;

function begin() {
  gamePrompt([
    'FUN HOUSE'.red,
    'Press ENTER to start'
  ], intro);
}

function intro() {
  gamePrompt([
    'July 3rd, 2016, Washington D.C. - Billionaire eccentric game ' +
    'designer Ira Dunn has passed away. He is survived by no one. Strangely, ' +
    'in his last will and testament, he leaves all of his money to the first ' +
    'person who is able to find it within his Northern Virginia estate. Now, ' +
    'two days later, the line to enter the house and attempt to recover the ' +
    'fortune has grown to thousands with still no victor emerging.',
    'Now, it\'s your turn.'.red,
    'As you enter the house, a voice comes from the speaker',
    '"Welcome."',
    '"What is your name?"'.bold
  ], saveName);
}

function saveName(name) {
  playerName = name;

  gamePrompt([
    '"Ahah..."',
    '"' + playerName + '."',
    '"Will you be the one? We\'ll find out."',
    'On the wall ahead you see large type\n',
    '78 > 90 || "Abc" === "abc"'.blue,
    '\nThere are two doors. To the right one with the word TRUE carved into it ' +
    'and to the left one with the word FALSE.',
    'Which way do you turn? R or L'
  ], enterDoor);
}

function enterDoor(direction) {
  if (direction.toUpperCase() === 'R') {
    console.log('GAME OVER.'.red);
  } else if (direction.toUpperCase() === 'L') {
    gamePrompt([
      '\nYou enter the room to the left. It is empty, brightly lit and entirely white.',
      'There is a single, red button in the center of the wall ahead.',
      'You realize the the wall is actually a screen and the following text appears:\n',
      'for (var i = 0; i <= 4; i++) {\n\tpressButton();\n}'.blue
    ], walkToButton);
  } else {
    chooseDoor();
  }
}

function walkToButton() {
  gamePrompt('How many times do you press the button?', pressButton);
}

function pressButton(presses) {
  var presses = parseInt(presses);
  if (presses === NaN) {
    walkToButton();
  } else {
    for (var i = 1; i <= presses; i++) {
      console.log(i + ' press' + (i > 1 ? 'es' : ''));
    }
    if (presses === 5) {
      gamePrompt([
        '\nThe lights suddenly shut off and the floor falls out from under you.',
        'You slide down the shaft in the pitch black. Moments later you land, still unable to see.',
        'You crawl around for a minute before your eyes adjust.',
        'There is a door with 3 keyholes, a table, a chalk board...',
        'You finally notice a safe with a combination lock in the corner. Etched into the metal is:',
        '\nvar a = 1;\n\nfunction b() {\n	var a = 2;\n\n	function c() {\n		var a = 3;\n		return a;\n	}\n\n	return c();\n}\n\nvar c = b();\n\nenter(c);\nenter(a);\nenter(a);\nenter(c);'.blue
      ], findSafe);
    } else {
      gamePrompt([
        'Nothing happens.',
        '"I thought you had it in you ' + playerName + '"'
      ], walkToButton);
    }
  }
}

function findSafe() {
  gamePrompt('Enter the combination:', enterCombination);
}

function enterCombination(combo) {
  var combination = parseInt(combo);

  if (combination === 3113) {
    gamePrompt([
      'click'.green,
      'The safe door slides open.'
    ], insideSafe);
  } else {
    gamePrompt([
      'Nothing happens.'
    ], findSafe);
  }
}

function insideSafe() {
  var message = 'Inside the safe there are ' + safeInventory.length + ' keys: ';
  safeInventory.forEach(function (key) {
    message += 'one ' + key + ', ';
  });
  gamePrompt([
    message.substr(0, message.length - 2),
    'Which key do you take?'
  ], takeKey);
}

function takeKey(key) {
  var keyLowerCase = key.toLowerCase();
  if (safeInventory.indexOf(keyLowerCase) < 0) {
    insideSafe();
  } else {
    var droppedKey = playerInventory;
    playerInventory = keyLowerCase;
    safeInventory.splice(
      safeInventory.indexOf(keyLowerCase),
      1
    );
    if (droppedKey) {
      safeInventory.push(droppedKey);
    }
    gamePrompt('You take the ' + keyLowerCase + ' key' + (droppedKey ? ' and drop the ' + droppedKey + ' key.' : '.'), walk);
  }
}

function walk() {
  gamePrompt('Where to now? the\nSafe (S)\nTable (T)\nChalkboard (C)\nDoor (D)', navigate);
}

function navigate(place) {
  var placeLowerCase = place.toLowerCase();

  if (placeLowerCase === 'd' || placeLowerCase === 'door') {
    approachDoor();
  } else if (placeLowerCase === 't' || placeLowerCase === 'table') {
    approachTable();
  } else if (placeLowerCase === 'c' || placeLowerCase === 'chalkboard') {
    approachChalkboard();
  } else if (placeLowerCase === 's' || placeLowerCase === 'safe') {
    insideSafe();
  } else {
    gamePrompt('Hmmm... that is not a place in this room', navigate);
  }
}

function approachDoor() {
  if (playerInventory) {
    gamePrompt([
      'There are three keyholes on the door.',
      'Slot 1 has ' + (door[1] ? 'the ' + door[1] + ' key' : 'no key'),
      'Slot 2 has ' + (door[2] ? 'the ' + door[2] + ' key' : 'no key'),
      'Slot 3 has ' + (door[3] ? 'the ' + door[3] + ' key' : 'no key'),
      'Which slot do you enter the ' + playerInventory + ' key into? 1, 2 or 3'
    ], insertKey);
  } else {
    gamePrompt('There are three keyholes in the door, but you have no keys.', walk);
  }
}

function insertKey(slot) {
  var slotInt = parseInt(slot);
  if (slotInt === 1 || slotInt === 2 || slotInt === 3) {
    var insertedKey = playerInventory;
    playerInventory = door[slotInt];
    door[slotInt] = insertedKey;

    if (door[1] === 'red' && door[2] === 'white' && door[3] === 'blue') {
      win();
    } else {
      gamePrompt([
        'You enter the ' + insertedKey + ' key into slot ' + slotInt + '.',
        'You now have ' + (playerInventory ? 'the ' + playerInventory + ' key' : 'no keys')
      ], walk);
    }
  }
}

function approachTable() {
  if (isTableDusty) {
    gamePrompt([
      'The table is dusty.',
      'Brush away dust (B) or walk away (W)'
    ], brushTable);
  } else {
    gamePrompt([
      'Underneath the dust, you see some text written on the table:',
      'var color3 = "blue"'.blue
    ], walk);
  }
}

function brushTable(action) {
  if (action.toLowerCase() === 'b') {
    isTableDusty = false;
    gamePrompt('You brush away the dust.', approachTable);
  } else {
    walk();
  }
}

function approachChalkboard() {
  gamePrompt([
    'Scrawled on the chalkboard, you see something that looks important:',
    'function tryDoor(slot1, slot2, slot3) {\n	if (slot1 === ‘red’ && slot2 === ‘white’ && slot3 === color3) {\n		unlock();\n	}\n}'.blue
  ], walk)
}

function win() {
  gamePrompt([
    'The door slides open'.green,
    'Inside, a 3D printer prints a bank card.',
    'You look closer and see the name on the card:',
    '"' + playerName + '"',
    'YOU WIN'.green
  ]);
}

begin();
