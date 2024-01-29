let tentativas = 1;
let nivel;

let dificuldade = () => {
    nivel = prompt("Escolha o número da dificuldade, sedo 1 (fácil), 2 (neútro), 3 (Difícil) e 4 (Especialista).");
    
    numberCheck(nivel, dificuldade);
    if(nivel == 1) return nivel = 10;
    if(nivel == 2) return nivel = 100;
    if(nivel == 3) return nivel = 1000;
    if(nivel == 4) return nivel = 10000;
};

dificuldade();
const numeroSecreto = random();

function game(){
    let chute = prompt(`Escolhar um número entre 0 e ${nivel}: `);

    chute = Number.parseInt(chute);
    console.log(chute, numeroSecreto);

    numberCheck(chute, game);
    proximidade(chute, numeroSecreto);
};

function random(n){
    let number = Math.random() * nivel;
    return Number.parseInt(number);
};

function numberCheck(variable, func){
    if(isNaN(Number.parseInt(variable))){
        alert("Número inválido, tente novamente: ");
        func();
    };
};

function proximidade(numeroMedido, numeroReferencia){
    if(numeroMedido > numeroReferencia){
        alert(`Seu número ${numeroMedido} é MAIOR do que o número secreto, tente de novo: `);
        tentativas++;

        game();
    };

    if(numeroMedido < numeroReferencia){
        alert(`Seu número ${numeroMedido} é MENOR do que o número secreto, tente de novo: `);
        tentativas++;

        game();
    };

    tentativas++;
};

const gameGanho = tent => tent == 1 ?"tentaviva" :"tentativas";

game();
alert(`Parabéns, você acertou o número secreto com ${tentativas} ${gameGanho(tentativas)}!`);