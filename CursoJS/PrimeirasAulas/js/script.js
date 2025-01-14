/*//Msg alerta
alert('Minha mensagem no navegador.');

//Msg de confirmação -> window.confirm()
confirm('Deseja realmente continuar?');

//Mensagem de input de informação window.prompt()
const nome = prompt('Digite o seu nome:');
------------------------------*/

let num1 = prompt('Digite um numero:');

let num2 = prompt('Digite outro numero para somar:');
//const soma = parseInt(num1) + parseInt(num2);
num1 = Number(num1);
num2 = Number(num2);
const soma = num1 + num2;

alert('A soma dos valores é: ' + soma);
alert(`A soma dos valores é: ${num1 + num2}`);