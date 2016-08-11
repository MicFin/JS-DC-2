// 1. Write an if/else conditional to assign the value of the description to 'even'
// if the random number is even and 'odd' if the number is odd.
// Use the modulus operator and an equality check.
var randomNumber = Math.floor(Math.random() * 100);
var description;

if (randomNumber % 2 === 0) {
  description = 'even';
} else {
  description = 'odd';
}

// 2. Refactor your answer from number 1 to use truthiness/falsiness in place of the
// equality check.

// Note: 0 is falsy, but 1 is truthy
if (randomNumber % 2) {
  description = 'odd';
} else {
  description = 'even';
}

// 3. Refactor your answer from question 2 to use a ternary instead of an if/else
// conditional.

description = randomNumber % 2 ? 'odd' : 'even';

// 4. Use a nested for loop to log whether each number is even or
// odd in the nested arrays.
var nestedArrays = [
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [10, 32, 67, 12],
  [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
];

// Loop through the outer array
for (var outerIndex = 0; outerIndex < nestedArrays.length; outerIndex++) {
  // Loop through the array stored at this index
  for (var innerIndex = 0; innerIndex < nestedArrays[outerIndex].length; innerIndex++) {
    console.log(nestedArrays[outerIndex][innerIndex] % 2 ? 'odd' : 'even');
  }
}

// 5. Write a function that logs all even numbers between 0 and 100

function logEvenNumbers() {
  for (var i = 0; i <= 100; i += 2) {
    console.log(i);
  }
}

// 6. Write a function that has two string parameters and logs one at random

function randomString(string1, string2) {
  return Math.random() >= 0.5 ? string1 : string2;
}

// 7. Write a function that takes in a string parameter, password, and ensures it:
// - has at least 8 characters
// - doesn't contain any spaces
// If it meets these criteria, return true, else return false.

function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }
  if (password.indexOf(' ') >= 0) {
    return false;
  }
  return true;
}

// 8. Write a function that accepts a number parameter and returns the number
// formatted as a currency string. (i.e. 2.1293 -> $2.12)

function formatCurrency(num) {
  var roundedNumber = num.toFixed(2);
  return '$' + roundedNumber;
}

// 9. Given the following render function and template, convert the event listener to
// a delegated event listener.
// <script id="tweet-template" type="text/x-handlebars-template">
//   <div class="tweet">
//     <h2>{{author}}</h2>
//     <p>{{text}}</p>
//     <small>{{timestamp}}</small>
//     <button class="heart">♥</button>
//   </div>
// </script>

function renderTweet() {
  $('#tweetContainer').html(render(model));
}

$('#tweetContainer').on('click', '.heart', handleHeart);

function handleHeart() {
  $.ajax({
    type: 'PUT',
    url: '/tweet/' + model.id,
    data: {hearted: true}
  });
}

// 10. Make the event listener from question 9 an anonymous function argument
// to the `.on` function call.

$('#tweetContainer').on('click', '.heart', function () {
  $.ajax({
    type: 'PUT',
    url: '/tweet/' + model.id,
    data: {hearted: true}
  });
});
