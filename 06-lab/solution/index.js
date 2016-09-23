var gamePrompt = require('game-prompt');
var colors = require('colors');

var playerName;
var vehicleName;
var destinations = [
  {
    name: 'Earth',
    distance: 10,
    handler: approachEarth
  },
  {
    name: 'Mesnides',
    distance: 20,
    handler: approachMesnides
  },
  {
    name: 'Laplides',
    distance: 50,
    handler: approachLaplides
  },
  {
    name: 'Kiyturn',
    distance: 120,
    handler: approachKiyturn
  },
  {
    name: 'Aenides',
    distance: 25,
    handler: approachAenides
  },
  {
    name: 'Cramuthea',
    distance: 200,
    handler: approachCramuthea
  },
  {
    name: 'Smeon T9Q',
    distance: 400,
    handler: approachSmeon
  },
  {
    name: 'Gleshan 7Z9',
    distance: 85,
    handler: approachGleshan
  }
];
var fuel = 1000;
var playerInventory = [];

function addItemToInventory(item) {
  if (playerInventory.indexOf(item) < 0) {
    playerInventory.push(item);
  }
}

function begin() {
  gamePrompt('S.R.S.V.\nPress ENTER to start'.red, intro);
}

function intro() {
  gamePrompt([
    'You are the captain of a Solo Research Space Vehicle (S.R.S.V.) on an ' +
    'expedition to explore foreign planets. Your mission is to make contact ' +
    'with three alien life forms, acquire an artifact representative of their ' +
    'culture, and bring back your findings to Earth.',
    'A voice comes on over the intercom'.red,
    '"S.R.S.V. captain, please state your name for identity verification."'
  ], saveName);
}

function saveName(name) {
  playerName = name;

  gamePrompt([
    '"Thank you Captain ' + playerName + '."',
    '"Please state your vehicle name for identity verification."'
  ], saveVehicleName);
}

function saveVehicleName(name) {
  vehicleName = name;

  gamePrompt([
    '"Thank you Captain ' + playerName + ' of S.R.S.V. ' + vehicleName + '."',
    '"Your identity has been verified."'
  ], askTravel);
}

function askTravel() {
  var fuelPrompt = 'You have ' + fuel + ' gallons of remaining.';
  var travelPrompt = 'Choose your destination Captain ' + playerName + '.';
  destinations.forEach(function(destination) {
    travelPrompt += '\n(' + destination.name.charAt(0) + ')' +
      destination.name.substr(1) + ' - ' +
      destination.distance + ' lightyears';
  });

  gamePrompt([
    fuelPrompt,
    travelPrompt
  ], travel);
}

function travel(planet) {
  var destination;
  destinations.forEach(function(d) {
    if (planet.toUpperCase() === d.name.charAt(0)) {
      destination = d;
    }
  });

  if (!destination) {
    gamePrompt('Sorry, I do not recognize that destination.', askTravel);
  } else {
    fuel -= destination.distance;
    if (fuel <= 0) {
      lose();
    } else {
      gamePrompt([
        'Travelling to ' + destination.name + ' using ' + destination.distance + ' gallons of fuel',
        'You now have ' + fuel + ' gallons of fuel remaining.'
      ], destination.handler);
    }
  }
}

function approachEarth() {
  if (playerInventory.length === 3) {
    gamePrompt('You\'ve arrived at Earth with 3 artifacts.', win);
  } else {
    fuel += 10;
    gamePrompt([
      'You\'ve arrived at Earth.',
      '"Captain ' + playerName + ', you do not have enough artifacts."',
      '"Take this fuel and get back out there." (+10)'
    ], askTravel);
  }
}

function approachSmeon() {
  fuel += 100;

  gamePrompt([
    'You\'ve arrived at Smeon T9Q. As you land, a representative of the Cramuthean people is there to greet you.',
    '"Welcome to Smeon T9Q."',
    '"The Cramuthean people have lived here since we were forced to leave our home planet 100 years ago."',
    '"The planet was ravaged by droughts, severe weather and foreign invasions."',
    '"We now call Smeon T9Q home."',
    '"You\'ve travelled far, here is some fuel for your journey. (+100)"',
    'You now have ' + fuel + ' gallons of fuel.'
  ], askSmeon);
}

function askSmeon() {
  gamePrompt('"What brings you here?"\nAsk about (A)rtifact.\nAsk about other (P)lanets\n(L)eave', answerSmeon);
}

