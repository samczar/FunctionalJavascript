var food = ["beef Salad", "beef Beef", "Conflake"];

var f = food.filter(x => /beef/i.test(x));

console.log(f);
