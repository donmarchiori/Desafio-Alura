alert('Boa vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random()*numeroMaximo) + 1;
console.log(numeroSecreto)
let  chute;
let tentativas = 1;


// Enquanto o chute não for igualao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //Se chute for igual ao númro secreto
    if (numeroSecreto == chute) {
        break;
        
    } else{
        if (numeroSecreto < chute){
            alert(`O Número secreto é menor que ${chute}`);

        } else {
            alert(`O Número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}
// Operador Ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí!! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas > 1){
  //  alert(`Isso aí!! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
  //  alert(`Isso aí!! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}




//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

//let contador = 1;
//while (contador <= 10) {
  //  console.log(contador);
    //contador++;
//}


// Crie um contador que comece em 10 e vá até 0 usando um loop while. Mostre cada número.


//let contador = 10;
//while (contador >= 0) {
  //  console.log(contador);
    //contador--;
//}


//Crie um programa de contagem regressiva. Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.

//let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

//while (numeroMaximo >= 0) {
  //  console.log(numeroMaximo);
    //numeroMaximo--;
//}

//Crie um programa de contagem progressiva. Peça um número ao usuario e conte de 0 até esté número, usando um loop while no console do navegador.

//let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");;
//let contador = 0;

//while (contador <= numeroMaximo) {
  //  console.log(contador);
    //contador++
//}


//Exercicio I

//alert ('Boas vindas ao nosso site');
//let nome = 'lua';
//let idade = 25;
//let numeroDeVendas = 50;
//let saldoDisponivel = 1000;
//alert('Erro! Preencha todos os campos');
//let mensagemDeErro = 'Erro! Preencha todos os campos';

//alert(mensagemDeErro);
//nome = prompt('Qual seu nome');
//idade = prompt('Qual sua idade');
//if (idade >= 18){
    //console.log ('Pode tirar Habilitação');
    //}

//Exercicio II

//let dia = prompt('Que dia da semana é hoje?');
//if(dia == 'Sábado' || dia == 'Domingo'){
   //alert('Bom Final de Semana');
//}else{
    //alert('Boa semana')
//}