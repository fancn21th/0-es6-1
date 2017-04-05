// function curriedMultiply(X) {
//     return (Y) => {
//         return X * Y;
//     }
// }

const curriedMultiply = (X) => (Y) => {
    console.log(`${X} * ${Y} = `, X*Y)
}

curriedMultiply(10)(20)