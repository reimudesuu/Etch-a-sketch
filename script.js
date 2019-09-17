const container = document.querySelector("#container")
let black = true;






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
//paint squares black on mouseover effect if black is true
function tileBlack(){
    if(black == true){
        for(tile of tiles){
            tile.addEventListener("mouseover",function(event){
            event.target.style.backgroundColor = "black";})
}
}






}
tileBlack()

function tileClear(){
    for(let tile of tiles){
        const button = document.querySelector("#clear");
    button.addEventListener('click', event => {
    tile.style.backgroundColor = "white";
    })
    }}
    
    
    tileClear();


//make rainbow button capable of changing black variable to false. if it is false paint squares with random generated colours.
function rainbowTile(){
    black = false;
    const rainbow = document.querySelector("#rainbow")
    rainbow.addEventListener('click', event => {
        if(black !== true){    
            for(tile of tiles){
                
                let randomnum = Math.floor(Math.random()*255)
                let randomnum2 = Math.floor(Math.random()*255)
                let randomnum3 = Math.floor(Math.random()*255)
                tile.addEventListener("mouseover",function(event){
                event.target.style.backgroundColor = `rgb(${randomnum}, ${randomnum2}, ${randomnum3})`;})}
    }
})}
//make black button capable of changing black variable to true"
function blackButton(){
     const paintitblack = document.querySelector("#black")
     paintitblack.addEventListener('click', event => {
     location.reload()
    })
   }
rainbowTile();
blackButton();


