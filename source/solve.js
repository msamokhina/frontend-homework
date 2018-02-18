'use strict'

const solve = (expression, x) => new Function('x', 'return ' + expression + ';')(x);