// 1- visualizzare l'elemento al click del bottone
const play = document.querySelector('.play');
let grid = document.getElementById('field');
let valuesBombs = [];

play.addEventListener('click', function(){
    let row_cell;
    let option = document.getElementById("select");
    row_cell = parseInt( option.value );
    document.querySelector('.grid').innerHTML = "";
    switch (row_cell){
        case 10 :
            console.log('hai scelto il livello 1');
            document.querySelector('.grid').style.visibility = "visible";
            document.getElementById("info").style.display = "none";
            createGrid(row_cell);
            break;
        case 9 :
            console.log('hai scelto il livello 2');
            document.querySelector('.grid').style.visibility = "visible";
            document.getElementById("info").style.display = "none";
            createGrid(row_cell);
            break;
        case 7 :
            console.log('hai scelto il livello 3');
            document.querySelector('.grid').style.visibility = "visible";
            document.getElementById("info").style.display = "none";
            createGrid(row_cell);
            break;
        default:
            alert('seleziona il livello di difficoltà');
    }
})

// funzione per creare la singola cella

function createGridSquare(number, row_cell){
    const currentElement = document.createElement ('div'); 
    currentElement.classList.add('box');
    let sideLength = `calc(100% / ${row_cell})`;
    currentElement.style.width = sideLength;
    currentElement.style.height = sideLength;
    currentElement.innerText = number;
    return currentElement;
}

function createGrid(row_cell){
    valuesBombs = [];
    generateBombs(row_cell)
    console.log(valuesBombs)
    for(let i=0; i < row_cell * row_cell; i++){
        const currentSquare = createGridSquare(i+1, row_cell);
        currentSquare.addEventListener('click', function(){
            const activeCells = document.querySelectorAll('.blue')
            if(valuesBombs.includes(parseInt(currentSquare.innerText))){
                for(i=0; i<row_cell * row_cell; i++){
                    if(valuesBombs.includes(parseInt(grid.childNodes[i].innerText))){
                        grid.childNodes[i].classList.add('red');
                    }
                }
                alert(`Hai perso. Il tuo punteggio è ${activeCells.length}`)
            }
            
            else if(activeCells.length == row_cell * row_cell - valuesBombs.length){
                for(i=0; i<row_cell * row_cell; i++){
                    if(valuesBombs.includes(parseInt(grid.childNodes[i].innerText))){
                        grid.childNodes[i].classList.add('red');
                    }
                }
                alert(`Hai vinto!`)
            }

            else{
                this.classList.add('blue');
            }
            console.log(this.innerText)
        },{once: 'true'});
        grid.appendChild(currentSquare);
    }
}

function generateBombs(row_cell){
    console.log(row_cell)
    for (i=0; i<16; i++){
        let randomValue = Math.floor(Math.random() * row_cell * row_cell) + 1;
        if(valuesBombs.includes(randomValue)){
            i--;
        }
        else{
            valuesBombs.push(randomValue)
        }
    }
}

function refreshPage(){
    window.location.reload();
}