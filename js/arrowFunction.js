var foo = (a, b) => {
  return a + b;
};

console.log([1,2,3].map(v => ++v));

var module = {
    age:30,
    foo: function(){
        setTimeout(()=>{
            console.log(this.age);
        }, 100);
    }
};

module.foo();
