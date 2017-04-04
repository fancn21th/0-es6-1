require("babel-polyfill"); // it is required to add polyfill (http://babeljs.io/docs/usage/polyfill/) in order to make generator working

const myGen = function*() {
    const one = yield 1;
    const two = yield 2;
    const three = yield 3;
    console.log(`there is ${one},${two},${three}`);
};

var gen = myGen();

//console.log(gen.next());
//console.log(gen.next());
//console.log(gen.next());
//console.log(gen.next());
//console.log(gen.next());
//console.log(gen.next());

console.log(gen.next(1000));
console.log(gen.next('x'));
console.log(gen.next('y'));
console.log(gen.next('z'));
console.log(gen.next());
console.log(gen.next());