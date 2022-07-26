function maiorValor(arrayMaior) {
    let maiorNum = 0;
    for (index = 0; index <= arrayMaior.length; index += 1) {
        if (arrayMaior[index] > arrayMaior[index - 1]) {
            maiorIndex = index;
        }
    }
    return console.log(maiorIndex);
}

arrayMaior = [2, 3, 6, 7, 10, 1];
maiorValor(arrayMaior);

function menorValor(arrayMenor) {
    let menorNum = 0;
    for (index1 = 0; index1 <= arrayMenor.length; index1 += 1) {
        if (arrayMenor[index1] < arrayMenor[index1 - 1]) {
            menorIndex = index1;
        }
    }
    return console.log(menorIndex);
}

arrayMenor = [2, 4, 6, 7, 10, 0, -3];
menorValor(arrayMenor);