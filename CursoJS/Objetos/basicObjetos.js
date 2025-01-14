/*const pessoa1 = {
    nome: 'Rodrigo',
    sobrenome: 'Soledade',
    idade: 25
}*/
/*
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}*/
function criaPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}
const pessoa1 = criaPessoa('Rodrigo', 'Soledade', 35);
const pessoa2 = criaPessoa('Bruna'  , 'Manoela', 33);
const pessoa3 = criaPessoa('Gustavo', 'Soledade', 1);

console.log(pessoa1.nome, pessoa2.nome, pessoa3);