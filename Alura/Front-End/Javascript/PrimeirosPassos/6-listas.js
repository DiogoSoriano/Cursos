console.log("Trabalhando com listas");
// const salvador = "Salvador"
// const saoPaulo = "São Paulo"
// const rioDeJaneiro = "Rio de Janeiro"

// console.log("Destinos possíveis")
// console.log(salvador,saoPaulo,rioDeJaneiro)
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);
//console.log(listaDeDestinos)
listaDeDestinos.push('Curitiba');// adiciona itens na lista
console.log(listaDeDestinos);
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[2], listaDeDestinos[0]);