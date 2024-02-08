// Desafio 01 - Estrutura de Dados, Funções e Condições

// Agora que já conhecemos as principais estruturas do JavaScript, vamos praticar um pouco?
// Com JavaScript, é claro!!! 🤓

// Para a próxima semana, faça o seguinte exercício:

// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
const hora = 10;

let mensagem;

if (hora >= 6 && hora < 18) {
  mensagem = "Claro";
} else {
  mensagem = "De noite";
}

console.log(mensagem);

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()
for (var i = 2; i <= 20; i += 2) {
    console.log(i);
}

console.log()

// 03 - crie uma função que exiba uma mensagem no console
function exibirMensagem() {
    console.log("A única maneira de alcançar o impossível é acreditar que é possível. - Charles Kingsleigh (personagem fictício em Alice no País das Maravilhas)");
}

exibirMensagem();

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function exibirNome(nome) {
  console.log(`Meu nome é: ${nome}`);
}

exibirNome("Larissa");

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function exibirInformacoes(nome, idade, estiloMusical) {
  console.log("Olá, sou " + nome + "! tenho " + idade + " anos e meu estilo musical preferido é " + estiloMusical + ".");
}

exibirInformacoes("Larissa", 25, "Pop");

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function exibirHoob(filme, musica) {
  console.log("Filme:" + filme);
  console.log("Música:" + musica );
}

exibirHoob("Simplesmente Acontece", "Counting Stars")

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função
let numero = 18;
let resultado = triploDoNumero(numero);

function triploDoNumero(numero) {
    return numero * 3;
}

console.log("O triplo de " + numero + " é: "+ resultado);

// 08 - crie uma função que  verifique se uma  variável é true ou false
function True(valor) {
  return valor === true;
}

console.log(True(true));

// 09 - Crie um array que receba 5 itens e exiba no console.
let microbiologiaDeAlimentos = ["Salmonella", "Listeria", "Clostridium botulinum", "Staphylococcus aureus", "Escherichia coli"];

console.log(microbiologiaDeAlimentos);

// 10 - Utilize um método para adicionar um nome ao inicio do array.
microbiologiaDeAlimentos.unshift("Bacillus cereus"); 

console.log(microbiologiaDeAlimentos);

// 11 - Utilize um método para remover o último nome do array.
microbiologiaDeAlimentos.pop();

console.log(microbiologiaDeAlimentos);

// 12 - Utilize um método para adicionar dois nomes ao fim do array.
microbiologiaDeAlimentos.push("Campylobacter", "Vibrio cholerae")

console.log(microbiologiaDeAlimentos);

// 13 - Utilize um método para remover o primeiro nome do array.
microbiologiaDeAlimentos.shift();

console.log(microbiologiaDeAlimentos);

// 14 - Utilize um método para adicionar no meio deste array.
let nome = ["João",  "Maria",  "Jose",  "Pedro"]

nome.splice(2, 0, "Gabriel");

console.log(nome);

// 15 - Utilize um método para organizar em ordem crescente o seguinte array:
 let numbers = [7,5,6,3,8,9,2,1,4]

 numbers.sort((a, b) => a - b);

console.log(numbers);




