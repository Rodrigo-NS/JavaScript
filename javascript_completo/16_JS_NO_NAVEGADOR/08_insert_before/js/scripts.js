let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto do Rodrigo.");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector("#titulo-principal"); //pega a posiçao do ID alvo da inserçao
let elementoPai = document.querySelector("#container-principal");//pega o elemento pai do elemento onde será inserido algo

elementoPai.insertBefore(novoElemento, elementoAlvo);//Insere o novo elemento antes do elementoAlvo



