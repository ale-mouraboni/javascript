// let umaString = "Um \"texto\""; // outra forma de exibir aspas dentro de uma string
// let outraString = "Um \\texto"; // coloque duas barras invertidas para aparecer uma na string

// strings são indexadas 01234567
let string = "Um texto";

console.log(string.charAt(3)) // mostra o elemento da posição
console.log(string.concat(` em um lindo dia.`)) // concatenação
console.log(string.indexOf('texto')) // mostra em qual indice começa a palavra
console.log(string.indexOf('Um', 3)) // mostra em qual indice começa a palavra a partir do 3
console.log(string.lastIndexOf('m', 3)) // mostra em qual indice começa a palavra a partir do 3, mas ao contrário
console.log(string.match(/[a-z]/)) // referente a expressões regulares
console.log(string.search(/[a-z]/)) // similar ao indexOf, mas ele aceita expressões regulares
console.log(string.replace('Um', 'Outro')) // substitui letras e palavras (aceita expressões regulares)
console.log(string.length) // mostra quantos caractéres tem na string (começa contando do 0 e conta os espaços)
console.log(string.slice(-5)) // mostra os caractéres com base no valor atribuido
console.log(string.substring(string.length -5)) // 
console.log(string.split(' ')) // adiciona um espaço entre os caracteres
console.log(string.toUpperCase()) // transforma os caractéres em maiusculos
console.log(string.toLowerCase()) // transforma os caractéres em minusculos 