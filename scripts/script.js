// INICIAR MINHAS VARIÁVEIS
 
let board = ['', '','', '','', '','', '','']; //Tabuleiro
let playerTime = 0; //Vez do jogador
let symbols = ['o', 'x']; // Simbolos que representa o Escudo e Espada


// Quando clicar em um dos quadrados, eu coloco o icone do Board
function handleMove(position){ 

    if(board[position] == ''){ // Se nao estiver vazio eu nao posso atualizar o tabuleiro
        board[position] = symbols[playerTime]

        if (playerTime == 0) { // Troco a vez dos jogadores 
         playerTime = 1;
        }else{
            playerTime = 0;
        }
    }
}
