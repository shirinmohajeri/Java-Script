# JavaScript First Example
### Preview
[!preview]()
## Basic HTML with JavaScript

This is a simple example of using JavaScript inside an HTML file.

```html
<html>
    <head>
        <script type="text/javascript">
            document.write("Hello World");
            window.alert("Hi");
        </script>
    </head>
    <body>

    </body>
</html>
```

## Explanation

### `script`

The `<script>` tag is used to write JavaScript code inside an HTML file.

```html
<script type="text/javascript">
```

### `document.write()`

`document.write()` writes text directly on the web page.

```javascript
document.write("Hello World");
```

Output on the page:

```text
Hello World
```

### `window.alert()`

`window.alert()` shows a popup message in the browser.

```javascript
window.alert("Hi");
```

Output:

```text
A popup box with the message: Hi
```

## Important Note

In modern JavaScript, we usually place the JavaScript code before the closing `</body>` tag or in a separate file like `script.js`.

Example:

```html
<script src="script.js"></script>
```
---

## Console Output

### `console.log()`

The `console.log()` method is used to print messages to the browser's console.

```javascript
console.log("Hello this is the output to the console");
```

### Output

```text
Hello this is the output to the console
```

### Why Use `console.log()`?

`console.log()` is useful for:

* Displaying information during program execution
* Checking variable values
* Debugging JavaScript code
* Understanding how your code works

### Example

```javascript
console.log("Hello World");
console.log("Learning JavaScript");
console.log(100);
```

Output:

```text
Hello World
Learning JavaScript
100
```

### Viewing the Console

Open the browser developer tools:

* **F12**
* **Ctrl + Shift + J** (Windows/Linux)
* **Cmd + Option + J** (Mac)

Then select the **Console** tab.
---
---

## Variables

Variables are used to store data in JavaScript.

### Declaring a Variable

```javascript
var name;
```

Here, a variable named `name` is created.

### Assigning a Value

```javascript
name = "Shirin";
```

The value `"Shirin"` is stored in the variable `name`.

### Displaying the Value

```javascript
document.write(name);
```

Output:

```text
Shirin
```

### Complete Example

```javascript
var name;
name = "Shirin";
document.write(name);
```

### How It Works

1. Create a variable called `name`.
2. Store the text `"Shirin"` in the variable.
3. Display the value on the webpage using `document.write()`.

### Modern JavaScript

Instead of `var`, modern JavaScript usually uses `let` or `const`.

```javascript
let name = "Shirin";
document.write(name);
```

or

```javascript
const name = "Shirin";
document.write(name);
```
---

## String Variables

A variable can store text values (strings).

### Example

```javascript
var value;
value = "true or false";
document.write(value);
```

### Output

```text
true or false
```

### Explanation

```javascript
var value;
```

Creates a variable named `value`.

```javascript
value = "true or false";
```

Stores the text `"true or false"` inside the variable.

```javascript
document.write(value);
```

Displays the value on the webpage.

### Note

Because the value is inside quotation marks (`"`), JavaScript treats it as **text (a string)**, not as a Boolean value.

```javascript
value = "true";
```

This is a string.

```javascript
value = true;
```

This is a Boolean value.

### Difference

```javascript
var text = "true";
var boolean = true;

document.write(text);
document.write("<br>");
document.write(boolean);
```
Although both display `true`, they are different data types.
---
---

## Arithmetic Operations

JavaScript can perform mathematical calculations using variables.

### Addition Example

```javascript
var a = 10;
var b = 20;
var result;

result = a + b;

document.write(result);
```

### Output

```text
30
```

### Explanation

```javascript
var a = 10;
```

Stores the value `10` in variable `a`.

```javascript
var b = 20;
```

Stores the value `20` in variable `b`.

```javascript
result = a + b;
```

Adds `a` and `b` together and stores the result in the variable `result`.

```javascript
document.write(result);
```

Displays the result on the webpage.

### Other Arithmetic Operators

| Operator | Description         | Example   | Result |
| -------- | ------------------- | --------- | ------ |
| `+`      | Addition            | `10 + 20` | `30`   |
| `-`      | Subtraction         | `20 - 10` | `10`   |
| `*`      | Multiplication      | `10 * 20` | `200`  |
| `/`      | Division            | `20 / 10` | `2`    |
| `%`      | Modulus (Remainder) | `20 % 3`  | `2`    |

### Example

```javascript
var a = 15;
var b = 5;

document.write(a + b);
document.write("<br>");

document.write(a - b);
document.write("<br>");

document.write(a * b);
document.write("<br>");

document.write(a / b);
```

Output:

```text
20
10
75
3
```
---
---

## Variables and Data Types

In JavaScript, variables can store different types of values.

### Example

```html
<title></title>

<script type="text/javascript">
    /* declare a variable named number */
    var number = 100;
    document.write(number);

    var Name = "shirin";
    console.log(Name);
    alert(Name);

    var variable = 300;
    document.write(variable);

    /* Data types */
    var name = "Shirin";
    var age = 35;
    var x = 3.456;
    var y = false;
</script>
```

### Explanation

```javascript
var number = 100;
```

Stores the number `100` in the variable `number`.

```javascript
document.write(number);
```

Displays the value of `number` on the HTML page.

```javascript
var Name = "shirin";
```

Stores the text `"shirin"` in the variable `Name`.

```javascript
console.log(Name);
```

Displays the value of `Name` in the browser console.

```javascript
alert(Name);
```

Shows the value of `Name` in an alert popup.

```javascript
var variable = 300;
```

Stores the number `300` in the variable `variable`.

```javascript
document.write(variable);
```

Displays the value of `variable` on the page.

---

## JavaScript Data Types

