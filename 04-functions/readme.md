# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Functions (3:00)

### Objectives

*After this lesson, students will be able to:*

- Use loops to iterate through arrays
- Describe how parameters and arguments relate to functions
- Create and call a function that accepts parameters to solve a problem
- Return a value from a function using the return keyword
- Define and call functions with argument-dependent return values

### Agenda

| Timing | Topic |
| --- | --- |
| 25 min | Review |
| 25 min | Exercise: Array Iteration |
| 10 min | While Loops |
| 10 min | Exercise: While Loops |
| 10 min | Intro to functions |
| 15 min | Function Declaration |
| 20 min | Exercise: Rolling Dice |
| 15 min | Parameters |
| 15 min | Exercise: Parameterization |
| 15 min | The Return Statement |
| 15 min | Exercise: Return Statement |
| (20 min)* | First-class & Higher-order Functions |
| 5 min | Final Questions & Exit Tickets |

>Note: The content in this lesson can be challenging for students with limited programming experience. Make sure to check for understanding as you go and spend additional time on any of the following sections if necessary.

### Preparation
*Before this lesson, students should be able to:*

- Use conditionals to control program flow
- Differentiate between true, false, 'truth-y', and 'false-y'
- Use Boolean logic (!, &&, ||) to combine and manipulate conditionals

>Note: Last class, we worked on data types, conditional statements, and logical and comparison operators. Check with students to make sure that everyone is comfortable with the materials covered in the last class.

---

## Quiz (10 min)

TODO: Make this

1. What is git?
  a. A program used to interact with a computer without a Graphic User Interface
  b. A version control software used to keep track of the history of a project
  c. A website used to host code repositories
  d. A text editor used by many software developers
2. What command can be used to navigate in the terminal to the home directory?
  a. `cd ~/`
  b. `pwd`
  c. `cd`
  d. Both a and c
3. Which data type would be most appropriate to represent the percent correct on this quiz?
  a. Number
  b. Boolean
  c. Array
  d. String
4. Which data type would be most appropriate to represent whether or not the answer to this question is correct?
  a. Number
  b. Boolean
  c. Array
  d. String
5. Which data type would be most appropriate to represent the text of this question?
  a. Number
  b. Boolean
  c. Array
  d. String
6. Which data type would be most appropriate to represent the list of questions?
  a. Number
  b. Boolean
  c. Array
  d. String
7. Which expression evaluates to `true`
  a. 1 < 1 && 9 > 5
  b. 'Hello' === 'World'
  c. !(true && false)
  d. 1 === '1' && 5 == 5
8. What is the value of the following code: `!![]`
  a. true
  b. []
  c. false
  d. undefined
9. How can we access the last value of the following array? `var a = [1, 2, 3]`
  a. a[2]
  b. a[3]
  c. a[a.length - 1]
  d. b or c
  e. a or c
10. What will the following line of code show if run in node? `[1, [2, 3], 4][1][0]`
  a. 'Syntax error'
  b. 1
  c. 2
  d. 3
  e. 4

---

## Review: Control Flow, Conditionals, Truthiness (10 min)

### Control Flow

Grouping, organizing and weaponizing code
- Dynamic
- Succinct
- Reusable

### Conditionals

Make a decision based on a "condition", or boolean expression

```javascript
if ((day === 'Tuesday' || day === 'Thursday') && (time > 1830 && time < 2130)) {
  console.log('Classtime!')
} else if (day === 'Monday' && (time > 1800 && time < 2000)) {
  console.log('Office Hours');
} else {
  console.log('Go home!');
}
```

### Truthiness

Values can behave like true or false when used in boolean expressions

- `false`
- `0`
- `""` (empty string)
- `NaN`
- `undefined`
- `null`

---

## Review: Loops (5 min)

Loops are used to perform repetitive tasks. For loops are good at counting.

```javascript
for (var i = 0; i < 5; i++) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
```

### Parts of For Loop

- What to do before the loop starts
- When to end the loop
- What to after each loop

```javascript
for (var i = 0; i <= 4; i++) {
	console.log(i);
}
```

---

## Exercise: For Loop Array Iteration (25 min)

--

## For Loop for Array Iteration

Imagine we have an Array of number grades and we want to find the corresponding letter grade for each one.

```javascript
var grades = [87, 95.5, 40, 79, 20];

if (grades[0] >= 90) {
  console.log('A');
} else if (grades[0] >= 80) {
  console.log('B');
}
...
```

This will take a long time to type if we do it one by one. Instead, we can use a loop.

```javascript
var grades = [87, 95.5, 40, 79, 20];

for (var i = 0; i < grades.length; i++) {
  if (grades[i] >= 90) {
    console.log('A');
  } else if (grades[i] >= 80) {
    console.log('B');
  }
  ...
}
```

---

## While Loops (10 min)

`While` is a loop statement that will run **while** a condition is true.

```javascript
var x = 10;

while (x > 0) {
	console.log(x);
	x--;
}
```

--

### While Loop

Any `for` loop can be written as a while loop:

```javascript
for (var i = 0; i <= 4; i++) {
	console.log(i);
}
```

As a while loop:

```javascript
var i = 0;
while (i <= 4) {
	console.log(i);
	i++;
}
```

--

```javascript
var i = 0;
while (i <= 4) {
	console.log(i);
	// i++;
}
```

