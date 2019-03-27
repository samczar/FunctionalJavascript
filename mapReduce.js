array1 = [1, 2, 3];

const squared = arr => {
  var show = arr.map(el => el * el).reduce((acc, c) => acc + c, 0);
  console.log(show);
};

squared(array1);
