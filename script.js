const combinacoes = [
  [0, 1, 2], // linha 1
  [3, 4, 5], // linha 2
  [6, 7, 8], // linha 3
  [0, 3, 6], // coluna 1
  [1, 4, 7], // coluna 2
  [2, 5, 8], // coluna 3
  [0, 4, 8], // diagonal esqueda direita
  [2, 4, 6] // diagonal direita esquerda
]

// global variables
let grid = document.querySelector('.grid');
let resetButton = document.querySelector('#reset');
let player = document.querySelector('#player');
let changePlayer = '';
let win = false;
let xplays = [];
let oplays = [];

// global events
resetButton.addEventListener('click', resetGame);
grid.addEventListener('click', checkWinCondition)

// calling functions
divGenerator();


// methods declaration
function divGenerator() {
  for (let index = 0; index < 9; index += 1) {
    let div = document.createElement('div');
    div.addEventListener('click', Jogar)
    div.className = 'celula'
    div.id = index;
    grid.appendChild(div)
  }
}

function Jogar(divEvent) {
  divEvent.preventDefault;

  if (win === false) {
    let alvo = divEvent.target;
    if (alvo.innerText !== '') {
      alert('illegal move')
    } else {
      if (changePlayer === 'O' || changePlayer == '') {
        xplays.push(parseInt(alvo.id, 10));
        changePlayer = 'X'
        player.innerText = 'Vez do jogador O';

      } else {
        oplays.push(parseInt(alvo.id, 10));
        changePlayer = 'O'
        player.innerText = 'Vez do jogador X'
      }
      alvo.innerText = changePlayer;
    }
  }
}

function resetGame() {
  window.location.reload();
}

function checkWinCondition() {
  for (let z = 0; z < xplays.length; z += 1) {
    for (let i = 0; i < combinacoes.length; i += 1) {
      for (let j = 0; j < combinacoes[i].length; j += 1) {
        if (xplays.includes(combinacoes[i][j]) && xplays.includes(combinacoes[i][j + 1]) && xplays.includes(combinacoes[i][j + 2])) {
          win = true;
          player.innerText = 'JOGADOR X VENCEU'
        } else if (oplays.includes(combinacoes[i][j]) && oplays.includes(combinacoes[i][j + 1]) && oplays.includes(combinacoes[i][j + 2])) {
          win = true;
          player.innerText = 'JOGADOR O VENCEU'
        }
      }
    }
  }

  if (xplays.length >= 5 || oplays.length >= 5) {
    if(!win) {
      console.log('game draw')
    }
  }
}