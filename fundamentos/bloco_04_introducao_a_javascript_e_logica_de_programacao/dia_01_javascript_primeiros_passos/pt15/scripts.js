let bruteSalary = 3000;
let inss;
let ir;
let inssDiscout;
let irDiscount;
let salaryINSS;
let irMonthlyFee;
let salaryIr;

// DESCONTOS INSS
if (bruteSalary <= 1556.94) {
    inss = 0.08;
} else if (bruteSalary > 1556.94 && bruteSalary <= 2594.92) {
    inss = 0.09;
} else if (bruteSalary > 2594.92 && bruteSalary <= 5189.82) {
    inss = 0.11;
} else if (bruteSalary > 5189.82) {
    inss = 0.11;
}

inssDiscout = bruteSalary * inss;

if (inssDiscout > 570.88) {
    inssDiscout = 570.88;
}

salaryINSS = bruteSalary - inssDiscout;
console.log('Desconto INSS: ' + inssDiscout);
console.log('Salario com desconto de INSS: ' + salaryINSS);

// DESCONTOS IR
if (salaryINSS > 1903.98 && salaryINSS <= 2826.65) {
    ir = 7.5 / 100;
    irDiscount = 142.80;
} else if (salaryINSS > 2826.65 && salaryINSS <= 3751.05) {
    ir = 15 / 100;
    irDiscount = 354.80;
} else if (salaryINSS > 3751.05 && salaryINSS <= 4664.68) {
    ir= 22.5 / 100;
    irDiscount = 636.13;
}  else if (salaryINSS > 4664.68) {
    ir = 27.5 / 100;
    irDiscount = 869.36;
}

salaryIr = salaryINSS - (salaryINSS * ir - irDiscount);

console.log('Salario com todos os descontos: ' + salaryIr);