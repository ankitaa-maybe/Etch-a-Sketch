let grid = document.getElementById('grid');
grid.className = 'grid';

let gridWidthHeight = 40;

let clearButton = document.getElementById('clearBtn');
let blackButton = document.getElementById('blackBtn');

function createGrid(size) {
  grid.innerHTML = "";
  for (let i=0; i<(size*size); i++) {
    let gridCol = document.createElement('gridCol');
    gridCol.classList.add('col');
    grid.appendChild(gridCol);
  }
  gridCell = document.querySelectorAll('.col');
  gridCell.forEach(cell => {
    cell.style.width  = `${gridWidthHeight / size}rem`;
    cell.style.height = `${gridWidthHeight / size}rem`;
  })
}

function getRandomColor() {
  let white = 0xFFFFFF;
  let randomNumber = Math.floor(Math.random() * white).toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  return `#${randColor.toUpperCase()}`
}

function fillBackgColor() {
  this.style.backgroundColor = getRandomColor();
}

function changeColor() {
  gridCell.forEach(cell => {
    cell.addEventListener('mouseover', fillBackgColor);
  })
}

function clearBoard() {
  for (let i = 0; i < gridCell.length; i++) {
    gridCell[i].style.backgroundColor = 'white';
  }
}

function blackBoard() {
  for (let i = 0; i < gridCell.length; i++) {
    gridCell[i].style.backgroundColor = 'black';
  }
}

createGrid(16);
changeColor();

clearButton.addEventListener('click', clearBoard);
document.body.appendChild(clearButton);
blackButton.addEventListener('click', blackBoard);
document.body.appendChild(blackButton);