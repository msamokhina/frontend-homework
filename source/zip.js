'use strict'

const zip = function () {
  var result = {};
  for (var i = 0; i < arguments.length; i++) {
    var obj = arguments[i];
    for (let key in obj) {
      if (!(key in result)) {
        result[key] = obj[key];
      }
    }
  }
  return result;
}