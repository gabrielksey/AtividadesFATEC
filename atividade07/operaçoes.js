import PromptSync from "prompt-sync"
const prompt = PromptSync()

function somar(A, B) {
    return A + B;
    
}

function subtrair(A, B) {
    return A - B;
}

function dividir(A, B) {
    return A / B;
}

function multiplicar(A, B) {
    return A * B;
}

function calcular(A, B, callbackOperaçao) {
    return callbackOperaçao(A, B);
}

const A = Number(prompt("Digite o primeiro valor: "));
const B = Number(prompt("Digite o segundo valor: "));

const resultadoSoma = calcular(A, B, somar);
const resultadoSubtracao = calcular(A, B, subtrair);
const resultadoDivisao = calcular(A, B, dividir);
const resultadoMultiplicacao = calcular(A, B, multiplicar);

console.log("Soma:", resultadoSoma);
console.log("Subtração:", resultadoSubtracao);
console.log("Divisão:", resultadoDivisao);
console.log("Multiplicação:", resultadoMultiplicacao);