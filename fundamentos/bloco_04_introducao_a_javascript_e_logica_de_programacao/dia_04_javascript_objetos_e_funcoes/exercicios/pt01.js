let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem-vinda, ' + info.personagem);

  info.recorrente = 'Sim';

  console.log(info.recorrente);

  for (let key in info) {
    console.log(key);
  }
  
  for (let key in info) {
    console.log(info[key]);
  }

// ---------------------------------------------------------------- \\

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mounain, Dell`s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrentte: 'Sim'
  };

  console.log(info.personagem + ' e ' + info2.personagem);
  console.log(info.origem + ' e ' + info2.origem);
  console.log(info.nota + ' e ' + info2.nota);
  console.log('Ambos recorrentes');