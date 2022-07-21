let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersPlus = (5 + 9 + 3 + 19 + 70 + 8 + 100 + 2 + 35 + 27) / numbers.length;
let highestNumber;

console.log(numbersPlus);

if (numbersPlus > 20) {
    console.log('valor maior que 20');
}

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > numbers[index + 1]) {
        highestNumber.push(number[index]);
    }
}

console.log(highestNumber);




// for (let index = 0; index < cars.length; index += 1) {
//     console.log(cars[index]);
//   }