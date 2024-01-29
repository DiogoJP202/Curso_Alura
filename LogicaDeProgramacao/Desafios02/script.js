// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let dia = prompt("Qual é o dia da semana de hoje?");
dia = dia.toLowerCase();

if(dia === "sábado" | dia === "sabado" | dia === "domingo"){
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

let num = prompt("Me de um número... ");

if(num === 0){
    alert(num + " é neutro!");
} else if(num < 0){
    alert(num + " é negativo!");
} else {
    alert(num + " é positivo!");
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

let points = Math.random() * 100;
points = points.toFixed();

points >= 100 ?alert("Parabéns, você venceu!") :alert("Tente novamente para ganhar.");

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

let saldo = Math.random() * 10000;
saldo = saldo.toFixed(2);

alert(`Alerta! Seu saldo atual é de ${saldo} R$.`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

let nome = prompt("Me informe seu nome, por favor: ");
alert("Seja muito bem vindo " + nome + "!");