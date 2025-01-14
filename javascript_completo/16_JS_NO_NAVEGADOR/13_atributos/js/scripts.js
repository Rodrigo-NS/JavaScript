let a = document.querySelector("footer a");

console.log(a.getAttribute('href')); //Pega o atributo atual contido na tag <a href="#">

let link = 'https://www.horadecodar.com.br';

a.setAttribute('href', link); //Adiciona novo atributo no elemento

console.log(a.getAttribute('href'));