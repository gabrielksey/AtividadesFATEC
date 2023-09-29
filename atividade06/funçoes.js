import PromptSync from "prompt-sync"
const prompt = PromptSync()

const lista = [10, 12, 15, 35, 40];

function maiorQueAMedia(arr) {

    const media = arr.reduce((acc, num) => acc + num, 0) / arr.length

    const valoresMaiores = arr.filter((valor) => valor > media)

    return valoresMaiores;
}

const valoresMaiores = maiorQueAMedia(lista);

function menorValorDaLista(arr) {

    let menor = arr[0];
  
    menor = Math.min(...arr)

    return menor;
}

const resultado = menorValorDaLista(lista);

function somaDosItens(arr){

    let soma = 0;

    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }

    return soma
}

const resultado2 = somaDosItens(lista)

function maioresQue20(arr) {

    const valoresMaiores2 = arr.filter((valor) => valor > 20)
    return valoresMaiores2;
}

const valoresMaiores2 = maioresQue20(lista);

console.log("Valores maiores que a média:", valoresMaiores);
console.log("O menor valor da lista:", resultado);
console.log("O valor da soma dos itens da lista:", resultado2);
console.log("Valores maiores que 20:", valoresMaiores2);