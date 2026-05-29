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
