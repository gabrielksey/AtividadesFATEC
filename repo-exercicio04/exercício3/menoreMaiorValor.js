import PromptSync from "prompt-sync"
const prompt = PromptSync()

function encontrarMaiorMenor() {
    const limite = Number(prompt('Informe o limite da lista de números: '))
    const numeros = []
  
    for (let i = 1; i <= limite; i++) {
      const numero = Number(prompt(`Digite o número ${i}: `))
      numeros.push(numero);
    }
  
    let maior = numeros[0]
    let menor = numeros[0]
  
    maior = Math.max(...numeros)
    menor = Math.min(...numeros)
    
    return `O maior valor é: ${maior}\nO menor valor é: ${menor}`
  }
  
  const resultado = encontrarMaiorMenor()
  console.log(resultado)