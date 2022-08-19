const checkPontuacao = (gabarito, respostas) => {
  let pontos = 0;

  for (let i = 0; i < gabarito.length; i += 1) {
    if (gabarito[i] === respostas[i]) {
      pontos += 1
    } else if (respostas[i] === 'N.A') {
      pontos = pontos
    } else {
      pontos -= 0.5;
    }
  }
  return pontos;
}

const hof = (gabarito, respostas, checkPontuacao) => {
  return checkPontuacao(gabarito, respostas);
};

console.log(hof(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], checkPontuacao));
