/**
 * Question 1
 * Create a program that will grade a random test score between 0 and 100.
 *
 * Grading scale:
 * - An "A" is between [90 and 100]
 * - A "B" is between [80 and 90)
 * - A "C" is between [70 and 79)
 * - A "D" is between [60 and 69)
 * - An "F" is between [0 and 60)
 *
 * Log both the random number grade and its corresponding letter grade to the console.
 */

var testScore = Math.random() * 100;

var letterGrade;
if (testScore >= 90) {
	letterGrade = 'A';
} else if (testScore >= 80) {
	letterGrade = 'B';
} else if (testScore >= 70) {
	letterGrade = 'C';
} else if (testScore >= 60) {
	letterGrade = 'D';
} else {
	letterGrade = 'F';
}

console.log('My number grade is ' + testScore + ' and my letter grade is ' + letterGrade);


/**
 * Question 2
 * Create a second random test score between 0 and 100. Calculate the average of the two test scores.
 * If the average is a "B" or better, log to the console "Well done!" else log "Better luck next time".
 *
 */

var secondTestScore = Math.random() * 100;

var average = (testScore + secondTestScore) / 2;

// Use a ternary to assign the message.
var message = average >= 80 ? 'well done' : 'Better luck next time!';

console.log('My average was ' + average + '. Teach says "' + message + '"');















