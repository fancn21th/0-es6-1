class Parent{
    constructor(){
        console.log('Parent constructor executed!');
    }

    foo(){
        console.log('foo executed!');
    }

    static bar(){
        console.log('bar executed!');
    }
}

class Child extends Parent{
    constructor(){
        super();
        console.log('Child constructor executed!');
    }
}

const child = new Child();

child.foo();

Child.bar();