function answerSmeon(answer) {
  if (answer.toLowerCase() === 'a') {
    addItemToInventory('Cramun Flower');
    gamePrompt([
      '"Here, take this dried Cramun Flower from our home planet."',
      'Cramun Flower added to your inventory.',
      'You now have ' + playerInventory.length + ' artifact' + (playerInventory.length > 1 ? 's.' : '.')
    ], askSmeon);
  } else if (answer.toLowerCase() === 'p') {
    gamePrompt([
      '"The people of Aenides once tried to take over our home planet by force."',
      '"We fended them off, but they are an aggresive people to be avoided.'
    ], askSmeon);
  } else if (answer.toLowerCase() === 'l') {
    askTravel();
  } else {
    gamePrompt('I\'m sorry traveler, but I don\'t understand your question', askSmeon);
  }
}

function approachGleshan() {
  gamePrompt([
    'You\'ve arrived at Gleshan 7Z9. As you land, a representative of the Gleshan people is there to greet you.',
    '"Welcome to our humble planet Gleshan 7Z9."',
  ], askGleshan);
}

function askGleshan() {
  gamePrompt('"How can we be of service?"\nAsk about (A)rtifact.\nAsk about other (P)lanets\n(L)eave', answerGleshan);
}

function answerGleshan(answer) {
  if (answer.toLowerCase() === 'a') {
    gamePrompt(
      '"I\'m sorry, but we are a poor planet and it is against our custom to part with our precious artifacts."',
      askGleshan
    );
  } else if (answer.toLowerCase() === 'p') {
    gamePrompt([
      '"We were once friends with the people of Cramuthea, but it has been years since we have heard from them."',
      '"They are a friendly and generous people."'
    ], askGleshan);
  } else if (answer.toLowerCase() === 'l') {
    askTravel();
  } else {
    gamePrompt('I\'m sorry traveler, but I don\'t understand your question', askGleshan);
  }
}

function approachAenides() {
  gamePrompt([
    'You\'ve arrived at Aenides. As you try to land, the people begin firing on your ship.',
    'You narrowly avoid disaster, but are forced to turn around.'
  ], askTravel);
}

function approachKiyturn() {
  gamePrompt(
    'You\'ve arrived at Kiyturn. As you land, a representative of the Kiyturn people is there to greet you.',
    askKiyturn
  );
}

function askKiyturn() {
  gamePrompt('"Hello, what brings you to Kiyturn? You\'re not here to cause trouble are you?"' +
    '\nAsk about (A)rtifact.\nAsk about other (P)lanets\n(L)eave', answerKiyturn);
}

function answerKiyturn(answer) {
  if (answer.toLowerCase() === 'a') {
    addItemToInventory('Kiyturn Glass Bowl');
    gamePrompt([
      '"Here, take this Kiyturn Glass Bowl, a symbol of our civilization."',
      'Kiyturn Glass Bowl added to your inventory.',
      'You now have ' + playerInventory.length + ' artifact' + (playerInventory.length > 1 ? 's.' : '.')
    ], askMesnides);
  } else if (answer.toLowerCase() === 'p') {
    gamePrompt('"I\'m sorry, but we do not leave our planet. The universe, to us, is a beautiful mystery."', askKiyturn);
  } else if (answer.toLowerCase() === 'l') {
    askTravel();
  } else {
    gamePrompt('I\'m sorry traveler, but I don\'t understand your question', askKiyturn);
  }
}

function approachLaplides() {
  gamePrompt([
    'You enter orbit around Laplides. Looking down at the planet, you see ' +
    'signs of atomic war and realize there is no option but to turn around.'
  ], askTravel);
}

function approachMesnides() {
  gamePrompt([
    'You\'ve arrived at Mesnides. As you land, a representative of the Mesnidian people is there to greet you.',
    '"Welcome, traveler, to Mesnides."',
  ], askMesnides);
}

function askMesnides() {
  gamePrompt('"How can we assist you?"\nAsk about (A)rtifact.\nAsk about other (P)lanets\n(L)eave', answerMesnides);
}

function answerMesnides(answer) {
  if (answer.toLowerCase() === 'a') {
    addItemToInventory('Myoin Horn');
    gamePrompt([
      '"Here, take this Myoin Horn, an ancient Mesnidian instrument."',
      'Myoin Horn added to your inventory.',
      'You now have ' + playerInventory.length + ' artifact' + (playerInventory.length > 1 ? 's.' : '.')
    ], askMesnides);
  } else if (answer.toLowerCase() === 'p') {
    gamePrompt('"Well, Laplides suffered from atomic war and has been uninhabited ' +
    'for centuries. You would do well to avoid it on your journey."', askMesnides);
  } else if (answer.toLowerCase() === 'l') {
    askTravel();
  } else {
    gamePrompt('I\'m sorry traveler, but I don\'t understand your question', askMesnides);
  }
}

