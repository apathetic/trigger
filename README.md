# Trigger

Add a class on scroll.

## About

A simple and lightweight way to trigger the addition of a CSS class _once_ on scroll.
This is useful to create subtle scroll effects, for example if you wish to draw attention to a particular element.

## Getting Started
There is an ES6 module you may consume however you wish. Then:

```javascript
var triggers = document.querySelectorAll('.animatable');
var delay = 300;
Trigger(triggers, delay);
```

## Options

| name            | description |
| --------------- | ----------- |
| delay           | The number of pixels to delay triggering the class. |

## Demo

After cloning the repo:
```
npm i
npm start
```

A server will spin up at ```http://localhost:8080```, where you may play with the various examples.

## Support
* IE8+
* Safari / Chrome
* Firefox
* iOS
* Android 4.0+

## Examples

Please see the _test / demo_ directory

## TODO
Add lazy-loading as a possible callback.

## License
MIT
