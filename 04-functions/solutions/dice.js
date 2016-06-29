/*
 *
 * Question 1
 * Write a function that will "roll a dice". It should generate a random number between 1 and 6 and then log that to the console.
 * Call your function.
 *
 */

function rollDice() {
	var diceNumber = Math.floor(Math.random() * 6) + 1;
	console.log(diceNumber);
}

rollDice();

/*
 *
 * Question 2
 * Write a function that will roll two dice. In addition to logging each dice's value, it should also log the sum.
 * Call your function.
 *
 */

function rollTwoDice() {
	rollDice();
	rollDice();
}


// Using Parameters and return values 

function rollDice() {
	var diceNumber = Math.floor(Math.random() * 6) + 1;
	return diceNumber;
}

function rollNDice(numberOfRolls) {
	var i = 0;
	var sum = 0;
	while (i < numberOfRolls) {
		var roll = rollDice();
		console.log(roll);
		sum += roll;
		i++;
	}
	console.log(sum);
}

rollNDice(2);

