function getSize(num) {
    let size = 640/num;
    const cells = document.querySelectorAll('.cell');
    const cell = document.querySelector('.cell');
    cells.forEach(() => {
        cell.setAttribute('style', `width: ${size}; height: ${size}`)
    });
    return size;
}
