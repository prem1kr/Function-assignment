function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

//test

function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);

console.log(curriedAdd(5)(3)); 
console.log(curriedAdd(10)(20)); 
