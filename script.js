// map

var array = [1, 2, 3, 4, 5]

var triplo = array.map((number) => number * 3)

// o parametro "number" serve para dar o nome para uma 'coisa' que passa em todas as vezes no meu array

console.log("o triplo do meu array é: " + triplo)


//deixae o array em letras maiusculas
var array2 = ["lolo"]
var maiuscula = array2.map((maiuscula) => maiuscula.toUpperCase());

console.log("letras maiusculas: " + maiuscula)

//deixar o array em letras minusculas
var array3 = ["LOLO"]
var minuscula = array2.map((minuscula) => minuscula.toLowerCase());

console.log("letras minusculas: " + minuscula)


//deixe tudo ao quadrado
var numeros = [1, 2, 3, 4, 5]
var elevado = numeros.map((number) => number ** 2)

console.log("numeros ao quadrado: " + elevado)

//formatar dados de um array de objetos
var arrayObj = [
    {nome: "lolo", idade: 16},
    {nome: "mari", idade: 17},
    {nome: "ket", idade: 79}
];

const formatar = arrayObj.map(
pessoa => `${pessoa.nome} tem ${pessoa.idade} anos`)
console.log(formatar);

//extrair nomes de um array de objetos
var semIdade = arrayObj.map(pessoa => `${pessoa.nome}`)
console.log(semIdade);

var palavras = ["mariana", "lolo"]
var caracteres = palavras.map(letras => `${letras.length}`)
console.log(caracteres)