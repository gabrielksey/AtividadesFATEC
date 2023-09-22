import PromptSync from "prompt-sync"
const prompt = PromptSync()

function calcularPrecoComDesconto(valorProduto, quantidadeProduto, callbackDesconto) {
    
    const precoTotal = valorProduto * quantidadeProduto;
  
    const precoComDesconto = callbackDesconto(precoTotal);
  
    return `Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`;
}
function aplicarPorcentagem(precoTotal) {
  const desconto = parseFloat(prompt("Digite a % de desconto no formato '0.00': "))
  const descontoAplicado = precoTotal * desconto;
  return precoTotal - descontoAplicado;

}

const valorProduto = parseFloat(prompt("Digite o valor do produto: "));
const quantidadeProduto = parseFloat(prompt("Digite a quantidade de produtos: "));

const resultado = calcularPrecoComDesconto(valorProduto, quantidadeProduto, aplicarPorcentagem);

console.log(resultado);