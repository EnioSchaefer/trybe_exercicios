// Faça um programa que retorne o maior de três números. 
// Defina no começo do programa três constantes com os 
// valores que serão comparados.

const a = 48;
const b = 36;
const c = 24;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else if (c > a && c > b) {
    console.log(c);
}