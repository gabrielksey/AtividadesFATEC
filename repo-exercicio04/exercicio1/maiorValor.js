import PromptSync from "prompt-sync"
const prompt = PromptSync()

function maiorValor(){

    const num1 = Number(prompt('Digite o primeiro número: '));
    const num2 = Number(prompt('Digite o segundo número: '));
    const num3 = Number(prompt('Digite o terceiro número: '));

    let maior = num1

    if(num2 > num1)
    maior = num2

    if(num3 > maior)
    maior = num3

    return maior
}

const maior = maiorValor();
console.log('O maior número é: ' + maior);