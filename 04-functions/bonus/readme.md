## do while

## function expressions

__Function Expressions:__
```javascript
var speak = function (words) {
  console.log(words);
}
```

While both methods share some similarities, only function declarations define functions that can be used anywhere in the scope where they're defined.

You can call a function that is defined using function declaration before the part of the code where you actually define it:

```javascript
speak();

function speak() {
  console.log('Hello, world!');
}

// DOES NOT RESULT IN ERROR
```

Function expressions, unlike function declarations, must be defined before they are called:

```javascript
speak('hello, world!')

var speak = function (words) {
  console.log(words)
}

// RESULTS IN ERROR:
// TypeError: undefined is not a function
```
