const container = document.querySelector('#container');
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('style', 'width: 40px; height: 40px;');
        row.appendChild(cell);
    }
}

const cells = document.querySelectorAll('.cell');
const cell = document.querySelector('.cell');
cells.forEach( (cell) =>  {
    cell.addEventListener('mouseover', () => {
        cell.setAttribute('style', 'background-color: grey; width: 40px; height: 40px;');
    })
})

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    cells.forEach((cell) => {
        cell.setAttribute('style', 'background-color: white; width: 40px; height: 40px;');
    })
})

const size = document.querySelector('#size');
size.addEventListener('click', () =>{
    let row = container.firstElementChild;
    while (row) {
        container.removeChild(row);
        row = container.firstElementChild;
    }
})

size.addEventListener('click', () => {
    let gridSize = prompt('Write the new grid size...');
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let i = 0; i < gridSize; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }

    const cells = document.querySelectorAll('.cell');
    const cell = document.querySelector('.cell');
    gridSize = 640/gridSize;
    cells.forEach((cell) => {
        cell.setAttribute('style', `width: ${Number(gridSize)}px; height: ${Number(gridSize)}px;`);
    })

    cells.forEach( (cell) =>  {
        cell.addEventListener('mouseover', () => {
            cell.setAttribute('style', `background-color: grey; width: ${Number(gridSize)}px; height: ${Number(gridSize)}px;`);
        })
    })
    const reset = document.querySelector('#reset');
    reset.addEventListener('click', () => {
        cells.forEach((cell) => {
            cell.setAttribute('style', `background-color: white; width: ${Number(gridSize)}px; height: ${Number(gridSize)}px;`);
        })
    })
})