function getRow(num) {
    const container = document.querySelector('#container');
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let i = 0; i < num; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
}

function getGrid(num) {
    for (let i = 0; i < num; i++) {
        getRow(num);
    }
}

getGrid(16);

const cells = document.querySelectorAll('.cell');
const cell = document.querySelector('.cell');

cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.setAttribute('style', 'background-color: grey;')
    })
})

function resetDraw() {
    const cells = document.querySelectorAll('.cell');
    const cell = document.querySelector('.cell')
    cells.forEach(() => {
        cell.setAttribute('style', 'backgroundcolor: white;')
    });
    const button = document.querySelector('#reset');
    button.addEventListener('click', () => {
        let num = prompt("write the box size");
        console.log(num);
        return num;
    });
}


