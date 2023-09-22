import PromptSync from "prompt-sync"
const prompt = PromptSync()

function obterHobbies() {
    const nome = prompt('Digite o nome do cliente (ou deixe em branco para prosseguir): ');
    if (nome === '') {
      return;
    }
  
    const hobbies = [];
    let hobby = prompt('Digite um hobby (ou deixe em branco para encerrar): ');
  
    while (hobby !== '') {
      hobbies.push(hobby);
      hobby = prompt('Digite outro hobby (ou deixe em branco para encerrar): ');
    }
  
    if (hobbies.length > 0) {
      console.log(`${nome} | ${hobbies.join(', ')}`)
    } else {
      console.log(`${nome} não possui hobbies.`)
    }
  
    obterHobbies()
  }
  
  obterHobbies()