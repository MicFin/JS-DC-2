<img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/5225/JS-logo-official.png" style="max-width: 100px; border: none; box-shadow: none" />
## Class 02: Data Types

- Describe the concept of a "data type" and how it relates to variables.
- Declare, assign to, and manipulate data stored in a variable.
- Create arrays and access values in them.

---

## Agenda

| Timing | Topic |
| --- | --- |
| 15 min | Recap: Terminal, Git, Node |
| 15 min | Variables |
| 10 min | What is a Data Type?  |
| 20 min | Data Types |
| 5 min  | Break |
| 30 min | Data Types (Contd) |

--

| Timing | Topic |
| --- | --- |
| 20 min | Exercise: Data Types |
| 10 min | Intro to Arrays |
| 5 min | Break |
| 10 min | Working with Arrays |
| 20 min | Exercise: Array Basics |
| 20 min | Array Methods |
| 20 min | Exercise: Decoder |
| 5 min | Final Questions and Exit Tickets |

---

<img src="img/peake.jpg" style="max-height: 500px" />

---

[https://github.com/ga-students/JS-DC-2](https://github.com/ga-students/JS-DC-2)

---

## Recap: Terminal, Git, Node

--

### Terminal

- Interact with your computer:
    - Make directories
    - Copy or move files
    - Open programs (Sublime)
    - Use git, node, other tools
    - Fight hackers!

```bash
tail -n100 access_log | grep "/customer/" | grep "1\" 302" | awk '{print $7}' | uniq -c | sort | head
```

--

#### `cp` command

Copy files or directories

```bash
cp <source file> <destination>
```

--

### Git

--

### Node

- Running a server (backend)
- Running "scripts"
- Two ways to run:
    - Interactive mode `node`
    - File mode `node index.js`

---

## Variables

--

### Variable Declaration

```javascript
var a;
// undefined
```

--

### Variable Assignment

```javascript
var myNumber = 47;
```

--

### Variable Reassignment

```javascript
var myNumber = 47;

// Reassignment
myNumber = 50;
```

--

### BEST PRACTICE: Variable naming

- Start with lower case letter
- Use "camel case" casing
- Names should be descriptive

--

### Assignment Operators

```javascript
var x = 1;
// 1

x = x + 1;
x += 1;
```

--

### What do we store in these variables?

---

## What is a Data Type?

A type defines:
- Potential values
- Operations that can be used on those values

--

| Data Type | Description | Example |
| --- | --- | --- |
| **Strings** | Single words or sentences surrounded by double or single quotes | `"lots of kittens"`, `'lots of kittens'` |
| **Numbers** | Whole numbers, decimals | `42`, `3.14`, `3.0` |
| **Booleans** | Represents either true or false | `true`, `false` |
| **Undefined** | Variable that has yet to assigned | `undefined` |
| **Arrays** | Collections of Data | `[ 'Superman', 'Batman', 'Spider-Man' ]` |

--

| Data Type | Description | Example |
| --- | --- | --- |
| Null | Absence of value | `null` |
| Objects | Properties and values | `{ name: 'jacob' }` |

---

## Datatypes

--

### Numbers

Numbers are divided into two classes or objects:

* Integers (a.k.a. "whole numbers")

```javascript
 ..., -1, 0, 2, 3, 4, 5, ...
```

* Floats (or Decimal numbers)

```javascript
 2.718, 3.14, 0.5, 0.25, etc.
```

--

#### Number Oddities

```javascript
0.1 + 0.2
// 0.30000000000000004
```

Note:
- All numbers stored as double-precision 64-bit format IEEE 754 values
- In JavaScript, these data points are the same data **type**—which JavaScript calls *Numbers*-so don't be surprised when `typeof` doesn't return 'float' and 'integer.'

--

#### Arithmetic Operators

```javascript
1 + 2
// 3

2 - 5
// -3

5 / 2
// 2.5

6 * 2
// 12

10 % 2
// 0
```

--

#### Special Number Operations

The JavaScript `Math` library to do more advanced math.

--

##### `Math.pow`

```javascript
// 3^2 becomes
Math.pow(3,2)
// 9
// 2^4 becomes
Math.pow(2,4)
// 16
```

--

##### Taking a square root

```javascript
// √(4) becomes
Math.sqrt(4)
// 2
```

--

##### `Math.random`

```javascript
// The following only returns a random decimal
Math.random()
// 0.229375290430
```

--

##### `Math.random`

How might we get a number between 0 and 10?

When could random numbers be useful?

--

##### Rounding

```javascript
// Remove the decimal
Math.ceil(3.14)
// 4
Math.floor(3.9999)
// 3
```

--

#### Numbers: Used for?

- Scores
- Age
- Currency

--

From d3 open source project, for calculating force during a collision:
```javascript
var data = quad.data, rj = quad.r, r = ri + rj;
if (data) {
  if (data.index > i) {
    var x = xi - data.x - data.vx;
    var y = yi - data.y - data.vy;
    var l = x * x + y * y;
    if (l < r * r) {
      if (x === 0) x = jiggle(), l += x * x;
      if (y === 0) y = jiggle(), l += y * y;
      l = (r - (l = Math.sqrt(l))) / l * strength;
      node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
      node.vy += (y *= l) * r;
      data.vx -= x * (r = 1 - r);
      data.vy -= y * r;
    }
  }
  return;
}
```

--

### Strings

Textual Data

--

### Strings

Use either single or double quotes

```javascript
"John"
'Jane'
"123"
```

--

### Strings

Made up of characters.

```javascript
'Hello World!'
```

How many characters are in this String?

--

#### Concatenation

When working with Strings, the "+" operator means concatenation. Concatenation is combining Strings
into a larger String.

```javascript
'Hello ' + 'World'
// 'Hello World'

'DC ' + 'JS ' +'2'
// 'DC JS 2'
```

--

#### Concatenation

```javascript
var firstName = 'Jacob';
var lastName = 'Friedmann';

var fullName = firstName + ' ' + lastName;
```

--

#### Concatenation

If a String is on either side of a "+" sign, it will mean concatenation:

```javascript
'I have ' + 10 + ' cats.'
// 'I have 10 cats.'

20 + 16
// 36

20 + '16'
// '2016'
```

--

#### Empty String

A String with no characters in it.

```javascript
''

'Hello' + '' + '' + '' + ''
// 'Hello'
```

--

#### Case

We can capitalize or lower case Strings if we need to.

```javascript
'hello'.toUpperCase();
// HELLO

var a = 'wOrLd';
a.toLowerCase();
// world
```

--

#### Strings: Used for?

- Names
- Content: blog posts, comments, etc
- User input

--

from places.js open source project, error messages
```javascript
var errors = {
  multiContainers: "Algolia Places: 'container' must point to a single <input> element.",
  badContainer: "Algolia Places: 'container' must point to an <input> element."
};
```

---

## Break

---

## Data Types Continued

--

### Booleans

`true` and `false`

Note:

- Named after George Boole, creator of "boolean algebra", the root of formal logic.

--

#### Negation operator

`!` in front of a boolean value will negate it (make it opposite).

```javascript
!true
// false
```

Note:
Read as "not".

--

#### Logical Operators

--

##### `&&` (and) Operator

Both sides must be true

```javascript
true && true
// true

true && false
// false
```

--

##### `||` (or) operator

One side must be true

```javascript
true || false
// true

false || false
// false
```

--

##### Logical Operators

We can chain operators

```javascript
true && true && false
// false

false || false || false || true
// true
```

--

### Today is Tuesday && We are in class

--

### Today is Tuesday && We are in class
### true && true
### true

--

### Today is Tuesday && !The year is 2020

--

### Today is Tuesday && !The year is 2020
### true && !false
### true && true
### true

--

### !Today is Tuesday || (The year is 2016 && It is morning)

--

### !Today is Tuesday || (The year is 2016 && It is morning)
### !true || (true && false)
### false || false
### false

--

#### Booleans: Used for?

- on or off
- is the answer right or wrong?
- settings (enabled or disabled)

--

from AlgorithmVisualizer open source library, defining settings:
```javascript
editor.setOptions({
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true
});
```

--

### Undefined

**Undefined** is the value a variable gets before we assign it a value.

```javascript
var a;

a
// undefined
```

--

### Undefined

We can also assign a value of undefined.

```javascript
var a = 22;

a
// 22

a = undefined;

a
// undefined
```

--

### Type Conversion

Number to String

```javascript
var a = 1;
a.toString();
// '1'

var b = true;

b.toString();
// 'true'
```

--

### Type Conversion

String to Number

```javascript
parseInt('42');
// 42

parseFloat('3.1415');
// 3.1415
```

--

#### When will this be useful?

User input is usually in the form of a String, so if we want a numerical value we'll need to convert it.

--

### `typeof( )`

See what Data Type a value is.

```javascript
typeof(37);
// 'number'

typeof(3.1415);
// 'number'

typeof(true);
// 'boolean'

typeof('hello world');
// 'string'
```

--

### `typeof( )`

What is `typeof(typeof(3))`?

--

#### When will this be useful?

--

#### What type is this variable?

```javascript
a
```

--

`typeof` can assist when we don't know the type of a variable when we're writing the code.

```javascript

var myNumber = 47;

myNumber = 'Haha sucker';

myNumber / 10
// womp womp
```

Note:

JavaScript doesn't mandate that a variable stay the same type. This can be confusing, especially when there are many developers working on the same thing.

---

## Exercise: Datatypes

<img src="img/distance.png" style="max-height: 250px" />

<img src="img/volume.png" style="max-height: 250px" />

---

## Introduction to Arrays

--

### Array

A list of values.

--

### Array

```javascript
var friends = ['Moe', 'Larry', 'Curly'];
// ['Moe', 'Larry', 'Curly']
```

--

### Index

<img src="img/array_index_diagram.png" style="max-height: 500px" />

--

### Index

An Index is like an address-it's how we find elements in an array


```javascript
var friends = ['Moe', 'Larry', 'Curly'];

friends[0];
// 'Moe'
```

--

### Index

Indices start at zero

```javascript
// First friend
var firstFriend = friends[0];
// 'Moe'

// Get the last friend
var lastFriend = friends[2]
// 'Curly'
```

--

### Length

The "length" of an Array is the number of elements inside of the Array.

```javascript
friends.length
// 3
```

--

### Length

It will always be one greater than the last index in the array.

```javascript
var lastIndex = friends.length - 1;
var lastFriend = friends[lastIndex];
// 'Curly'
```

---

## Break

---

## Working with Arrays

--

### Inserting values into an Array

```javascript
var a = ["dog", "cat", "hen"];
a[2] = "fox";
// ["dog", "cat", "fox"]
```

--

### Inserting values into an Array

```javascript
a[100] = "fox";
```

Note:

**Remember**: the length of the array is one more than the highest index.

--

### Getting Data from an Array

If you query a nonexistent array index, the result will be `undefined`:

```javascript
var a = ["dog", "cat", "hen"];
// undefined

a[1];
// "cat"
```

--

### Getting Data from an Array

```javascript
a[90];
```

---

## Exercise: Array Basics

---

## Array Methods

Arrays come with a number of methods to help us work with them:

- `a.pop()` - Removes and returns the last item.

- `a.push(item1, ..., itemN)` - Adds one or more items to the end.

- `a.reverse()` - Reverses the array.

- `a.join()` - Concatenates elements in a array together into a string

Note:
You will likely not remember _every_ method. Explore the [full documentation for array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and other helper methods provided for particular objects.

--

### `a.pop()`

```javascript
var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Pluto'];

planets.pop();

planets
// ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus']
```

--

### `a.push()`

```javascript
planets.push('Planet 9');

planets
// ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Planet 9']
```

--

### `a.reverse()`

```javascript
var name = ['b', 'o', 'c', 'a', 'J'];

name.reverse();
// ['J', 'a', 'c', 'o', 'b']
```

--

### `a.join()`

```javascript
name.join();
// 'J,a,c,o,b'

name.join('');
// 'Jacob'
```

---

## Exercise: Decoder

---

## [Exit Ticket! (Class 3)](http://goo.gl/forms/KzVZ9fuo2YYw5WIB3)

---

# Goodnight :-)
