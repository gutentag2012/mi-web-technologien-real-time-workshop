# Slides Frontend

## Print

To print the slides put the following in the URL:

```
?print-pdf
```

Also open the tab with the dev tools and set the dimensions to A4 or the desired size for the PDF print.

Due to some issues, you also have to run the following command in the console:

```js
[...document.querySelectorAll("section.h-full.present")].forEach(n => n.style.top = "0px")
```