function approachCramuthea() {
  fuel += 500;

  gamePrompt([
    'You have arrived at Cramuthea.',
    'The planet is abandoned, but it looks like people were here in the not-too-distant past.',
    'You land on the planet and find fuel for your ship. (+500)',
    'You now have ' + fuel + ' gallons of fuel.',
    'You find a beacon signal.',
    'It appears the people that once lived here have migrated to Smeon T9Q.'
  ], askTravel);
}

function lose() {
  gamePrompt([
    'You ran out of fuel',
    'Game Over'.red
  ]);
}

function win() {
  gamePrompt([
    '"Great work Captain ' + playerName + '."',
    '"Your mission is complete"'.green
  ]);
}

begin();

// var gamePrompt = require('game-prompt');
// var colors = require('colors');

// var playerName;
// var safeInventory = ['white', 'green', 'blue', 'yellow', 'red'];
// var playerInventory;
// var door = [];
// var isTableDusty = true;

// function begin() {
//   gamePrompt([
//     'FUN HOUSE'.red,
//     'Press ENTER to start'
//   ], intro);
// }

// function intro() {
//   gamePrompt([
//     'July 3rd, 2016, Washington D.C. - Billionaire eccentric game ' +
//     'designer Ira Dunn has passed away. He is survived by no one. Strangely, ' +
//     'in his last will and testament, he leaves all of his money to the first ' +
//     'person who is able to find it within his Northern Virginia estate. Now, ' +
//     'two days later, the line to enter the house and attempt to recover the ' +
//     'fortune has grown to thousands with still no victor emerging.',
//     'Now, it\'s your turn.'.red,
//     'As you enter the house, a voice comes from the speaker',
//     '"Welcome."',
//     '"What is your name?"'.bold
//   ], saveName);
// }

// function saveName(name) {
//   playerName = name;

//   gamePrompt([
//     '"Ahah..."',
//     '"' + playerName + '."',
//     '"Will you be the one? We\'ll find out."',
//     'On the wall ahead you see large type\n',
//     '78 > 90 || "Abc" === "abc"'.blue,
//     '\nThere are two doors. To the right one with the word TRUE carved into it ' +
//     'and to the left one with the word FALSE.',
//     'Which way do you turn? R or L'
//   ], enterDoor);
// }

// function enterDoor(direction) {
//   if (direction.toUpperCase() === 'R') {
//     console.log('GAME OVER.'.red);
//   } else if (direction.toUpperCase() === 'L') {
//     gamePrompt([
//       '\nYou enter the room to the left. It is empty, brightly lit and entirely white.',
//       'There is a single, red button in the center of the wall ahead.',
//       'You realize the the wall is actually a screen and the following text appears:\n',
//       'for (var i = 0; i <= 4; i++) {\n\tpressButton();\n}'.blue
//     ], walkToButton);
//   } else {
//     chooseDoor();
//   }
// }

// function walkToButton() {
//   gamePrompt('How many times do you press the button?', pressButton);
// }

// function pressButton(presses) {
//   var presses = parseInt(presses);
//   if (presses === NaN) {
//     walkToButton();
//   } else {
//     for (var i = 1; i <= presses; i++) {
//       console.log(i + ' press' + (i > 1 ? 'es' : ''));
//     }
//     if (presses === 5) {
//       gamePrompt([
//         '\nThe lights suddenly shut off and the floor falls out from under you.',
//         'You slide down the shaft in the pitch black. Moments later you land, still unable to see.',
//         'You crawl around for a minute before your eyes adjust.',
//         'There is a door with 3 keyholes, a table, a chalk board...',
//         'You finally notice a safe with a combination lock in the corner. Etched into the metal is:',
//         '\nvar a = 1;\n\nfunction b() {\n	var a = 2;\n\n	function c() {\n		var a = 3;\n		return a;\n	}\n\n	return c();\n}\n\nvar c = b();\n\nenter(c);\nenter(a);\nenter(a);\nenter(c);'.blue
//       ], findSafe);
//     } else {
//       gamePrompt([
//         'Nothing happens.',
//         '"I thought you had it in you ' + playerName + '"'
//       ], walkToButton);
//     }
//   }
// }

// function findSafe() {
//   gamePrompt('Enter the combination:', enterCombination);
// }

// function enterCombination(combo) {
//   var combination = parseInt(combo);

