const inquirer = require('inquirer');
const colors = require('colors');

console.log('FUN HOUSE'.red);

var playerName;

function begin() {
  inquirer.prompt([{
    message: 'Press ENTER to start'.bold
  }]).then(intro);
}

function intro(error, answer) {
  console.log('July 3rd, 2016, Washington D.C. - Billionaire eccentric game ' +
  'designer Ira Dunn has passed away. He is survived by no one. Strangely, ' +
  'in his last will and testament, he leaves all of his money to the first ' +
  'person who is able to find it within his Northern Virginia estate. Now, ' +
  'two days later, the line to enter the house and attempt to recover the ' +
  'fortune has grown to thousands with still no victor emerging.');

  prompt.get([{
    description: 'Press ENTER to continue'.bold
  }], function (error, answer) {
    prompt.get([{
      description: 'Now, it\'s your turn.'.red
    }], askName);
  });
}

function askName(error, answer) {
  console.log('As you enter the house, a voice comes from the speaker');
  console.log('"Welcome.""');

  prompt.get([{
    description: '"What is your name?"'.bold,
    name: 'name'
  }], saveName);
}

function saveName(error, answer) {
  playerName = answer.name;
  console.log('"Ahah..."');
  console.log(playerName + '.');
  console.log('"Will you be the one? We\'ll find out."\n\n');
}

begin();
