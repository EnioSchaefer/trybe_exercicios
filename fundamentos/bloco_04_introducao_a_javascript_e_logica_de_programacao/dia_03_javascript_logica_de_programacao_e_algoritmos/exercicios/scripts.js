// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let numFatorar = 10;
let numFatorado = 1;

for (index = 10; index > 0; index -= 1) {
    numFatorado *= index;
}
console.log(numFatorado);

// ----------------------------------------------------------
let word = 'tryber';
let wordReversed = '';

for (let index2 = 0; index2 < word.length; index2 += 1) {
    wordReversed += word[word.length - 1 - index2];
}
console.log(wordReversed);

// ----------------------------------------------------------
let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array[0];

for (let index3 = 0; index3 < array.length; index3 += 1) {
    if (array[index3].length > biggestWord.length) {
        biggestWord = array[index3];
    }
}
console.log(biggestWord);

for (let index4 = 0; index4 < array.length; index4 += 1) {
    if (array[index4].length < smallestWord.length) {
        smallestWord = array[index4];
    }
}
console.log(smallestWord);
// ----------------------------------------------------------
let maiorPrimo = 0;

for (let numAtual = 2; numAtual <= 50; numAtual += 1) {
    let isPrime = true;
    for (let dividendoAtual = 2; dividendoAtual < numAtual; dividendoAtual += 1) {
        if (numAtual % dividendoAtual === 0) {
            isPrime = false;
        } 
    }
    if (isPrime) {
        maiorPrimo = numAtual;
    }
}
console.log(maiorPrimo);