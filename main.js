let grid = document.getElementById('grid');
grid.className = 'grid';
let gridWidthHeight = 40;
// let color = 'black';
let resetButton = document.getElementById('resetBtn');
let blackButton = document.getElementById('blackBtn');
let multiColor = document.getElementById('multiColor');
let singleColor = document.getElementById('singleColor');

resetButton.addEventListener('click', resetBoard);
blackButton.addEventListener('click', blackBoard);
multiColor.addEventListener('click', changeColor);
singleColor.addEventListener('mouseover', solid);

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
  // gridCell.innerHTML = changeColor();
}

function solid() {
  resetBoard();
  console.log("test");
  gridCell.forEach(cell => {
    cell.addEventListener('mouseover', chooseSingleColor);
  })
}

function chooseSingleColor() {
  let finall = document.querySelector('.singleInput').value;
  this.style.backgroundColor = finall;
}

function getRandomColor() {
  let white = 0xFFFFFF;
  let randomNumber = Math.floor(Math.random() * white).toString(16);
  let randColor = randomNumber.padStart(6, 0);   
  return `#${randColor.toUpperCase()}`;
}

function fillBackgColor() {
  this.style.backgroundColor = getRandomColor();
}

function changeColor() {
  resetBoard();
  gridCell.forEach(cell => {
    cell.addEventListener('mouseover', fillBackgColor);
  })
}

function resetBoard() {
  for (let i = 0; i < gridCell.length; i++) {
    gridCell[i].style.backgroundColor = 'white';
  }
  gridCell.forEach(cell => {
    cell.removeEventListener('mouseover', fillBackgColor);
  })
  gridCell.forEach(cell => {
    cell.removeEventListener('mouseover', chooseSingleColor);
  })
}

function blackBoard() {
  for (let i = 0; i < gridCell.length; i++) {
    gridCell[i].style.backgroundColor = 'black';
  }
}

createGrid(16);