    
//console.log('Hello World!');
//console.log('Esse trecho será exibido no console do navegador!')

/*---------------------------------------------
let nome1;//Declara variavel
const nome2 = 'Pedro';

nome1 = 'João';//Atribui valor a variavel

console.log(nome1+' nasceu em 1984.');
console.log('Em 2000', nome1, 'conheceu Maria.');
console.log(nome1, 'casou-se em 2012.');
console.log('Maria teve um filho com', nome1, 'em 2015.');*/

//console.log(nome2 + ' nasceu em 1980.');

/*---------------------------------------------
const primeiroNum = 5;
const segundoNum = 10;
const resultado = primeiroNum * segundoNum;

console.log('------------------');
console.log(resultado);

console.log(typeof resultado);//Para saber o tipo da variavel
---------------------------------------------*/
/*
const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc;
let anoNasc;

imc = peso / (altura * altura);
anoNasc = 2023 - idade

console.log(nome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'de altura e seu IMC é de', imc);//Modelo 1
console.log(nome, 'nasceu em', anoNasc);//Modelo 1
//-------------------------------
console.log('------------------');
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);//Modelo 2
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);//Modelo 2
console.log(`${nome} nasceu em ${anoNasc}.`);//Modelo 2
---------------------------------------------*/
/*
//Tipos de variaveis
const nome  = 'Rodrigo';//String
const nome1 = "Rodrigo";//String
const nome2 = `Rodrigo`;//String
const num1 = 10; //Number
const num2 = 10.52; //Number
let nomeAluno; //Sem iniciar valor, fica como undefined
let sobrenomeAluno = null; //Nulo -> não aponta pra local nenhuma na memória
const aprovado = false; //Boolen = true, false (Lógico)

const arrayA = [1, 2];
const arrayB = arrayA;
let tamanho = 0;

console.log(typeof arrayA);
console.log(arrayA);
---------------------------------------------*/
/*
//Aritmeticos

//console.log(3 ** 3); // ** Potenciação

const num1 = 10;
const num2 = '5';
const num3 = parseInt('5'); //Converte para inteiro
const num4 = parseFloat('5.2');//Converte para float

console.log(num1 * num2);
console.log('-----------------');
console.log(num1 + num2);
console.log('-----------------');
console.log(num1 + num3);
console.log('-----------------');
console.log(num4);
---------------------------------------------*/
/*
let umaString = "Um texto";

//console.log(umaString[3]);//mostra letra na posição da string

console.log(umaString.indexOf('texto'));//Retorna a posição em que começa a palavra buscada

console.log(umaString.indexOf('o', 3));//Considera a busca da letra que esta após a posição numerica

console.log(umaString.lastIndexOf('m', 3));//Considera a busca da letra de trás para frente

console.log(umaString.match(/[a-z]/g));//Mostra primeira letra minuscula da string

console.log(umaString.search(/x/));//Busca a posição da letra "x"

console.log(umaString.replace('Um', 'Outro'));//Substitui string dentro da variavel

console.log(umaString.length);

let umaString2 = "Um texto maior.";
//console.log(umaString2.slice(3, 8));//função parecida com o SubStr()

//console.log(umaString2.slice(-6, -1));//função parecida com o SubStr()

//console.log(umaString2.substring(umaString2.length - 6));]

console.log(umaString2.split(' '));//Divide a string com base no caracter informado

console.log(umaString2.toUpperCase());//Deixar o texto todo maiusculo
console.log(umaString2.toLowerCase());//Deixar o texto todo minusculo
--------------------------------------------------------------------------------*/
/*
let num1 = 1;
let num2 = 2.5;

console.log(num1.toString() + num2);//toString() -> converte para string
console.log(typeof num1);

num1 = num1.toString();//para alterar em definitivo na variavel

let num3 = 10.57895512;

console.log(num3.toFixed(2)) //Faz o round do numero com muitas casas decimais

console.log(Number.isInteger(num1)); //Verificar se o numero é do tipo inteiro 
let temp = num1 * 'Olá';

console.log(Number.isNaN(temp)); //Verifica se a variavel é um NaN (Not A Number)
--------------------------------------------------------------------------------*/

let num1 = 9.54578;
//let num2 = Math.floor(num1);//Arredonda para baixo
//let num2 = Math.ceil(num1);//Arredonda para cima
//let num2 = Math.round(num1);//Arredonda para o numero inteiro mais proximo

//console.log(num2);
/*
console.log("MAX:");
console.log(Math.max(1, 2, 3, 5, -10, -50, 150, 9, 8, 7));
console.log("MIN:");
console.log(Math.min(1, 2, 3, 5, -10, -50, 150, 9, 8, 7));
console.log(Math.random() * (10 - 5) + 5);*/


