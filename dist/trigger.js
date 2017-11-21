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
var Trigger=function(){"use strict";var e="ontouchstart"in window||!1,t={class:"animated",stagger:0,offset:0,disableTouch:!0};return function(n,i){void 0===i&&(i={});var o,r=Object.assign({},t,i),s=document.querySelectorAll(n),c=0;if(!s.length||e&&i.disableTouch)return!1;Array.prototype.forEach.call(s,function(e,t){function n(){o=e.getBoundingClientRect().top,(o+=r.offset)<window.innerHeight&&(c+=r.stagger,window.setTimeout(function(){e.classList.add(r.class)},c),window.setTimeout(function(){c=0},100),window.removeEventListener("scroll",n),window.removeEventListener("resize",n))}window.addEventListener("scroll",n),window.addEventListener("resize",n),n()})}}();
