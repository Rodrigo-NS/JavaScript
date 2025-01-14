function fSaudacao(nome) {
    console.log(`Bom dia ${nome}`)
    return;
}
//fSaudacao('Rodrigo');
//----------------------------------
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}
const resultado = soma(2, 3);
//console.log(resultado);
//----------------------------------
//Variavel com caracteristica de função
const raiz = function (n) {
    return n ** 0.5;
};
//console.log(raiz(9));
//console.log(raiz(16));
//----------------------------------
//Arrow function -> função em uma linha só
const raiz2 = (n) => n ** 0.5;

console.log(raiz2(9));