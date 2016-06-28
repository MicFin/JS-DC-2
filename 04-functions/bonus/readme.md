# Class 04 Bonus Material

## 1. do while Loop

The only difference between a `while` loop and a `do while` loop is that a `do while` loop is guaranteed to run at least once. In a `while` loop, if the condition is false when the loop starts, it will never run; in a `do while` loop it will run once and stop.

```javascript
while (false) {
  console.log('this will never run');
}

do {
  console.log('this will run once');
} while (false);
```

### Exercise: Do While

1. Convert the `fuzzbizz` loop from a `while` loop to a `do while` loop.

2. Can you think of a situation in which a `do while` loop would be needed?

---

## 2. Function expressions

__Function Expressions:__
```javascript
var speak = function (words) {
  console.log(words);
}
```

vs.

__Function Declaration:__
```javascript
function speak(words) {
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

### Exercise: Function Expressions

1. Convert the `dice` exercise to use function expressions stored in a variable.

2. Why might function expressions be useful?

---

## 3. The `arguments` variable

Every function has access to an `arguments` array with all of the passed in arguments.

This `arguments` array is populated even if no parameters are defined on the function.

```javascript
function printArguments() {
  console.log(arguments[0] + arguments[1]);
}

printArguments('hello ', 'world');
// 'hello world'
```

We can use this to see how many arguments were actually passed in:

```javascript
function numberOfArguments() {
  console.log(arguments.length);
}

numberOfArguments('a', 'b', 'c');
// 3
```

### Exercise: Functions and `arguments`

1. Do the functions bonus exercise in the starter code.
