# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Conditionals and Loops (3:00)

## Learning Objectives
*After this lesson, students will be able to:*

- Use if/else conditionals to control program flow based on Boolean (true or false) tests.
- Differentiate among true, false, 'truth-y', and 'false-y'.
- User loops to iterate through Arrays.

---

## Agenda

| Timing | Topic |Description|
| --- | --- | --- |
| 15 min | [Opening](#opening) | Conditional Statements |
| 20 min | [Codealong](#codealong1) | Comparison Operators |
| 15 min | [Codealong](#codealong2)| Truthy and Falsy |
| 20 min | [Codealong](#codealong3)| Boolean/Logical Operators |
| 25 min | [Lab](#practice1) | Independent Practice |
| 25 min | [Codealong & Independent Practice](#codealong4) | Switch Statements |
| 10 min | [Codealong](#codealong5) | While & Do-While |
| 15 min | [Codealong](#codealong6) | Iteration |
| 30 min | [Lab](#practice2) | Fizzbuzz Code Challenge|
| 5 min | [Conclusion](#conclusion) | Final Questions & Exit Tickets |


---

## Preparation
*Before this lesson, students should already be able to:*

- Describe the concept of a "data type" and how it relates to variables.
- Declare, assign to, and manipulate data stored in a variable.
- Create arrays and access values in them.
- Iterate over and manipulate values in an array.

> Note: Last class, we worked on data types, arrays, helper methods, and array iterations. Check with students to make sure that everyone is comfortable with the materials covered in the last class before introducing the new material.

---

## Recap: Data Types (15 min)

| Data Type | Description | Example |
| --- | --- | --- |
| **Strings** | Single words or sentences surrounded by double or single quotes | `"lots of kittens"`, `'lots of kittens'` |
| **Numbers** | Whole numbers, decimals | `42`, `3.14`, `3.0` |
| **Booleans** | Represents either true or false | `true`, `false` |
| **Undefined** | Variable that has yet to assigned | `undefined` |
| **Arrays** | Collections of Data | `[ 'Superman', 'Batman', 'Spider-Man' ]` |

- What are the potential values?
- What operations can be done?
- How are they used in programs?

---

## Review: Boolean and Logical Operators (20 min)

When you feed Boolean values of `true` or `false` into logical operators, they will  return `true` or `false` based on a few rules.

There are two "binary" operators that require two values:

- **AND**, denoted `&&`
- **OR**, denoted `||`

A third "unary" operator requires only one value:

* **NOT**, denoted `!`

### && (AND)

The `&&` operator requires both left and right values to be `true` in order to return `true`:

```javascript
true && true
//=> true
```

Any other combination is false.

```javascript
true && false
//=> false

false && false
//=> false
```

### || (OR)

The `||` operator requires just one of the left or right values to be `true` in order to return true.

```javascript
true || false
//=> true

false || true
//=> true

false || false
//=> false
```

Only `false || false` will return `false`

The `!` takes a value and returns the opposite Boolean value:

```javascript
!(true)
//=> false
```

---

## Comparison Operators (20 min)

### Inequality

[Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) in JavaScript can be made using `<`, `>`, `<=` and `>=`. These can be used for both strings and numbers. This can be either beneficial or frustrating to a developer, since most languages do not implicitly convert strings to numbers the way that JavaScript does.

```javascript
10 > 99999
//=> false

15 >= 15
//=> true

12 < "12"
//=> false

'a' >= 'a'
//=> true
```

### Equality

#### Double-Equals Equality Operator `==`

Equality is a bit more complex. JavaScript provides two ways to verify equality.

When you verify equality using double-equals `==`, JavaScript performs much of the "type coercion" in the background. As we mentioned above, if the operands have a different type (e.g., the number `1` and the string `"1"`), JavaScript will attempt to change the type of both operands in order to check if they are equal. This means that expressions will often return equal more easily than if we were stricter about what things were equivalent. Some examples:

```javascript
"dog" == "dog";
//=> true

1 == true;
//=> true
```

#### Triple-Equals Equality Operator `===`

To avoid type coercion and to measure equality more strictly, **use the triple-equals operator**. Because `===` more truly measures actual equality, we should always use `===` instead of `==`, which is a legacy of the early days of JavaScript when people thought it might be useful to have an operator that does type coercion before checking equality, but that's pretty much never a good idea as it defeats the whole purpose of having data types.

> **Note:** "Sameness" and "equality" have various definitions, which can make the differentiation somewhat fuzzy. They can also differ by programming language. Because you'll often be measuring whether two things are equal, you should carefully investigate the way this works.

Some examples:

```javascript
1 === true;
//=> false

'10' === 10
//=> false

true === true;
//=> true

"hello" === "hello"
//=> true
```

However, there are some situations when `===` does not behave as we expect it to, for example when empty objects or arrays are involved:

```javascript
[] === []
//=> false

[1,7] === [1,7]
//=> false
```

**Explanation**

The examples in the second set fail equality tests because both **object literals** and **arrays** are objects, not just "primitive" values like strings, numbers, and Booleans. Objects and arrays are complex collections of values, and when we refer to them, we're actually referencing where they live in memory. That's why we call them "reference types." Strings and numbers are "value types."

What does this all mean? When we attempt to compare two objects or arrays with `===`, JavaScript doesn't care if they look like similar collections. It only compares whether or not they are the exact same object in memory. In each case above, checking for equality is actually comparing two objects that are in two different places in memory. They're not exactly "the same."

#### != and !==

There are also `!=` and `!==` operators, which are the negative versions of `==` and `===`. And again, we should always use `!==` and `===`, because they are more precise than `!=` and `==`.

---

## Control Flow

We've now talked about Data Types and Operators. The next thing we'll talk about on our quest to understand the parts of JavaScript is Control Flow and Control Flow Structures.

### What is Control Flow?

All of the JavaScript we've looked at so far is executed sequentially, line by line. Control Flow Structures can change this and allow our programs to run in a dynamic order based on the conditions under which the program is run.

- **Conditionals**
- **Loops**
- Switch Statements
- Exception Handling
- Async

---

## Conditional Statements (15 min)

Conditional statements enable us to essentially decide which blocks of code to execute and which to skip, based on the results of tests that we run. JavaScript supports two conditional statements: `if`...`else` and `switch`. We'll start off with the 'if'...'else' statement, which uses Boolean (true or false) tests.

### If/Else Statement

```
if (EXPRESSION) {
  CODE
}
```  

Run the `CODE` block if `EXPRESSION` is `true`

```javascript
if (1 > 0) {
  console.log("hi");
}
//=> hi

if (true) {
  console.log("hi");
}
//=> hi
```

You can also add an optional `else` clause, to run if `EXPRESSION` is _not_ `true`:

```
if (EXPRESSION) {
  CODE
} else {
  CODE
}
```

```javascript
if (0 > 1) {
  console.log("hi");
} else {
  console.log("bye");
}
//=> bye

if (false) {
  console.log("hi");
} else {
  console.log("bye");
}
```

When you need to test more than one case, you may use `else if`:

```
if (EXPRESSION) {
  CODE
} else if (EXPRESSION) {
  CODE
} else {
  CODE
}
```

```javascript
var name = "kittens";
if (name === "puppies") {
  console.log('woof');
} else if (name === "kittens") {
  console.log('meow');
} else {
  console.log('?');
}
//=> meow
```

### Conditionals: How are they used?

react-input-enhancements
```javascript
if (typeof(children) === 'function') {
  return children(inputProps, { matchingText, value });
} else {
  var input = Children.only(children);
  return React.cloneElement(input, { ...inputProps, ...input.props });
}
```

### Ternary Operators

JavaScript has a ternary operator for conditional expressions. The ternary operator is basically a concise "if-else” in one line, except that it not only executes blocks of code, it also returns a value:

```javascript
var age = 12;
//=> undefined

var allowed = (age > 18) ? "yes" : "no";
//=> undefined

allowed
//=> "no"
```

```javascript
var age = 12;
//=> undefined

var allowed;
if (age > 18) {
  allowed = "yes";
} else {
  allowed = "no";
}

allowed
//=> "no"
```

### Ternaries: How are they used?

```javascript
var value = (typeof(props.value) === 'undefined') ? props.defaultValue : props.value
```

---

## [Exercise: Conditionals](starter-code/gradely.js) (25 min)

---

## Truthy and Falsey (15 min)

JavaScript not only has `true` and `false`, but it also has `truthy` and `falsey`. `truthy` values are values that behave like `true` when used in a conditional. Likewise, `falsey` values are those that behave like `false` in a conditional.

All of the following become false when converted to a Boolean:

- `false`
- `0`
- `""` (empty string)
- `NaN`
- `undefined`
- `null`

All other values become true when converted to a Boolean.

### Truthiness Eye Test

```javascript
var myVariable;
if (myVariable) {
  console.log("A");
} else {
  console.log("B");
}
```

```javascript
var myVariable = -1;
if (myVariable) {
  console.log("A");
} else {
  console.log("B");
}
```

```javascript
var myVariable = "false";
if (myVariable) {
  console.log("A");
} else {
  console.log("B");
}
```

```javascript
var myVariable = 0;
if (myVariable) {
  console.log("A");
} else {
  console.log("B");
}
```

```javascript
var myVariable = [];
if (myVariable) {
  console.log("A");
} else {
  console.log("B");
}
```

*Find more on truthy and falsey values [here](http://adripofjavascript.com/blog/drips/truthy-and-falsy-values-in-javascript.html)*

---

## Review: Arrays

### Array Index

<img src="../02-data-types/img/array_index_diagram.png" style="max-height: 500px" />

### Array Length

```javascript
var friends = ["Moe", "Larry", "Curly"];

friends.length
// 3
```

### Array Insertion

```javascript
var a = ["dog", "cat", "hen"];
a[2] = "fox";
// ["dog", "cat", "fox"]
```

### Getting Data from an Array

```javascript
var a = ["dog", "cat", "hen"];
// undefined

a[1];
// "cat"
```

### Array Methods

Arrays come with a number of methods to help us work with them:

- `a.pop()` - Removes and returns the last item.

- `a.push(item1, ..., itemN)` - Adds one or more items to the end.

- `a.reverse()` - Reverses the array.

- `a.join()` - Concatenates elements in a array together into a string

---

## [Exercise: Arrays](starter-code/decoder.js)

---

## Loops (15 min)

Looping or iterating is a way of incrementally repeating a task. We use loops to perform repetitive behavior in our code without repeating ourselves. Often, loops, especially `for` loops are used to operate on each element in an Array.

### For loop

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

Notice the placement of the comma and semi-colons.

### Anatomy of For Loop

- What to do before the loop starts
- When to end the loop
- What to after each loop

```javascript
for (var i = 0; i <= 4; i++) {
	console.log(i);
}
```

### For loop for iteration

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

### For Loop: How is it used?

flatpickr.js
```javascript
for (let i = 0; i < self.config.disable.length; i++){

	d = self.config.disable[i];

	if (d instanceof Date || typeof d === 'string')
		return uDate(d,true).getTime() == check_date.getTime();

	if (check_date >= uDate(d.from) && check_date <= uDate(d.to))
		return true;

}
```

### While loop

`While` is a loop statement that will run **while** a condition is true.

```javascript
var x = 10;

while (x > 0) {
	console.log(x);
	x--;
}
```

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

### Infinite Loop

```javascript
var i = 0;
while (i <= 4) {
	console.log(i);
	// i++;
}
```

### While loop: How is it used?

webpack
```javascript
var sum = 0;
var i = 0;
var args = arguments;
var l = args.length;

while (i < l) {
  sum += args[i++];
}
```

---

## [Exercise: Loops](starter-code/fizzbuzz.js) (30 min)

Relying on your new-found knowledge of loops and if/else statements, incrementally build the common Fizz buzz loop. Fizz buzz is a math game designed to teach the concept of division. Create a program that will iterate through numbers 1 to 101 and log each number in the console.

>Hint: Read about [the Remainder Operator on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) and figure out how to use it to simplify this problem.

Open the [fizzbuzz.js](starter-code/fizzbuzz.js) to get started.

> Note: Guide students with solutions below as they complete each step.

##### Step 1:

Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100:

```javascript
for (var num = 1; num <= 100; num++) {
  console.log(num);
}
```

##### Step 2:

Add an if/else statement that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value:

```javascript
for (var num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(num)
  }
}
```

##### Step 3:

Add an `else if` clause that logs the string `"buzz"` if the value being iterated over is divisible by `5`:

```javascript
for (var num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('fizz');
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(num)
  }
}
```

##### Step 4:

Add an additional `else if` clause that logs the string `"fizzbuzz"` if the value being iterated over is divisible by both `3` and `5`. __Note:__ this step is intentionally broken! Place the new `else if` __below__ the evaluations for `fizz` and `buzz`; after running the code, and experiencing the undesired results, prompt the students as to why the `fizzbuzz` evaluation never occurred.

```javascript
for (var num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('fizz');
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else if (num % 15 === 0) {
    console.log('fizzbuzz')
  } else {
    console.log(num)
  }
}
```

##### Step 5:

Fix the above code to evaluate the `fizzbuzz` condition:

```javascript
for (var num = 1; num <= 100; num++) {
  if (num % 15 === 0) {
    console.log('fizzbuzz');
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else if (num % 3 === 0) {
    console.log('fizz')
  } else {
    console.log(num)
  }
}
```

<a name="conclusion"></a>
## Conclusion (5 min)

These are some of the foundational tools you’ll use in many of your applications. You might need to study the exact syntax before it’s committed to your memory, but it's important that you remember these core "control flow" concepts, because every programming language you encounter will involve them.

## Review

Make sure the lesson objectives have been met.

* Be able to explain if/else and switch statements as well as use cases.
* Differentiate between true, false, 'truthy', and 'falsey'.

## Assignment 2

* **99 Bottles of Beer** (bottles.js)
  - Write a script that logs to the console the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
  - Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").
* **Random Address Generator** (address.js)
  - Write a script that can generate random addresses
  - As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
  - Your script should randomly select one item from each of these arrays and then use them to construct a random address
  - Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
  - `node random-address.js`
  - `=> 34578 Dolphin Street, Wonka NY, 44506`
* [Submit bottles.js and address.js to Dropbox](https://www.dropbox.com/request/69D3o6xL6lItexh8dxsX)
* [Chapter 2: Program Structure, Eloquent JavaScript](http://eloquentjavascript.net/02_program_structure.html)
* [Chapter 3: Functions, Eloquent JavaScript](http://eloquentjavascript.net/03_functions.html)

**Due Monday, June 27**
