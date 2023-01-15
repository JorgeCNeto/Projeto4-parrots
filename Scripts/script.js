let cards = prompt("Escolhe um número de cartas entre 4 e 14");


function start();

function start (){
    prompt("Escolhe um número de cartas entre 4 e 14");
    if (cards % 2 !== 0) {
        
        while (cards % 2 !==0) {
            cards = prompt("Escolhe um número de cartas entre 4 e 14");
        }
        
    } else if(cards < 4 || cards > 14){
        
        while (cards < 4 || cards > 14) {
            cards = prompt("Escolhe um número de cartas entre 4 e 14");
        }
    } 
}


let cardsArray = [];

function transformacaoEmArray(){
    for (let i = 0; i < cardsArray.length; index++) {
        cardsArray.push = document.querySelector('.card');
    
    }
}
//if para achar o numero

//usar o numero digitado para botar as cartas com um while


function flipCard(CardSelected) {
    
    
    const turnback = document.querySelector('.card .back');
    console.log(turnback);
    turnback.classList.add('escondido');

    const turnfront = document.querySelector('.card .front');
    turnfront.classList.remove('escondido');
    

    
}

function verification(verify){
    const boxSelected = document.querySelector(`${verify} .selecionado`);

    if (condition) {
        
    }
}

    /*function desmarcacaoAnterior(seletor){
        
        const caixaSelecionada = document.querySelector(`${seletor} .selecionado`);

    
        if (caixaSelecionada !== null){
            
            caixaSelecionada.classList.remove('selecionado');
        }
    } */