var getMethods = function (obj) {
  var res = [];
  for(var m in obj) {
    if(typeof obj[m] == "function") {
      res.push(m)
    }
  }
  return res;
}

// select button with vanilla javascript
var plainButton = document.getElementById('button');

// select button with jQuery
var jQueryButton = $('button');

// console log normal DOM Node methods
console.log(getMethods(plainButton));

// console log jQuery DOM methods
console.log(getMethods(jQueryButton));