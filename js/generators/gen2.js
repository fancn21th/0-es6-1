require("babel-polyfill"); // it is required to add polyfill (http://babeljs.io/docs/usage/polyfill/) in order to make generator working
const $ = require('jquery');
const Promise = require("bluebird");

Promise.coroutine(function* () {
    const hello1 = yield $.get('http://localhost:10010/hello?name=alex');
    const hello2 = yield $.get('http://localhost:10010/hello2?name=fancn');
    console.log(hello1, hello2);
})();