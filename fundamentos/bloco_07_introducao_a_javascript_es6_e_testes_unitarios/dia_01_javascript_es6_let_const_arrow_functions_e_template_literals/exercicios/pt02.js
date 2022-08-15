let oddsAndEvens = [13, 3, 4, 10, 7, 2];

// A ARROW FUNCTION ESTA DENTRO DE OUTRA ARROW FUNCTION POR CONVENIENCIA

const sortOddsAndEvens = (array) => array.sort((a,b) => a-b);

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens)} se encontram ordenados de forma crescente!`);
