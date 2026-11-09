console.log("JavaScript carregado!")

const nomeAluno = "Miguel";
let idade1 = 16;
const matriculado = true;

console.log(nomeAluno, idade1, matriculado);
console.log(typeof nomeAluno, typeof idade1, typeof matriculado);

let num1 = 5;
let num2 = 8;

console.log(num1, num2);
console.log("Soma: " + (num1+num2));
console.log("Subtração: " + (num1-num2));
console.log("Multiplicação: " + (num1*num2));
console.log("Divisão: " + (num1/num2));
console.log("Resto da Divisão: " + (num1%num2));

// O primeiro numero eh menor que o segundo

const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número"))

console.log(n1 + " + " + n2 + " = " + (n1+n2));
console.log(typeof n1, typeof n2);

// Maioridade

idade1 = Number(prompt("Digite uma idade:"));

if (idade1 >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// Classificacao de nota

let nota = Number(prompt("Digite uma nota de 0 a 100:"));

if (nota >= 90){
    console.log("Excelente");
} else if (nota >= 70){
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Numero par ou impar

let numero = Number(prompt("Digite um numero inteiro:"));

if (numero % 2 === 0) {
    console.log(numero + " é par");
} else {
    console.log(numero + " é ímpar");
}

// Correcao de programa

const idade = Number(prompt("Idade:"));

 if (idade === 18) {
   console.log("Tem exatamente 18 anos");
 } else {
   console.log("Idade diferente de 18");
 }

 console.log(idade);

 // Situação do aluno

 let nome = Number(prompt("Digite o nome do aluno:"));
 let nota1 = Number(prompt("Digite a primeira nota:"));
 let nota2 = Number(prompt("Digite a segunda nota:"));
 let media = (nota1 + nota2)/2;

 let situacao = "Indefinida";

 if (media >= 70){
    situacao = "Aprovado";
 } else {
    situacao = "Reprovado";
 }

 if (`Aluno: $(nome) | Média: $(media) | Situação: $(situacao)`);
