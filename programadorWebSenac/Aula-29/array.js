let frutas = ['Manga','Laranja','Caju']
console.log(frutas)//Imprime o Array
console.log(frutas.length)//Tamanho do array
console.log(frutas[0])//Mostra o indice

//Método do array
frutas.push('Banana')//Criar elemento no final array
console.log(frutas)
console.log(frutas[3])

let inicio = frutas.unshift('Maçã')
console.log(frutas)
let ultimoElemento = frutas.pop()
console.log(frutas)
let delInicio = frutas.shift()
console.log(frutas)

//Função forEath, Iteração do array: mostra os elementos na sequência
frutas.forEach(item => console.log(item))
frutas.forEach(console.log)

//Faz a interação de elemento e o seu índice
frutas.forEach((item, index)=> {
    console.log(item)
    console.log(index)
})
frutas.forEach((item, index)=> {
    //console.log(item)
    console.log(index, item)
})

