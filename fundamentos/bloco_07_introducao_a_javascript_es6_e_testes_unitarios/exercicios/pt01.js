// function testingScope(escopo) {
//   if (escopo === true) {
//     let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//     console.log(elseScope);
//   }
// }
// testingScope(true);


// FUNCAO REFATORADA

const escopo = true;
const ifScope = `Não devo ser utilizada fora do meu escopo (if)`;

const testingScope = (escopo) => (
  escopo === true ? `${ifScope} ótimo, fui utilizada no escopo !` : `Não devo ser utilizada fora meu escopo (else)`
);
console.log(testingScope(true));
