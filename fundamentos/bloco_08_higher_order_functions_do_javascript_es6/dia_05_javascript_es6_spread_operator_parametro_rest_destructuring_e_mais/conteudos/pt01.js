// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maçã', 'Melancia', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Sorvete', 'Calda de Chocolate', 'Ovomaltine'];

const fruitSalad = (fruit, additional) => {
  const fruitSalad = [...fruit, ...additional];
  return fruitSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));