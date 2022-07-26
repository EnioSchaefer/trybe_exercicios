let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

let biggerName = '';

function maiorNome(nomes) {
    for (let index = 0; index < nomes.length; index += 1) {
     let split = nomes[index].split("");

        if (split.length > biggerName.length) {
            biggerName = nomes[index];
        }
    }
    console.log(biggerName)
}

maiorNome(nomes);