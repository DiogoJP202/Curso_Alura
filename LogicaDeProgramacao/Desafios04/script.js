// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Boas-vindas.");

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
const nome = "Diogo";
console.log(`Olá, ${nome}`);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
alert(`Olá, ${nome}!`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
const linguagemDeProgramacao = prompt("Qual é a sua linguagem de programação predilheta? ");
console.log(`Hackiando ${nome} com ${linguagemDeProgramacao}...`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 5;
let valor2 = 20;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${valor1 + valor2}.`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${valor2 valor1}.`);

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
const idade = prompt('Me conte a sua idade: ');
idade >= 18 ? alert("Você é maior de idade!") : alert("Você é menor de idade!");

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
const numero = prompt("Insira um número: ");
if(numero == 0) alert(`${numero} é neutro.`);
if(numero > 0) alert(`${numero} é posítivo.`);
if(numero < 0) alert(`${numero} é negativo.`);

// Use um loop while para imprimir os números de 1 a 10 no console.
for(let n = 1;n <= 10; n++){
    console.log(n);
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = Math.random() * 10;
nota = nota.toFixed(2) + 1;
let aprovacao = nota => 7 ?"aprovado!" :"Reprovado!";

console.log(`Nota igual a ${nota}, você está ${aprovacao}`);

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
console.log(Math.random());

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let n = Math.random() * 11;
console.log(n.toFixed() + 1);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let n1 = Math.random() * 1001;
console.log(n1.toFixed() + 1);