import PromptSync from "prompt-sync"
const prompt = PromptSync()

function tabuada(){

    const numeroDigitado = Number(prompt("Informe um número: "))
    const limite = Number(prompt("Infomrme um limite: "))

for (let index = 1; index <= limite; index ++){
    const total = numeroDigitado * index
    console.log(`${numeroDigitado} X ${index} = ${total}`)
    }
}

tabuada()