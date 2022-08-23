const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;
const isDivisible = numbers.find(findDivisibleBy3And5);

console.log(isDivisible);



const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5;
const fiveLetterName = names.find(findNameWithFiveLetters);

console.log(fiveLetterName);



const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  const found = musicas.find((obj) => obj.id === id);
  return found.title;
}

console.log(findMusic('31031685'))