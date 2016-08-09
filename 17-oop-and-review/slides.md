# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
## OOP and Review

### Objectives

- Refactor a project to put OOP into practice
- Understand, deeply, fundamental JS concepts

--

### Agenda

| Timing | Topic |
| --- | --- |
| 45 min | Review: Intro to Exercise |
| 75 min | OOP Exercise |
| 50 min | More Review |
| 10 min | Final Questions & Exit Tickets |

---

## OOP Exercise

Note:

The objective of this exercise it to convert the starter code from using plain objects to using classes and OOP structures (constructors, prototypes). We're going to do a bit of review by looking through the starter code:

1. Look over the `makeCard` function. When we run this function, the return value will be an object. What class will that object be an `instanceof`? (it will be an `Object` since we are using an Object "literal").

2. We've identified that this is a plain Object. Ask students: Could we rewrite the `makeCard` function to use the `Object` constructor instead of an Object literal? Yes, it would look something like this:

```js
function makeCard(value, suit) {
  var card = new Object();
  card.value = value;
  card.suit = suit;
  card.getValue = function() {
    return values[this.value];
  };
  card.getSuit = function() {
    return suits[this.suit];
  };
  ...
  return card;
}
```

3. Next, look at the `values` and `suits` arrays. Ask what the scope of these two variables is. Ask the students how we could restrict access to those two arrays to only the card's functions so that they don't accidentally get changed. Answer: move those arrays into the closure of `makeCard`.

```js
function makeCard(value, suit) {
  var values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

  return {
    value: value,
    suit: suit,
    getValue: function() {
      return values[this.value];
    },
    getSuit: function() {
      return suits[this.suit];
    },
    getName: function() {
      return this.getValue() + ' of ' + this.getSuit();
    },
    getImage: function() {
      return 'img/' + this.getValue().toLowerCase() + '_of_' + this.getSuit().toLowerCase() + '.png';
    }
  };
}
```

Now functions like `getSuit` can access the arrays, but they are not accessible in the global scope.

4. Look at `this` in different card functions. Ask students what this is. The answer is that this is a trick question: We do not know what `this` is until the function is called. We are making an assumption that `this` is a card object, but that assumption depends an a card object being to the left of the dot when the function is called.

5. Now, explain that the goal of the exercise is to convert each of the three `make` functions into proper classes and then make the model an instance of the Game class instead of a plain object. Check in periodically to ensure people are making progress; use judgment to determine whether parts need to be done together.

---

## Review

Note:
We'll use the code from the exercise as a jumping off point to review some concepts from throughout the course. How it will work is we'll look at some code from the exercise, talk about it and then do an exercise that uses the concept.

--

### Data Types

What are the JavaScript data types?

--

#### Data Types

- Number
- String
- Boolean
- Undefined
- Null
- Object

What is missing here?

--

#### Data Types

Arrays and Functions are actually types of Objects!

--

#### typeof

If we are ever unsure of the type of a variable, we can use `typeof` to check.

Note:

Look at the line of code in the exercise that has `typeof this.playerCard === 'object'`. Why do we need to make that check? (Because there are times when `this.playerCard` is undefined).

--

### Control Flow Structures

What data flow structures have we identified in JavaScript?

--

#### Control Flow Structures

- Conditionals (if/else if/else, ternaries, switch statements)
- Loops (for, while, do while, forEach)
- Functions

--

### Conditionals

When using a conditional, what are we checking for?

--

#### Truthiness

A conditional asks: Does the expression evaluate to `true` or to a value that is "truthy"?

--

#### Truthiness

What values are not "truthy"?

--

#### Falsy

- `undefined`
- `""`
- `null`
- `0`
- `false`
- `NaN`

--

#### Ternary

```js
var cardName = typeof this.playerCard === 'object' ? this.playerCard.getName() : undefined;
```

Note:
We can refactor this based on the fact that every Object is truthy and undefined is falsy:

```js
var cardName = this.playerCard ? this.playerCard.getName() : undefined;
```

--

#### Exercise: Conditionals

Note:

Exercises 1-3

--

### Loops

--

#### For Loop

What are the three parts of a `for` loop?

```js
for (var i = 10; i >= 0; i--) {

}
```

--

#### For Loop

- What to do before
- Keep going as long as this is true
- What to do after each loop

--

#### Nested For Loop

```js
for (var s = 0; s < 4; s++) {
  for (var v = 0; v < 13; v++) {
    cards.push(makeCard(v, s));
  }
}
```

How many times will the middle statement be run?

--

#### Exercise: Nested for loop

Note:
Number 4

--

### Functions

--

#### Functions

- Input: parameters
- Output: `return` value

```js
function myFunction(parameter1, parameter2) {
  var returnValue = parameter1 + parameter2;
  return returnValue;
}
```

--

#### Functions

We can use functions as values. Anonymous functions remove the name:

```js
var myFunction = function (parameter1, parameter2) {
  var returnValue = parameter1 + parameter2;
  return returnValue;
};
```

--

#### Functions Are First-Class

What does this mean?

--

#### Functions Are First-Class

They can be:
- Stored in variables, objects, arrays
- Used as arguments to another (higher-order) function
- Can be returned from another (higher-order) function

--

#### Exercise: Functions
TODO

--

### Events

--

#### Events

How do we respond to user events?

--

#### Events

Attach event listeners using jQuery's `.on` function

```js
$('#myButton').on('click', respond);
```

--

#### Events

What is the difference between directly bound and delegated event listeners?

--

#### Events

- *Directly bound* event listeners attach to a DOM element to listen for events on that same element
- *Delegated* event listeners attach to a DOM element to listen for events from a child element

--

#### Events

When do you use one over the other?

--

#### Events

We need to use delegated event listeners when elements are being added dynamically.

--

#### Exercise: Events
TODO

--

### jQuery Functions

--

#### jQuery Functions

What is the difference between the following two statements?

```js
$('#myDiv').html('');
$('#myDiv').html();
```

Note:

The former is setting the inner HTML, the latter is retrieving it.

---

## [Exit Ticket! (Class 18)](http://goo.gl/forms/KzVZ9fuo2YYw5WIB3)

---

# Goodnight :-)