//   if (combination === 3113) {
//     gamePrompt([
//       'click'.green,
//       'The safe door slides open.'
//     ], insideSafe);
//   } else {
//     gamePrompt([
//       'Nothing happens.'
//     ], findSafe);
//   }
// }

// function insideSafe() {
//   var message = 'Inside the safe there are ' + safeInventory.length + ' keys: ';
//   safeInventory.forEach(function (key) {
//     message += 'one ' + key + ', ';
//   });
//   gamePrompt([
//     message.substr(0, message.length - 2),
//     'Which key do you take?'
//   ], takeKey);
// }

// function takeKey(key) {
//   var keyLowerCase = key.toLowerCase();
//   if (safeInventory.indexOf(keyLowerCase) < 0) {
//     insideSafe();
//   } else {
//     var droppedKey = playerInventory;
//     playerInventory = keyLowerCase;
//     safeInventory.splice(
//       safeInventory.indexOf(keyLowerCase),
//       1
//     );
//     if (droppedKey) {
//       safeInventory.push(droppedKey);
//     }
//     gamePrompt('You take the ' + keyLowerCase + ' key' + (droppedKey ? ' and drop the ' + droppedKey + ' key.' : '.'), walk);
//   }
// }

// function walk() {
//   gamePrompt('Where to now? the\nSafe (S)\nTable (T)\nChalkboard (C)\nDoor (D)', navigate);
// }

// function navigate(place) {
//   var placeLowerCase = place.toLowerCase();

//   if (placeLowerCase === 'd' || placeLowerCase === 'door') {
//     approachDoor();
//   } else if (placeLowerCase === 't' || placeLowerCase === 'table') {
//     approachTable();
//   } else if (placeLowerCase === 'c' || placeLowerCase === 'chalkboard') {
//     approachChalkboard();
//   } else if (placeLowerCase === 's' || placeLowerCase === 'safe') {
//     insideSafe();
//   } else {
//     gamePrompt('Hmmm... that is not a place in this room', navigate);
//   }
// }

// function approachDoor() {
//   if (playerInventory) {
//     gamePrompt([
//       'There are three keyholes on the door.',
//       'Slot 1 has ' + (door[1] ? 'the ' + door[1] + ' key' : 'no key'),
//       'Slot 2 has ' + (door[2] ? 'the ' + door[2] + ' key' : 'no key'),
//       'Slot 3 has ' + (door[3] ? 'the ' + door[3] + ' key' : 'no key'),
//       'Which slot do you enter the ' + playerInventory + ' key into? 1, 2 or 3'
//     ], insertKey);
//   } else {
//     gamePrompt('There are three keyholes in the door, but you have no keys.', walk);
//   }
// }

// function insertKey(slot) {
//   var slotInt = parseInt(slot);
//   if (slotInt === 1 || slotInt === 2 || slotInt === 3) {
//     var insertedKey = playerInventory;
//     playerInventory = door[slotInt];
//     door[slotInt] = insertedKey;

//     if (door[1] === 'red' && door[2] === 'white' && door[3] === 'blue') {
//       win();
//     } else {
//       gamePrompt([
//         'You enter the ' + insertedKey + ' key into slot ' + slotInt + '.',
//         'You now have ' + (playerInventory ? 'the ' + playerInventory + ' key' : 'no keys')
//       ], walk);
//     }
//   }
// }

// function approachTable() {
//   if (isTableDusty) {
//     gamePrompt([
//       'The table is dusty.',
//       'Brush away dust (B) or walk away (W)'
//     ], brushTable);
//   } else {
//     gamePrompt([
//       'Underneath the dust, you see some text written on the table:',
//       'var color3 = "blue"'.blue
//     ], walk);
//   }
// }

// function brushTable(action) {
//   if (action.toLowerCase() === 'b') {
//     isTableDusty = false;
//     gamePrompt('You brush away the dust.', approachTable);
//   } else {
//     walk();
//   }
// }

// function approachChalkboard() {
//   gamePrompt([
//     'Scrawled on the chalkboard, you see something that looks important:',
//     'function tryDoor(slot1, slot2, slot3) {\n	if (slot1 === ‘red’ && slot2 === ‘white’ && slot3 === color3) {\n		unlock();\n	}\n}'.blue
//   ], walk)
// }

// function win() {
//   gamePrompt([
//     'The door slides open'.green,
//     'Inside, a 3D printer prints a bank card.',
//     'You look closer and see the name on the card:',
//     '"' + playerName + '"',
//     'YOU WIN'.green
//   ]);
// }

// begin();
