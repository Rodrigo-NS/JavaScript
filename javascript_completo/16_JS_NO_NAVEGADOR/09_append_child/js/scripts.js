let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto do Rodrigo");

novoElemento.appendChild(texto);

let p = document.querySelector("#paragrafo-principal");
let pai = p.parentNode;//Pega a referecia de quem é o pai do paragrama = <div>

pai.appendChild(novoElemento); //Adiciona o elemento por ultimo dentro da <div>
