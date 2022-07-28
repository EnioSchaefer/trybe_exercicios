let natural = 5;
let somatorio = 0;
let soma = [];

function numeroNatural(numero) {
    for (let index = 1; index <= numero; index += 1) {
        soma.push(index);
    }
    for (index in soma) {
        somatorio += soma[index];
    }

    console.log(somatorio);
}
numeroNatural(natural); 