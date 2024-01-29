// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
for(let i = 0; i <= 10; i++){
    console.log(i);
} 

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
for(let i = 10; i <= 0; i--){
    console.log(i);
} 

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
function numberCheck(variable, func){
    console.log();
    if(isNaN(Number.parseInt(variable))){
        alert("Número inválido, tente novamente: ");
        return func();
    } 
}

function contagemR(){
    let numero = prompt("Escolha um número para a uma contagem regressiva no console de seu browser(maior que 0): ");

    numberCheck(numero, contagemR);
    while(numero >= 0){
        console.log(numero);
        numero--;
    }
}

contagemR();

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

function contagemp(){
    let numero = prompt("Escolha um número para a uma contagem regressiva no console de seu browser(menor que 10): ");

    numberCheck(numero, contagemR);
    while(numero <= 10){
        console.log(numero);
        numero++;
    }
}

contagemp();