### String

A string is text. It must be written inside quotation marks.

```javascript
var name = "Shirin";
```

### Number

A number can be an integer or a decimal number.

```javascript
var age = 35;
var x = 3.456;
```

### Boolean

A Boolean value can be only `true` or `false`.

```javascript
var y = false;
```

---

## Notes

JavaScript is case-sensitive.

```javascript
var Name = "shirin";
var name = "Shirin";
```

`Name` and `name` are different variables because one starts with a capital letter and the other starts with a lowercase letter.

# JavaScript Learning Notes - Functions, Objects, Scope, and Events

## Functions

Functions allow us to group code into reusable blocks.

### Addition Function

```javascript
function add(x, y) {
    var z = x + y;
    return z;
}

var result = add(300, 200);
document.write(result);

var result = add(2000, 30);
document.write(result);
```

### Function with Return Value

```javascript
function shirin(y, z, w) {
    return y + z + w;
}

var result = shirin(10, 20, 30);
document.write(result);
```

### Square Function

```javascript
function square(x) {
    var result = x * x;
    document.write(result);
}

square(5);
```

### Display Function

```javascript
function display() {
    document.write("Hello Babe");
}

display();
```

### Addition of Three Numbers

```javascript
function addition(a, b, c) {
    var result = a + b + c;
    document.write(result);
}

addition(2, 3, 4);
```

---

## JavaScript Objects

Objects are used to store related data in key-value pairs.

### Person Object

```javascript
var person = {
    name: "shirin",
    family: "mohajeri",
    age: 35,
    Job: "Doctor",
    car: "BMW"
};

document.write(person.age);
document.write(person.Job);
document.write(person.car);
document.write(person.name);
document.write(person.family);
```

### Car Object

```javascript
var car = {
    brand: "BMW",
    color: "black",
    year: 2020,
    state: "stopped"
};

document.write(car.brand);
```

### Updating Object Properties

```javascript
car.color = "white";
```

The color property changes from `black` to `white`.

---

## Global and Local Variables

### Example

```javascript
var many1 = 200;

function demo() {
    var many2 = 100;
    document.write(many2);
}

document.write(many1);
demo();
```

### Notes

* `many1` is a **global variable** and can be accessed anywhere.
* `many2` is a **local variable** and can only be accessed inside the `demo()` function.

---

## Events and Buttons

JavaScript can respond to user actions such as button clicks.

### Show Message

```javascript
function showMessage() {
    document.write("Hi There");
}
```

Button:

```html
<button onclick="showMessage()">Click Me</button>
```

### Change Object State

```javascript
function changeState() {
    car.state = "running";
    document.write(car.state);
}
```

Button:

```html
<button onclick="changeState()">Change Car State</button>
```

### Call Display Function

```html
<button onclick="display()">Click Here</button>
```

When the button is clicked, the `display()` function runs and shows the message:

```text
Hello Babe
```

---

## Concepts Learned

* Functions
* Function Parameters
* Return Values
* Objects
* Object Properties
* Updating Object Properties
* Global Variables
* Local Variables
* Events
* Button Click Events
* DOM Output with `document.write()`
  ---

# JavaScript Math Object

JavaScript provides a built-in `Math` object that contains useful mathematical functions.

## Math.pow()

The `Math.pow()` function raises a number to a specified power.

### Syntax

```javascript
Math.pow(base, exponent);
```

### Example

```javascript
document.write(Math.pow(100, 2));
```

### Calculation

```text
100² = 100 × 100 = 10000
```

### Output

```text
10000
```

---

## Math.round()

The `Math.round()` function rounds a number to the nearest integer.

### Example

```javascript
document.write(Math.round(4.1));
```

### Output

```text
4
```

### More Examples

```javascript
Math.round(4.4); // 4
Math.round(4.5); // 5
Math.round(4.9); // 5
```

---

## Math.sqrt()

The `Math.sqrt()` function returns the square root of a number.

### Syntax

```javascript
Math.sqrt(number);
```

### Example

```javascript
document.write(Math.sqrt(49));
```

### Calculation

```text
√49 = 7
```

### Output

```text
7
```

### Incorrect Usage

```javascript
Math.sqrt(49, 0.5);
```

`Math.sqrt()` accepts only one parameter, so `0.5` is ignored.

---

## Square Root Using Math.pow()

A square root can also be calculated using `Math.pow()`.

### Example

```javascript
document.write(Math.pow(49, 0.5));
```

### Calculation

```text
49^0.5 = √49 = 7
```

### Output

```text
7
```

---

## Other Useful Math Functions

### Math.floor()

Rounds down to the nearest integer.

```javascript
Math.floor(4.9);
```

Output:

```text
4
```

### Math.ceil()

Rounds up to the nearest integer.

```javascript
Math.ceil(4.1);
```

Output:

```text
5
```

### Math.abs()

Returns the absolute (positive) value.

```javascript
Math.abs(-10);
```

Output:

```text
10
```

---

## Summary

| Function         | Description              | Example           | Output |
| ---------------- | ------------------------ | ----------------- | ------ |
| `Math.pow(x, y)` | Power                    | `Math.pow(10,2)`  | `100`  |
| `Math.sqrt(x)`   | Square Root              | `Math.sqrt(49)`   | `7`    |
| `Math.round(x)`  | Round to Nearest Integer | `Math.round(4.6)` | `5`    |
| `Math.floor(x)`  | Round Down               | `Math.floor(4.9)` | `4`    |
| `Math.ceil(x)`   | Round Up                 | `Math.ceil(4.1)`  | `5`    |
| `Math.abs(x)`    | Absolute Value           | `Math.abs(-10)`   | `10`   |


