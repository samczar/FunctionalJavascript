array1 = [1, 2, 3, 4, 5, 6, 7];
const show = array1.map(el => 2 ** el);
//Same in value
const show1 = array1.map(el => Math.pow(2, el));
console.log(show1);
//Output is
//[ 2, 4, 8, 16, 32, 64, 128 ]
