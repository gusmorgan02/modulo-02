const prompt = require('prompt-sync')();
let time = [];
let continuar =  true;

 function mostraMenu(){
   console.log("\n==========================");
   console.log("------SISTEMA DE GAMES------ ")
   console.log("1 - Cadastra");
   console.log("2 - Deletar");
   console.log("3 - mostra equipe");
   console.log("4 - calculo media da equipe");
   console.log("5 - sair");
   console.log("6 - atualizar pontos");
   
 }
function mostraEquipe(){
if (time.length === 0){
   return;
}
for (let i = 0;i < time.length; i++ ){
   let jogador = time[i];
   console.log((i + 1) + "."+ jogador.nome + " | função" + jogador.funcao + " | pontuação:"+ jogador.pontuacao);
}
}
function cadastraJogador (){
   let nomeJogador = prompt("Digite o nome do jogador:",);
   let funcaoJogador = prompt("Digite a função no time:  ");
   let pontuacaoJogador = Number(prompt("Digite a pontuação: "));
   if(isNaN(pontuacaoJogador)){
      console.log("pontuação invalida");
      return;
   } else{
      let recruta = {
         nome: nomeJogador,
         funcao: funcaoJogador,
         pontuacao:pontuacaoJogador,
      }
       time.push(recruta);
      console.log( "Jogador: " + recruta.nome + "foi cadastrado com sucesso");
   }
      
}
function deletarJogador(){
   if(time.length === 0){
         console.log("Nenhum jogador cadastrado");
         return;
      }
      let nomeDeletado = prompt("Digite o nome a ser deletado: ");
      let indexDeletado = -1;
      for (let i = 0; i < time.length;i++){
         if(time[i].nome === nomeDeletado){
            indexDeletado = i;
            break;
         }
      }
      
      if(indexDeletado === -1){
          console.log("jogador não encontrado");
          return;
      }
      time.splice(indexDeletado,1);
      console.log("jogador deletado com sucesso");
}
function calculoDamedia(){
   if(time.length === 0){
      console.l("nenhum jogador cadastrdo");
      return;
   }
   let totalPontos = 0;
   for( let i = 0; i < time.length;i++){
      totalPontos = totalPontos + time[i].pontuacao;
   }
  let mediaPontos = totalPontos / time.length;
  console.log("o time possui uma pontuação media de :", mediaPontos)
}

function buscarJogador(nomeDesejado) { 

console.log("Buscando por: " + nomeDesejado + "..."); 

let encontrou = false; 



for (let i = 0; i < equipe.length; i++) { 

let jogadorAtual = equipe[i]; 



if (jogadorAtual.nome === nomeDesejado) { 

console.log("JOGADOR ENCONTRADO!");

console.log("Nome: " + jogadorAtual.nome + " | Pontos: " + jogadorAtual.pontuacao); 

encontrou = true; 

break; 

} 

} 

if (encontrou === false) { 

console.log("O jogador " + nomeDesejado + " não faz parte da nossa equipe."); 

} 

} 
   function atualizarPontuacao(){
      console.log("\n--- ATUALIZAÇÃO DE RANKING ---");
      let nomeProcurado= prompt("Qual o nome do jogador que você quer atualizar?");
      let encontrado = false;
  for(let i = 0; i < time.length; i++){
   let jogadorAtual =  time[i];
   if(jogadorAtual.nome === nomeProcurado){
    let pontosNovos = Number(prompt("Quantos pontos ele ganhou?"))
    jogadorAtual.pontuacao += pontosNovos
    console.log("sua atualizaçao foi realizada com sucesso")
    encontrado = true;
    break;
   
}
   
    
}
 if(encontrado === false){
   console.log("jogador não encontrado no sistema")
 }
   }
while(continuar === true){
   mostraMenu();
let opcao = prompt("Digite sua opcao:")
 if(opcao === "1"){
   cadastraJogador();
   }  else if(opcao === "2") {
      deletarJogador();
   } else if(opcao === "3"){
      mostraEquipe();
   } else if(opcao === "4"){
      calculoDamedia();
   } else if(opcao === "5"){
      continuar = false;
   } else if(opcao === "6"){
      atualizarPontuacao();
   }
    else 
      {
      console.log("opção invalida, digite outra opção");
   }
}
   