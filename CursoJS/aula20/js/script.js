
function meuEscopo() {

    const form = document.querySelector('.form'); //Usa ponto antes do nome quando é classe
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault(); //Desativa o envio e atualização automatica do formulario

        const nome = form.querySelector('.nome'); //Faz um querySelector localizado dentro da Tag form
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value}` +
        ` ${peso.value}  ${altura.value}<\p >`
        
    }

    form.addEventListener('submit', recebeEventoForm);
    
}

meuEscopo();