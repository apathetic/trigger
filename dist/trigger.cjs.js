/*!
MIT License

Copyright (c) 2017 wes hatch

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
"use strict";function Trigger(e,t){void 0===t&&(t={});var i,n=Object.assign({},defaults,t),o=document.querySelectorAll(e),s=0;if(!o.length||isTouchDevice&&t.disableTouch)return!1;Array.prototype.forEach.call(o,function(e,t){function o(){i=e.getBoundingClientRect().top,(i+=n.offset)<window.innerHeight&&(s+=n.stagger,window.setTimeout(function(){e.classList.add(n.class)},s),window.setTimeout(function(){s=0},100),window.removeEventListener("scroll",o),window.removeEventListener("resize",o))}window.addEventListener("scroll",o),window.addEventListener("resize",o),o()})}var isTouchDevice="ontouchstart"in window||!1,defaults={class:"animated",stagger:0,offset:0,disableTouch:!0};module.exports=Trigger;
