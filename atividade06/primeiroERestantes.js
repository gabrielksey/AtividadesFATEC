import PromptSync from "prompt-sync"
const prompt = PromptSync()

const array = [5, 12, 20, 7, 9];

const [primeiro, ...restante] = array;

console.log("O primeiro elemento é:", primeiro);
console.log("Os elementos restantes são:", restante);