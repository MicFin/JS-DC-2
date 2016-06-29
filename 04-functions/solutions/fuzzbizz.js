
// Relying on your newfound knowledge of loops, combine loops and if/else statements together and incrementally build the fuzzbizz loop.

// - In the loop, every time a string's length is divisible by **3**, instead of logging the number itself, the word "fuzz" should appear.
// - If the string's length is divisible by  **5**, the word "bizz" should be logged.
// - If the string's length is divisible by both **3** and  **5**, then the word "fuzzbizz" should be logged.

// Follow the steps below.

var words = [
  'overconfident',
  'receipt',
  'ring',
  'material',
  'whispering',
  'astronautically',
  'typical',
  'stretch',
  'side',
  'upset',
  'river',
  'excellent',
  'tame',
  'pseudopseudohypoparathyroidism',
  'cry',
  'kill',
  'damp',
  'aback',
  'various',
  'ordinary',
  'tense',
  'pass',
  'picayune',
  'gray',
  'berserk',
  'magenta',
  'birds'
];

// ##### Step 1:
// Construct a for loop that iterates through the word array, and `console.log()`'s out the length of each string.

for (var i = 0; i < words.length; i++) {
  var word = words[i];

  console.log(word.length);
}

// ##### Step 2:
// Add an `if/else` statement that logs the string `"fuzz"` if the value being iterated over has a length divisible by `3`; otherwise, log out the length.
// Hint: Remember the "modulus" operator.

for (var i = 0; i < words.length; i++) {
  var word = words[i];
  
  if (word.length % 3 === 0) {
    console.log('Fuzz');
  } else {
    console.log(word.length);
  }
}

// ##### Step 3:
// Add an `else if` clause that logs the string `"bizz"` if the value being iterated over has a length divisible by `5`.

for (var i = 0; i < words.length; i++) {
  var word = words[i];
  
  if (word.length % 3 === 0) {
    console.log('Fuzz');
  } else if (word.length % 5 === 0) {
    console.log('Bizz');  
  } else {
    console.log(word.length);
  }

}

// ##### Step 4:
// Add an additional clause that logs the string `"fuzzbizz"` if the value being iterated over has a length divisible by both `3` and `5`.
// Hint: You may have to change the order.


for (var i = 0; i < words.length; i++) {
  var word = words[i];
  
  if (word.length % 3 === 0 && word.length % 5 === 0) {
    console.log('FuzzBizz');
  } else if (word.length % 3 === 0) {
    console.log('Fuzz');
  } else if (word.length % 5 === 0) {
    console.log('Bizz');  
  } else {
    console.log(word.length);
  }

}
