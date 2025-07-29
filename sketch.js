const container = document.querySelector('.container');
const body = document.querySelector("body");

populate(16);
const resize = document.createElement("button");
resize.textContent = "Resize Grid";
resize.addEventListener("click", resizeGrid);

function resizeGrid() {
    const size = prompt("Enter a number between 1 and 100");
    if (size < 1 || size > 100) {
        alert("Number not in range. Please enter again.")
        return;
    }
    populate(size);
}

function populate(size) {
    container.innerHTML = '';

    for (let i=1; i<=(size**2); i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        const divDimension = (800 / size) - (4); 
        div.style.cssText = `min-width: ${divDimension}px; min-height: ${divDimension}px;` 
        container.appendChild(div);
    }
}
body.appendChild(resize);