Note:

Infinite Loop

--

```javascript
var numberOfLoops = 0;
while (Math.random() > 0.2) {
  numberOfLoops++;
}
console.log('Loop ran ' + numberOfLoops + ' times');
```

--

### When to use? While Loop

```javascript
while (c.charAt(0) == " ") {
	c = c.substring(1,c.length);
}
```
---

## Exercise: While Loop (10 min)

---

## Introduction to Functions (10 min)

Control Flow Structure and Data Type

A function is a reusable statement, or a group of reusable statements, that can be called anywhere in the program. This avoids the need to rewrite the same statement over and over. Functions enable the software developer to segment large, unwieldy applications into smaller, more manageable pieces.

A critical component of programming, functions address a key tenet of engineering: Don't Repeat Yourself, or DRY. Our goal is to create programs with as little code as possible, while maintaining complete clarity.

Another important trait of functions is that they are similar to objects or strings. Function can be passed into other functions as an argument, and they can also be used like any other object we've been working with.

---

## Function Declaration (15 min)

Before we call, or "use", a function, we must define it.

__Function Declarations:__
```javascript
function speak() {
  console.log('Hello, world!');
}
```

### Function Declaration Syntax

<img src="img/function.png" style="max-height: 500px" />

A function declaration always has the following:

* A name
* An optional list of parameters (i.e., the names of arguments to be "passed" into the function, or information the function will use); this is defined by the parenthesis before the opening curly brace
* Statements inside the function (the code executed every time the function is called)

In our example above, the function name is `speak`. The parameter is `words`. (Note: multiple parameters would be indicated by a comma-separated list inside the parentheses, such as `(words, num)`.) And the statement is `console.log(words);`

And this makes up a basic function declaration!

### Calling Functions

Calling, or invoking, a function executes the code defined inside this function.

But defining and calling a function is different. A function will not be called when it's defined.

You call a function by using parenthesis after the function's name `()`:

```javascript
function hello() {
  console.log("hello there!")
}

hello();

=> hello there!
```

---

## Exercise: Rolling Dice (20 min)

---

## Parameters (25 min)

If a function did the same thing every time it was called, it wouldn't be a very powerful codebase. We would also have to write a new function for each new feature in order to enable additional behaviors in our application:

```javascript
// Bad idea...
function thanksMark() {
  console.log('thanks, Mark');
}

function thanksObama() {
  console.log('thanks, Obama')
}
```

> __Instructor's Note:__ Ask students why they think writing such specific functions is a bad idea. If no one has an answer, ask what happens to the above program structure if it has 1,000 users. If we have to write 1,000 different functions, is this a scalable and maintainable program?

Parameters remedy this problem by allowing us to call, or invoke, the same function with different values:

```javascript
function sayThanks(name) {
  console.log('Hello ' + name);
}

sayThanks('Mark');
=> 'Hello Mark'

sayThanks('Obama');
=> 'Hello Obama'
```

In this example, the function `sayThanks` is declared with one parameter, `name`. To write functions with **more than one parameter**, use a comma-separated list: `(param1, param2, param3, param4)`. In JavaScript, functions can accept up to 255 parameters!

```javascript
function sum(x, y, z) {
  console.log(x + y + z)
}

sum(1, 2, 3);
=> 6
```

JavaScript is a loosely typed language. Therefore, there is no need to specify the data-type (string, number, etc.) of the function's parameters when writing functions. While this reduces the amount of code you must write, it increases the possibility of type errors, when a value is not of the expected data type. This is because in JavaScript, function definitions do not perform type checking on arguments passed into the functions.

>Note: Parameters vs Arguments. Though often used interchangeably, the terms __parameters__ and __arguments__ have different meanings.

__Parameters__ refers to variables defined in the function's declaration; __arguments__ refers to the actual values passed into the function when the function is called. For example:

```javascript
// Parameter
function doSomething (parameter) {
  // does something
}

// Argument
doSomething(argument)
```
---

Exercise: Parameters

---

## The Return Statement (25 min)

Sometimes we don't want to print to the console or update the DOM; rather, we want to update a variable or even call another function. This requires a `return` statement. When we return something, it ends the function's execution and "spits out" what we are returning. We can then store this returned value in another variable...

```javascript
function sum(x, y) {
  return x + y;
}

var z = sum(3, 4);
=> 7
```
... or pass it to another function:

```javascript
function sum(x, y) {
  return x + y
}

function double(z) {
  return z * 2
}

var num = sum(3, 4)
=> 7
var numDbl = double(num)
=> 14

// This can also be written:
var num = double(sum(3,4))
=> 14
```

Note that the `return` statement will completely stop a function's execution. Any statements following the `return` statement will not be called:

```javascript
function speak (words) {
  return words;

  // The following statements will not run:
  var x = 1;
  var y = 2;
  console.log(x + y)
}
```

By default, JavaScript functions will return an `undefined` value. To test this, use Node to define and run a function __without__ a return value. A `return` value "overwrites" this default value.

---

## Exercise: return statement

---

## Functions as Data Type

There are two qualities that make functions especially powerful in JavaScript:

- First-class values
- Higher order functions

---


## Conclusion (5 min)

Make sure the lesson objectives have been met.

* Explain how you define and call functions using arguments.
