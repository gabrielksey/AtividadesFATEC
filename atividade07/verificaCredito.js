import PromptSync from "prompt-sync"
const prompt = PromptSync()

class Cliente {
    constructor(nome, telefone, renda, email, ) {
        this.nome = nome;
        this.telefone = telefone;
        this.renda = renda;
        this.email = email;
    }

    verificarCredito() {
        return new Promise((resolve, reject) => {
          if (this.renda > 2000) {
            resolve("Crédito aprovado");
          } else {
            reject("Crédito recusado");
          }
        });
    }
}

const nome = prompt("Digite o nome do cliente: ");
const telefone = prompt("Digite o telefone do cliente: ");
const renda = parseFloat(prompt("Digite a renda do cliente: "));
const email = prompt("Digite o e-mail do cliente: ");

const cliente1 = new Cliente(nome, telefone, renda, email);

cliente1.verificarCredito()
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((mensagem) => {
    console.log(mensagem);
  });