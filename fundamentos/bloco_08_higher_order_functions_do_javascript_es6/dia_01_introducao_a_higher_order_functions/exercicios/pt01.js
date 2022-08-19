const fullName = (nomeCompleto) => {
  const obj = {
    nomeCompleto: `${nomeCompleto}`,
    email: `${nomeCompleto}@trybe.com`.replace(/\s/g, ''),
  };
  return Object.values(obj);
}

const newEmployees = (fullName) => {
  const employees = {
    id1: fullName('Pedro Guerra'),
    id2: fullName('Luiza Drumond'),
    id3: fullName('Carla Paiva'),
  }
  return employees;
}

console.log(newEmployees(fullName));