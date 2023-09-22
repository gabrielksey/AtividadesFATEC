let salario = 3000;
let aumento = 10;

let novoSalario = salario + (salario * (aumento / 100));

console.log(`Salário antigo: R$${salario.toFixed(2)} e Novo salário: R$${novoSalario.toFixed(2)}`);