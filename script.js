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

let grid = document.querySelector('.grid');
let currentPlayer = '';

function divGenerator() {
  for (let index = 0; index < 9; index += 1) {
    let div = document.createElement('div');
    div.addEventListener('click', Jogar)
    div.innerText = 'x'
    div.className = 'celula'
    div.id = index;
    grid.appendChild(div)   
  }
}

function Jogar(event) {
  let alvo = event.target;

  let player = document.querySelector('#player');

  if (currentPlayer === 'X' || currentPlayer == '') {
    player.innerText = 'Vez do jogador O';
    currentPlayer = 'O'
  } else {
    player.innerText = 'Vez do jogador X'
    currentPlayer = 'X'
  }
} 



divGenerator()


