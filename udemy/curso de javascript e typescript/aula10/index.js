// string, number, undefined, null, boolean
const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // nulo -> não aponta para local nennum na memória
const aprovado = false; // boolean -> true, false (lógico)

let a = 2;
const b = a;
console.log(a, b)

a = 3;
console.log(a, b)