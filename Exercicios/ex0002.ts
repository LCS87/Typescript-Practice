let randoValue: unknown =10;

randoValue = true;
randoValue = 'samuel';

if (typeof randoValue === "string") {
    console.log((randoValue as string).toLocaleUpperCase());
} else {
    console.log("erro  - A string was expected here.");
}

function add(x: number | string, y: number | string) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two'));  //* Returns "onetwo"
console.log(add(1, 2));          //* Returns 3
console.log(add('one', 2));      //* Returns error