/* 
    Luiz Otávio Miranda tem 30 anos, pesa 84kg
    tem 1.80 de altura e seu IMC é de 25.925925925925924
    Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobreNome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2021 - idade;

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso}KG.`);
console.log('tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal + '.')
console.log(nome + " nasceu em " + anoNascimento + '.')