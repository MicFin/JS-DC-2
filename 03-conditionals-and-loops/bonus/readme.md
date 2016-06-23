
**Note**: It is **not** recommended to assign variables within a conditional expression because that will assign a value to the variable, as seen below:

```javascript
student = "Jamie";
//=> "Jamie"
```

The expression above will return the value shown on the second line. So if you assign a truthy value inside a conditional statement, this condition will always be true; if you assign an undefined value, the conditional statement will be false (undefined = falsey). Another potential issue is that it can be confused with equality (`===`). The example below illustrates WHAT NOT TO DO:

```javascript
if (x = 3) {
    console.log("boo");
}
```

There is a simple way of verifying the 'truthyness' or 'falseyness' of a value. When you add `!` in front of a value, the returned value will be the inverse of the value in a Boolean. So if you add two `!` then you'll get the Boolean value of the original one:

```javascript
!!1
//=> true

!!0
//=> false

!!-1
//=> true

!![]
//=> true

!!{}
//=> true

!!null
//=> false

!!""
//=> false
```

<a name="codealong4"></a>
## Switch Statements (25 min)

Now let's look at switch statements. These conditional statements can be used for multiple branches based on a number or string:

```javascript
var food = "apple";

switch(food) {
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

## Switch Statement Usage

>To illustrate why programmers implement a switch statement—as opposed to if/else logic—compare these two approaches with the students.

#### Part 1: Construct If/Else Conditionals

Create an if/else statement that returns a string, such as "Awesome Job" if the user gets a grade of “A” or "Bad Job" if they get an "F." Console.log a string for each letter grade.

```javascript

var grade = 'C'

if (grade === 'A') {
  console.log('Awesome job')
} else if (grade === 'B') {
  console.log('Good job')
} else if (grade === 'C') {
  console.log('Okay job')
} else if (grade === 'D') {
  console.log('Not so good job')
} else if (grade === 'F') {
  console.log('Bad job')
} else {
  console.log('Unexpected grade value entered')
}

```

#### Part 2: Construct Similar Logic Using a Switch Statement

Using the if/else statement from above, convert it into a switch statement.

>Ask students to do this exercise individually.

```javascript
var grade = 'C'

switch (grade) {
  case 'A':
    console.log('Awesome job')
    break
  case 'B':
    console.log('Good job')
    break
  case 'C':
    console.log('Okay job')
    break
  case 'D':
    console.log('Not so good job')
    break
  case 'F':
    console.log('Bad job')
    break
  default:
    console.log('Unexpected grade value entered')
}

```

#### Part 3: Which is Faster?

>Note: Prompt students to answer which format is faster. Be sure to elaborate on the number of computations run by each of the approaches. For example, when evaluating for `grade = 'C'` using the if/else approach, the condition (`grade === 'x'`) is evaluated three times. What if the if/else statement had 10 conditions? 100? How would this impact the speed of the program? Please see ['Writing Efficient JavaScript'](http://archive.oreilly.com/pub/a/server-administration/excerpts/even-faster-websites/writing-efficient-javascript.html) for more details.

#### Part 4: Intentionally `Break` the Switch Statement

As `break` statements play a major role in switch statements, rewrite the switch statement from Part 2 without any `break`'s:

```javascript
var grade = 'C'

switch (grade) {
  case 'A':
    console.log('Awesome job')
  case 'B':
    console.log('Good job')
  case 'C':
    console.log('Okay job')
  case 'D':
    console.log('Not so good job')
  case 'F':
    console.log('Bad job')
  default:
    console.log('Unexpected grade value entered')
}

=> Okay job
=> Not so good job
=> Bad job
=> Unexpected grade value entered
```

>Ask the students to explain what is occurring here. If you are unable to generate any responses, try changing the `grade` being evaluated from `'C'` to `'B'`:

```javascript
var grade = 'B'

switch (grade) {
  case 'A':
    console.log('Awesome job')
  case 'B':
    console.log('Good job')
  case 'C':
    console.log('Okay job')
  case 'D':
    console.log('Not so good job')
  case 'F':
    console.log('Bad job')
  default:
    console.log('Unexpected grade value entered')
}

=> Good job
=> Okay job
=> Not so good job
=> Bad job
=> Unexpected grade value entered
```

>Be sure to explain the purpose of the `break`, (i.e., to stop evaluating and break out of the `switch` statement after the condition has been met).

#### Part 5: Illustrate the Fall-Through Technique

You will often need to return the same value for different cases. The fall-through technique is one way to achieve this:

```javascript
var grade = 'C'

switch (grade) {
  case 'A':
  case 'B':
  case 'C':
    console.log('You passed!')
    break
  case 'D':
  case 'F':
    console.log('You failed')
    break
  default:
    console.log('Unexpected grade value entered')
}

=> You passed!
```
