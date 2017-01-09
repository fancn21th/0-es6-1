//require('./destructuring.js');
//require('./let&const.js');
//require('./class.js');
//require('./arrowFunction.js');

//var module = require('./modules/module1.js');
import { foo as foolish , bar } from './modules/module2.js';

foolish();
bar();