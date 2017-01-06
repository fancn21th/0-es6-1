var params = {
    foo: {
        message : 'hello'
    },
    bar : 10
};

function sayHi({ foo }){
    console.log(foo.message);
}

sayHi(params);