const combinacoes =[
  [0,1,2], // linha 1
  [3,4,5], // linha 2
  [6,7,8], // linha 3
  [0,3,6], // coluna 1
  [1,4,7], // coluna 2
  [2,5,8], // coluna 3
  [0,4,8], // diagonal esqueda direita
  [2,4,6] // diagonal direita esquerda
]

// global variables
let grid = document.querySelector('.grid');
let resetButton = document.querySelector('#reset');
let changePlayer = '';

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
  let alvo = divEvent.target;
  let player = document.querySelector('#player');

  if (alvo.innerText === ''){
    if (changePlayer === 'O' || changePlayer == '') {
      changePlayer = 'X'
      player.innerText = 'Vez do jogador O';
      console.log(changePlayer)
    } else {
      changePlayer = 'O'
      player.innerText = 'Vez do jogador X'
      console.log(changePlayer)
    }
  } else {
    alert('illegal move')
  }
  alvo.innerText = changePlayer;
}

function resetGame() {
  window.location.reload();
}

function checkWinCondition(event) {

}