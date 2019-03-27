array1 = [1, 2, 3, 4, 5, 6, 7];
const show = array1.map(el => 2 ** el);
//Same in value
const show1 = array1.map(el => Math.pow(2, el));
console.log(show1);
//Output is
//[ 2, 4, 8, 16, 32, 64, 128 ]

var objArr = [
  { w: 10, h: 20, d: 10 },
  { w: 3, h: 2, d: 20 },
  { w: 4, h: 1, d: 400 },
  { w: 9000, h: 3999, d: 9191 }
];

objArr.map(({ w, h, d }) => {
  //Deconstructuring
  var val = w * h * d;
  console.log(val);
});
