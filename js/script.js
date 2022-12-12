// 1- visualizzare l'elemento al click del bottone
const play = document.querySelector('.play');

play.addEventListener('click', function(){
    let row_cell;
    let option = document.getElementById("select");
    row_cell = parseInt( option.value );
    document.querySelector('.grid').innerHTML = "";
    switch (row_cell) {
        case 10 :
            console.log('hai scelto il livello 1');
            document.querySelector('.grid').style.visibility = "visible";
            document.getElementById("info").style.display = "none";
            break;
        case 9 :
            console.log('hai scelto il livello 2');
            document.querySelector('.grid').style.visibility = "visible";
            document.getElementById("info").style.display = "none";
            break;
        case 7 :
            console.log('hai scelto il livello 3');
            document.querySelector('.grid').style.visibility = "visible";
            document.getElementById("info").style.display = "none";
            break;
        default:
            alert('seleziona il livello di difficoltà');
    }

  // 3- cliccando sulle celle si colorano e compare il numero in console

  let grid = document.getElementById('field');
  
  for(let i=0; i < row_cell * row_cell; i++){
      const currentSquare = createGridSquare(i+1, row_cell);
      currentSquare.addEventListener('click', function(){
          this.classList.toggle('blue');
          console.log(this.innerText)
      });
      grid.appendChild(currentSquare);
  }
})

// 2- creare la griglia 10x10 

function createGridSquare(number, row_cell){
    const currentElement = document.createElement ('div'); 
    currentElement.classList.add('box');
    let sideLength = `calc(100% / ${row_cell})`;
    currentElement.style.width = sideLength;
    currentElement.style.height = sideLength;
    currentElement.innerText = number;
    return currentElement;
}