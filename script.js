let inputSize;

createGrid = function(){
    document.querySelectorAll('.cube').forEach(el => el.remove());
    inputSize = document.getElementById('size').value;

    let size = 512/inputSize;
    let grid = (512/size)**2
    if(inputSize <2 || inputSize >100){
        alert("sorry can't do that, pick from 2-100")
    }
    else{
        for (step = 0; step < grid; step++){
    const drawGrid = document.getElementById('etchContainer');
    let drawnGrid = document.createElement('div')
    drawnGrid.classList.add('cube')
    drawnGrid.style.width = size+'px'
    drawnGrid.style.height = size+'px'
    drawGrid.appendChild(drawnGrid)
    drawnGrid.addEventListener('mouseover',() => drawnGrid.style.backgroundColor = 'black')
    
    }}
}

