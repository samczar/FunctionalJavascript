var a, b, c, rest;
var x = [1, 2, 3, 4, 5, 6];

[a, b, ...rest] = x;

console.log(...rest);

var arr1 = [{ a: 1, b: 2, c: 3, d: 4 }, { a: 10, b: 20, c: 30, d: 40 }];

const [, { a, b, c }] = arr1;

console.log(a, b, c);
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" }
];

// const [{ id, name }] = props;

// console.log(name); // "FizzBuzz"

props.map(({ id, name }) => {
  console.log(id, name);
});
