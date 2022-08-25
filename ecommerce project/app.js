let grid = document.querySelector('.grid-card');
for (let i = 1; i < 8; i++) {
    let itemGrid = document.querySelector('.item-grid')
    let clone = grid.cloneNode(true);
    itemGrid.appendChild(clone);
}