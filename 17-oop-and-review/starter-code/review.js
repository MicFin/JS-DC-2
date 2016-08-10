// 1. Write an if/else conditional to assign the value of the description to 'even'
// if the random number is even and 'odd' if the number is odd.
// Use the modulus operator and an equality check.
var randomNumber = Math.floor(Math.random() * 100);
var description;

// 2. Refactor your answer from number 1 to use truthiness/falsiness in place of the
// equality check.


// 3. Refactor your answer from question 2 to use a ternary instead of an if/else
// conditional.


// 4. Use a nested for loop to log whether each number is even or
// odd in the nested arrays.
var nestedArrays = [
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [10, 32, 67, 12],
  [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
];


// 5. Write a function that logs all even numbers between 0 and 100


// 6. Write a function that has two string parameters and logs one at random


// 7. Write a function that takes in a string parameter, password, and ensures it:
// - has at least 8 characters
// - doesn't contain any spaces
// If it meets these criteria, return true, else return false.


// 8. Write a function that accepts a number parameter and returns the number
// formatted as a currency string. (i.e. 2.1293 -> $2.12)


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

$('.heart').on('click', handleHeart);

function handleHeart() {
  $.ajax({
    type: 'PUT',
    url: '/tweet/' + model.id,
    data: {hearted: true}
  });
}

// 10. Make the event listener from question 9 an anonymous function argument
// to the `.on` function call.
