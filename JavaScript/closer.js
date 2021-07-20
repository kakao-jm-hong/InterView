function closer() {
    let saveNumber = 1;
    return function() {
        return saveNumber++;
    }
}

const test = closer();

console.log(test());
console.log(test());
console.log(test());
console.log(test());
console.log(test());