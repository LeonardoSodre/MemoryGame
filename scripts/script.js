// INICIAR MINHAS VARIÁVEIS
 
let board = ['', '','', '','', '','', '','']; //Tabuleiro
let playerTime = 0; //Vez do jogador
let symbols = ['o', 'x']; // Simbolos que representa o Escudo e Espada
let gameOver = false;


// Quando clicar em um dos quadrados, eu coloco o icone do Board
function handleMove(position){ 

    if(gameOver){
        return;
    }

    if(board[position] == ''){ // Se nao estiver vazio eu nao posso atualizar o tabuleiro
        board[position] = symbols[playerTime];

        gameOver = isWin(); //Sempre que eu conseguir fazer a jogada, verifico se houve vencedor

        if(gameOver == false){        
          
            playerTime = (playerTime == 0)? 1: 0
          /*  if (playerTime == 0) { // Troco a vez dos jogadores 
            playerTime = 1;
            }else{
                playerTime = 0;
                }*/
            }
        } 
    return gameOver;
}


function isWin(){ // Função que verifica se houve vencedor

    // Variavel com as possibilidades de vitorias
    let winStates= [
        
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ] 
    
    for(let i =0; i<winStates.length;i++){
        
        let sequence = winStates[i];

        let position1 = sequence[0];
        let position2 = sequence[1];
        let position3 = sequence[2];
        
        if (board[position1] == board[position2] &&
            board[position1] == board[position3] &&
            board[position1] != ''){
            return true;
        }

    }
    return false;
}

