let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// ---------------------------------------------------------------
let numbersPlus = (5 + 9 + 3 + 19 + 70 + 8 + 100 + 2 + 35 + 27) / numbers.length;
console.log(numbersPlus);
// ---------------------------------------------------------------
let numbersEven = [];



if (numbersPlus > 20) {
    console.log('valor maior que 20');
} else {
    console.log('valor menor ou igual a 20')
}
// ---------------------------------------------------------------
let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);
// ---------------------------------------------------------------
for (let index2 = 0; index2 < numbers.length; index2 += 1) {
    if (numbers[index2] % 2 !== 0) {
        numbersEven.push(numbers[index2]);
    } 
}

console.log(numbersEven)

if (numbersEven.lenght < 1) {
    console.log('nenhum valor impar encontrado');
}
// ---------------------------------------------------------------
let lowestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < lowestNumber) {
    lowestNumber = numbers[index];
  }
}

console.log(lowestNumber);
// ---------------------------------------------------------------
let newNumbers = [];
for (let index3 = 0; index3 <= 24; index3 += 1) {
    newNumbers.push(newNumbers.length + 1);
}
console.log(newNumbers);
// ---------------------------------------------------------------
let newNumbersDivided = [];
for (let index4 = 0; index4 <= 24; index4 += 1) {
    newNumbersDivided.push(newNumbers[index4] / 2);
}

console.log(newNumbersDivided)
// for (let index = 0; index < cars.length; index += 1) {
//     console.log(cars[index]);
//   }