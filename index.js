let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 //FILTER
let even =arr.filter ((val) => {
    return val % 2 === 0;
});

//Reduce
console.log(even);
let output = arr.reduce((acc, val) => {
    return acc>val ? acc : val;
});
console.log(output);
