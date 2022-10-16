const container = document.querySelector('#container');
const resize = document.querySelector('#resize');

resize.addEventListener('click', () => {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  changeSize()
})

function makeGrid(size) {
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let c = 0; c < (size * size); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "gridItem";
    };
  };
  
makeGrid(16);

function changeSize() {
  
  let value = parseInt(prompt("Please enter a value between 2-100.", 16));
  if (value < 2 || value > 100)
  { alert("Invalid."); 
} else {
  container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
  makeGrid(value);
}
}


function random(number) {
  return Math.floor(Math.random()*number);
}

function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

container.addEventListener('mouseover', 
  (event) => event.target.style.backgroundColor = bgChange()
);
 
    
  