const apostaCheck = (aposta, numSorteado) => {
  if (aposta === numSorteado) {
    return true;
  }
}

function sorteio(aposta, apostaCheck) {
  const rng = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  if (apostaCheck(aposta, rng) === true) {
    return 'Parabéns você ganhou';
  }; 
  return 'Tente novamente';
}

console.log(sorteio(3, apostaCheck));
