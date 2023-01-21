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

   
    const end = confirm('Gostaria de jogar novamente');

    if ( end === true){
        window.location.reload(true);
    }
}

function turnCard(){
    firstCard.classList.remove('turn');
    secondCard.classList.remove('turn');
    
    cardsReset();
}

function cardsReset(){
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
            
            console.log(firstCard)
            console.log(secondCard)

            if ( firstCard.innerHTML === secondCard.innerHTML){
                
                geted+=2;                             
                cardsReset();
                endGameVerification();
            }else{
                
                setTimeout(turnCard, 1000);                
            }
        }
    }
    
}

function renderizeDeck(){

    const table = document.querySelector('.table');

    for( let i = 0; i < deck.length; i++){

        let template = `
            <li class="card" onclick="turnCard(this)">
                <div class='front-face face'>
                    <img src="Pictures/back.png">
                </div>
                <div class='back-face face'>
                    <img src="Pictures/${deck[i]}.gif">
                </div>
            </li>          
        `;

        table.innerHTML = table.innerHTML + template;

    }

}


function comparator() { 
	return Math.random() -0.5;
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
    const clock = document.querySelector('.clock');
    
    time++;
    
    clock.innerHTML = time;
    
}

function initializing (){
    cardsQuantity = Number(prompt('Escolhe um número de cartas entre 4 e 14:'));

    while( invalidGame() ){
        cardsQuantity = Number(prompt('Escolhe um número de cartas entre 4 e 14:'));
    }

    idInterval = setInterval(timer, 1000);

    deckGenerator();

}

initializing();