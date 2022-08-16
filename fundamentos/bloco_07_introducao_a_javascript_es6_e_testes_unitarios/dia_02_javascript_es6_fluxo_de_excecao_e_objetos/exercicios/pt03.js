const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const modifyObject = (object, key, value) => {
  object[key] = value;
  console.log(lesson2);
}
modifyObject(lesson2, 'turno', 'noite');

const listKeys = (object) => {
  console.log(Object.keys(object));
}
listKeys(lesson1);

const showLenght = (object) => {
  console.log(Object.keys(object).length);
}
showLenght(lesson3);

const showValues = (object) => {
  console.log(Object.values(object));
}
showValues(lesson3);

const allLessons = Object.assign({}, {lesson1, lesson2 ,lesson3});
console.log(allLessons);

const numberOfStudents = () => {
  console.log(allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes);
}
numberOfStudents();

const pickKeyValue = (object, index) => {
  console.log(Object.values(object)[index]);
}
pickKeyValue(lesson2, 2);

const checkPair = (object, key, value) => {
  const array = Object.entries(object);
  let pairCheck = false;

  for (let index in array) {
    if (array[index][0] === key && array[index][1] === value);
    pairCheck = true;
  }
  console.log(pairCheck);
}
checkPair(lesson1, 'professor', 'Maria Clara');