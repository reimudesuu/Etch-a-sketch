const container = document.querySelector("#container")
black = true;






function number(){
    gridNumber = Number(prompt("How many grids?"))
    return gridNumber
}

function makeGrid(parameter){
    for(i = 0; i < parameter*parameter; i++){
        const newElement = document.createElement("div")
        const modifiedElement = container.appendChild(newElement)
        modifiedElement.classList.add("newDiv")}}
        
number()
makeGrid(gridNumber)
container.style.display = "grid";
container.style.gridTemplateRows = `repeat(${gridNumber},1fr)`;
container.style.gridTemplateColumns = `repeat(${gridNumber},1fr)`;
container.style.height ="600px";
container.style.width = "800px";
container.style.border ="0.2em inset black";
container.style.border = "inset";

const tiles = document.getElementsByClassName("newDiv")

function tileBlack(){
    if(black){
        for(tile of tiles){
            tile.addEventListener("mouseover",function(event){
            event.target.style.backgroundColor = "black";})
}
}






}
tileBlack()

function tileClear(){
    for(tile of tiles){
    const button = document.querySelector("#clear");
    button.addEventListener('click', event => {
    tile.style.backgroundColor = "white";
    })
    }}
    
    
    tileClear();