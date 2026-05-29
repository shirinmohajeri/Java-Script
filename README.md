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

