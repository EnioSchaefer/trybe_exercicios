const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (arr) => arr.reduce((acc, word) => {
  return acc + word.split('').reduce((acc2, letter) => {
    if (letter === 'a' || letter === 'A') {
      return acc2 + 1;
    }
    return acc2;
  }, 0);
}, 0);

console.log(containsA(names));