window.onload = () => {
    initializeGrid()
}

let initializeGrid = () => {
    // Initialize Grid Container with Assigned Class/Style
    const gridContainer = document.createElement("div")
    gridContainer.classList.add("grid-container")
    document.body.appendChild(gridContainer)
    // Create 16 x 16 number of Divs within Container and ensure they are sized in a way that ensures 16 x 16 container layout
    for (i = 0; i < (16*16); i++) {
        let gridSquare = document.createElement("div")
        gridSquare.classList.add("grid-square")
        gridContainer.appendChild(gridSquare)
    }
}