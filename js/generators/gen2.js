require("babel-polyfill"); // it is required to add polyfill (http://babeljs.io/docs/usage/polyfill/) in order to make generator working
var $ = require('jquery');
var Promise = require("bluebird");

Promise.coroutine(function* () {
    var hello1 = yield $.get('http://localhost:10010/hello?name=alex');
    var hello2 = yield $.get('http://localhost:10010/hello2?name=fancn');
    console.log(hello1, hello2);
})();