document.addEventListener('DOMContentLoaded',() =>{ // Garanto que o tabuleiro carregou

    let squares = document.querySelectorAll(".square"); // Pego os elementos da Classe Square do HTML

    squares.forEach((square) =>{ // Para cada um dos Elementos eu adiciono um novo evento de Click, para saber quem foi clicado
            square.addEventListener('click', handleClick); 

    })

    
}) 

function handleClick(event){

   let square = event.target; // Square vai representar o elemento que foi clicado
    let position = square.id; // Guardo como posição o ID do elemento clicado
    handleMove(position);
    updateSquares(); 

}


function updateSquares(){ // Atualizo os quadrados
    let squares = document.querySelectorAll(".square"); // Pego os elementos da Classe Quadrados do HTML

    squares.forEach((square) =>{  // Varro todos os quadrados

        let position = square.id; // Pego o ID do quadrado e uso de posição
        let symbol = board[position];     

        if(symbol != ''){ // Se estiver vazio a posição, eu colo o simbolo
            square.innerHTML = `<div class ='${symbol}'></div>`
        }

    })
}