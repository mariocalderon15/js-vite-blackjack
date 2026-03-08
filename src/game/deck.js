import _ from 'underscore';

export class Deck {
    constructor(){
        this.tipos = ['C', 'D', 'H', 'S'];
        this.especiales = ['A','J','Q','K'];
        this.deck = this.crearDeck();
    }

    crearDeck(){
        const deck = [];
        for(let i = 2; i <= 10; i++){
            for(const tipo of this.tipos){
                deck.push(i + tipo);
            }
        }
        for(const tipo of this.tipos){
            for(const especial of this.especiales){
                deck.push(especial + tipo);
            }
        }
        return _.shuffle(deck);
    }

    pedirCarta(){
        if(this.deck.length === 0){
            throw new Error('Deck vacío');
        }
        return this.deck.pop();
    }
}