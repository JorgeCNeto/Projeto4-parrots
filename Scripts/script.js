/*let cards = prompt("Escolhe um número de cartas entre 4 e 14");
    if (cards % 2 !== 0) {
        
        while (cards % 2 !==0) {
            cards = prompt("Escolhe um número de cartas entre 4 e 14");
        }
        
    } else if(cards < 4 || cards > 14){
        
        while (cards < 4 || cards > 14) {
            cards = prompt("Escolhe um número de cartas entre 4 e 14");
        }
    } 




let cardsArray = [
    "Pictures/bobrossparrot.gif",
    "Pictures/bobrossparrot.gif",
    "Pictures/explodyparrot.gif",
    "Pictures/explodyparrot.gif",  
    "Pictures/fiestaparrot.gif",
    "Pictures/fiestaparrot.gif",
    "Pictures/metalparrot.gif",
    "Pictures/metalparrot.gif",,
    "Pictures/revertitparrot.gif",
    "Pictures/revertitparrot.gif",
    "Pictures/tripletsparrot.gif",
    "Pictures/tripletsparrot.giff",
    "Pictures/unicornparrot.gif",
    "Pictures/unicornparrot.gif",
];
    
let numberOfCards = [];

cardsArray.sort(shuffle);
for (let i = 0; i < 2; i++) {
    for (let i = 0; i < cards/2; i++) {
        numberOfCards.push(cardsArray[i])
    }
}

function shuffle() { 
	return Math.random() - 0.5; 
}

for (let i = 0; i < cards; i++) {
    const painel = document.querySelector(".deck");        
    painel.innerHTML += `
                        <div onclick="flipCard(this)" class="card exibicao">
                            <div class="front escondido">
                                <img src="${i}">
                            </div>
                            <div class="back">
                                <img src="Pictures/back.png">
                            </div>
                        </div>
                        `
 
}  

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

    function desmarcacaoAnterior(seletor){
        
        const caixaSelecionada = document.querySelector(`${seletor} .selecionado`);

    
        if (caixaSelecionada !== null){
            
            caixaSelecionada.classList.remove('selecionado');
        }
    } */

let cardsQuantity = 0;

const cards = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot'
];

const deck = [];

let firstCard, secondCard;

let plays = 0;

let geted = 0;

let time = 0;

let idInterval;

function endGameVerification(){
    if ( geted === deck.length ){
        setTimeout(endGame, 500);
    }
}

function endGame(){
    
    clearInterval(idInterval);

    alert(`Você ganhou em ${plays} jogadas! A duração do jogo foi de ${time} segundos!`);

    //const fim = prompt('Gostaria de jogar novamente');
    const fim = confirm('Gostaria de jogar novamente');

    if ( fim === true){
        window.location.reload(true);
    }
}

function turnCard(){
    firstCard.classList.remove('turn');
    secondCard.classList.remove('turn');
    
    resetarCartas();
}

function resetarCartas(){
    firstCard = undefined;
    secondCard = undefined;
}

function turnCard(card){
    
    if ( card.classList.contains('turn') ){
        return;
    }

    if( firstCard !== undefined  && secondCard !== undefined){
        return;
    }

    card.classList.add('turn');

    plays++;

    if ( firstCard === undefined ){
        firstCard = card;
    }else{
        if ( secondCard === undefined){
            secondCard = card;
            
            if ( firstCard.innerHTML === secondCard.innerHTML){
                
                geted+=2;                             
                resetarCartas();
                endGameVerification();
            }else{
                
                setTimeout(turnCard, 1000);                
            }
        }
    }
    console.log(firstCard);
    
    console.log(secondCard);

}

function renderizeDeck(){

    const table = document.querySelector('.table');

    for( let i = 0; i < deck.length; i++){

        let template = `
            <li class="card" onclick="turnCard(this)">
                <div class='front-face face'>
                    <img src='Picture/back.png'>
                </div>
                <div class='back-face face'>
                    <img src='Picture/${deck[i]}.gif'>
                </div>
            </li>          
        `;

        table.innerHTML = table.innerHTML + template;

    }

}


function comparator() { 
	return Math.random() - 0.5;
}

function deckGenerator(){
    
    for( let i = 0; i < cardsQuantity / 2; i++ ){
        let card = cards[i];

        deck.push(card);
        deck.push(card);
    }
   
    deck.sort(comparator);

    renderizeDeck();
} 

function invalidGame(){
    
    if ( cardsQuantity % 2 === 1 || cardsQuantity < 4 || cardsQuantity > 14 || isNaN(cardsQuantity) ){
        return true;
    }
    return false;
}

function timer(){
    const relogio = document.querySelector('.relogio');
    
    time++;
    
    relogio.innerHTML = time;
    
}

function initializing (){
    cardsQuantity = Number(prompt('Com quantas cartas você quer jogar?'));

    while( invalidGame() ){
        cardsQuantity = Number(prompt('Com quantas cartas você quer jogar?'));
    }

    idInterval = setInterval(timer, 1000);

    deckGenerator();

}

initializing();