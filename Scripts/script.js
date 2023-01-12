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
//if para achar o numero

//usar o numero digitado para botar as cartas com um while

