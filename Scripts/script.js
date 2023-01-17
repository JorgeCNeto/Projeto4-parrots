let cards = prompt("Escolhe um número de cartas entre 4 e 14");
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

    /*function desmarcacaoAnterior(seletor){
        
        const caixaSelecionada = document.querySelector(`${seletor} .selecionado`);

    
        if (caixaSelecionada !== null){
            
            caixaSelecionada.classList.remove('selecionado');
        }
    } */