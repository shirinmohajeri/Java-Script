# Variables in JavaScript

JavaScript provides three ways to declare variables:

- `var` (older method)
- `let` (ES6)
- `const` (ES6)

---

## var

`var` was the original way to declare variables before ES6.

### Example

```javascript
var name = "John";
console.log(name);
```

### Output

```javascript
John
```

### Reassigning a var Variable

```javascript
var score = 10;
score = 20;

console.log(score);
```

### Output

```javascript
20
```

### Redeclaring a var Variable

```javascript
var city = "Rome";
var city = "Milan";

console.log(city);
```

### Output

```javascript
Milan
```

### Notes

- Can be reassigned.
- Can be redeclared.
- Function-scoped.
- Generally avoided in modern JavaScript.

---

## let

`let` was introduced in ES6 and is used for variables whose values may change.

### Example

```javascript
let age = 25;
console.log(age);
```

### Output

```javascript
25
```

### Reassigning a let Variable

```javascript
let score = 10;
score = 20;

console.log(score);
```

### Output

```javascript
20
```

### Redeclaring a let Variable

```javascript
let city = "Rome";
let city = "Milan"; // Error
```

### Notes

- Can be reassigned.
- Cannot be redeclared in the same scope.
- Block-scoped.
- Recommended when values need to change.

---

## const

`const` was introduced in ES6 and is used for values that should not be reassigned.

### Example

```javascript
const PI = 3.14;
console.log(PI);
```

### Output

```javascript
3.14
```

### Reassigning a const Variable

```javascript
const PI = 3.14;

PI = 3.14159; // Error
```

### Notes

- Cannot be reassigned.
- Cannot be redeclared.
- Block-scoped.
- Recommended by default.

---

# Arrays

An array stores multiple values in a single variable.

### Example

```javascript
const marks = [200, 300, 400];

console.log(marks);
```

### Output

```javascript
[200, 300, 400]
```

---

## Array Indexes

Each element in an array has an index.

```javascript
const marks = [200, 300, 400];
```

| Value | Index |
|---------|---------|
| 200 | 0 |
| 300 | 1 |
| 400 | 2 |

### Accessing Elements

```javascript
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
```

### Output

```javascript
200
300
400
```

---

## Modifying an Array

Even though an array is declared with `const`, its contents can still be modified.

### Example

```javascript
const marks = [200, 300, 400];

marks.push(500);

console.log(marks);
```

### Output

```javascript
[200, 300, 400, 500]
```

### Not Allowed

```javascript
const marks = [200, 300, 400];

marks = [1, 2, 3]; // Error
```

This causes an error because the entire array is being reassigned.

---

# Summary

| Keyword | Reassign? | Redeclare? | Scope |
|----------|----------|----------|----------|
| var | Yes | Yes | Function |
| let | Yes | No | Block |
| const | No | No | Block |

### Modern Best Practice

```javascript
const name = "John";
let counter = 0;
```

Use `const` by default and use `let` only when the value needs to change.

# Array Method: push()

The `push()` method adds one or more elements to the end of an array.

---

## Syntax

```javascript
array.push(element1, element2, ...);
```

### Example

```javascript
const marks = [200, 300, 400];

marks.push(500);

console.log(marks);
```

### Output

```javascript
[200, 300, 400, 500]
```

---

## Adding Multiple Elements

You can add multiple elements at once.

```javascript
const marks = [200, 300, 400];

marks.push(500, 600);

console.log(marks);
```

### Output

```javascript
[200, 300, 400, 500, 600]
```

---

## Common Mistake

Incorrect:

```javascript
const marks = [200, 300, 400];

marks.push = (500, 600);

console.log(marks);
```

### Why It's Wrong

`push` is a method (function). Using `=` replaces the method instead of calling it.

JavaScript evaluates:

```javascript
(500, 600)
```

to:

```javascript
600
```

So the code becomes:

```javascript
marks.push = 600;
```

Now the `push()` method has been overwritten.

---

## What Happens Next?

```javascript
marks.push(700);
```

### Output

```javascript
TypeError: marks.push is not a function
```

Because `push` is now a number instead of a function.

---

## Correct Usage

Always use parentheses `()` to call the method:

```javascript
const marks = [200, 300, 400];

marks.push(500, 600);

console.log(marks);
```

### Output

```javascript
[200, 300, 400, 500, 600]
```

---

## Summary

| Code                      | Result                                     |
| ------------------------- | ------------------------------------------ |
| `marks.push(500)`         | Adds `500` to the array                    |
| `marks.push(500, 600)`    | Adds multiple elements                     |
| `marks.push = 500`        | Replaces the method (incorrect)            |
| `marks.push = (500, 600)` | Replaces the method with `600` (incorrect) |

### Rule to Remember

```javascript
marks.push(500);  // ✅ Call the method

marks.push = 500; // ❌ Replace the method
```

