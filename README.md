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

