# Class 03 Bonus Material

## 1. Primitives vs. Objects

Data types in JavaScript are categorized into two categories: primitive types and Object types.

### Primitive types

Primitives are low level data types. Primitives are also **immutable** which means that the values cannot be changed.

- Number
- String
- Boolean
- undefined
- null

### Object types

All other types in JavaScript are Object types, which means, underneath it all, these types are actually Objects (which we haven't talked about yet). Object types are complex types, which are **mutable** (can be modified).

- Object
- Array
- Function
- Date
- etc

---

## 2. Equality of Non-Primative types

We know how triple equals (`===`) works with primitive types - it checks that for both the same type and value.

When working with Object types (like Array), this is not quite the same. For Object types, it actually looks to see if the two things are referring to the same "instance". To do this, triple equals checks where each thing is stored in memory. If the location is the same, the equality evaluates to `true`.

This can cause some, seemingly, odd behavior:

```javascript
[] === []
// false

[1] === [1]
// false
```

However:

```javascript
var a = [];
var b = a;

a === b
// true
```

In the last example, the expression is `true` because both variables reference the same Array.

**Can you predict the output of the following? Test your predictions by using node.**

```javascript

// 1.
var a = [1, 2, 3];
if (a === [1, 2, 3]) {
  console.log('a');
} else {
  console.log('b');
}

// 2.
var a = [1, 2, 3];
var b = a;
a = [1, 2, 3];
if (a === b) {
  console.log(a);
} else {
  console.log(b);
}

// 3.
var a = ['hello', 'world'];
if (a === a) {
  console.log(a);
} else {
  console.log(b);
}
```

---

## 2. Establishing Truthiness

Truthiness is used whenever JavaScript uses boolean operators. This includes the `!` negation operator. Negating a value, any value, and then negating it again will reveal whether or not a value is truthy.

So if you ever forget if a value is truthy or not, simply open node, prefix it with `!!` and see!

```javascript
!!1
//=> true

!!0
//=> false
```

**Use node in interactive mode to test more values**

---

## 4. Switch Statements

Now let's look at switch statements. These conditional statements can be used for multiple branches based on a number or string:

```javascript
var food = "apple";

switch (food) {
  case 'pear':
    console.log("I like pears");
    break;
  case 'apple':
    console.log("I like apples");
    break;
  default:
    console.log("No favorite");
}
//=> I like apples
```

In this case, the `switch` statement compares `food` to each of the cases (`pear` and `apple`) and evaluates the expressions beneath them if there is a match. It uses `===` to evaluate equality.

The default clause is optional.

### switch

After the switch, we put the variable we want to compare:

```javascript
switch(variableToCompare) {

}
```

We then follow that with a block statement.

### case

Inside the switch statements block, each case is a value to compare the value to. If it matches that case, run the code under that case.

```javascript
switch(variableToCompare) {
  case 'valueToCompare':
    //code to run if value match
}
```

### break

After the case statement code runs, we use the `break` keyword to end execution of the switch statement.

```javascript
switch(variableToCompare) {
  case 'valueToCompare':
    //code to run if value match
    //when we're done with this case, we break
    break;
  case 'anotherValueToCompare'
    ...
}
```

### fall-through

`break` is actually an optional part of a switch statement. Without it, we can create a case for multiple values.

```javascript
switch(variableToCompare) {
  case 'valueToCompare':
  case 'anotherValueToCompare'
    // This code runs for either of the above values
    ...
}
```

### default

We can also provide a `default` case to run in the case that all the other cases do not match.

```javascript
switch(variableToCompare) {
  case 'valueToCompare':
    //code to run if value match
    //when we're done with this case, we break
    break;
  case 'anotherValueToCompare'
    // code for this case
    break;
  default:
    console.log('no match');
}
```

**Add to gradely.js a switch statement that compares each letter grade and logs the appropriate affirmation:
A - 'great job!!', B - 'very nice!', C - 'good work', D - "You'll get it next time", F - 'You tried'**  
