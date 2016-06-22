/**
 * Question 1
 *
 * Calculate the distance between these two points and log the answer
 * to the console.
 *
 * (1, 3) and (4, 9)
 */

var x1 = 1;
var y1 = 3;

var x2 = 4;
var y2 = 9;

var distance = Math.sqrt(
	Math.pow((x2 - x1), 2) + 
	Math.pow((y2 - y1), 2)
);
console.log(distance);

/**
 * Question 2
 *
 * Calculate the volume of a sphere with a radius of 5.
 *
 */

var radius = 5;

var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

console.log(volume);

/**
 * Question 3
 *
 * Log to the console a random number between 50 and 100.
 *
 */

var randomNumber = (Math.random * 50) + 50;

console.log(randomNumber);


/**
 * Question 4
 *
 * Create variables to store your first name, last name, and age. Then use concatenation
 * to create a sentence about yourself. Log the sentence to the console.
 *
 */

 var firstName = 'Jacob';
 var lastName = 'Friedmann';
 var age = 25;

 var bio = 'My name is ' + firstName + ' ' + lastName +
 	' and I am ' + age + ' years old.';

 console.log(bio);

/**
 * Question 5
 *
 * Convert the sentence from question 4 to all caps so that it looks like you are
 * YELLING!
 *
 */

var uppercaseBio = bio.toUpperCase();
console.log(uppercaseBio);

/**
 * Question 6
 *
 * Represent the following statement using booleans and logical operators.
 * Log the result of the logical expression to the console.
 *
 * The first president of the U.S.A. was George Washington and there are 52 states
 * or the capital is Washington D.C.
 */

var firstPresWashington = true;
var fiftyTwoStates = false;
var capitalIsDC = true;

var isStatementTrue = firstPresWashington &&
	fiftyTwoStates ||
	capitalIsDC;

console.log(isStatementTrue);
