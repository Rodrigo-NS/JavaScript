/*-------------------------------------------
const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos.length);//Tamanho do array

alunos[alunos.length] = 'Fabricio' //Adiciona elementos de forma manual no array
alunos[alunos.length] = 'Marcos'

console.log(alunos);
--------------------------------------------*/
/*
const alunos = ['Luiz', 'Maria', 'João'];
alunos.push('Matheus'); //Metodo que adiciona elementos no fim do array
alunos.push('Lucas');

console.log(alunos);
--------------------------------------------*/
/*
const alunos = ['Luiz', 'Maria', 'João'];

alunos.unshift('Luiza');//Adiciona elemento no começo do Array
alunos.unshift('Fabio');
--------------------------------------------*/
/*
const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos);
let removido = alunos.pop(); //Remove elemento do final do Array
console.log('Removido: '+removido);
console.log(alunos);
removido = alunos.shift(); //Remove elemento do começo do Array
console.log('Removido: '+removido);
console.log(alunos);
--------------------------------------------*/

const alunos = ['Luiz', 'Maria', 'João'];

alunos.push('Luiza');
alunos.push('Eduardo');

console.log(alunos.slice(0, 3)); //Pegar um pedaço do Array

console.log(typeof alunos); //Verifica tipo da variavel, mas Arrays são um tipo de objeto
console.log(alunos instanceof Array) //Verifica se variavel é um Array