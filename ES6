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
