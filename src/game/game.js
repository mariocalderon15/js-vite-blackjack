import { Deck } from './deck.js';
import { Player } from './player.js';

export class Game {
    constructor(){
        this.deck = new Deck();
        this.jugador = new Player('Jugador');
        this.computadora = new Player('Computadora');
    }

    valorCarta(carta){
        const valor = carta.substring(0, carta.length -1);
        return isNaN(valor) ? (valor === 'A' ? 11 : 10) : Number(valor);
    }

    nuevoJuego(){
        this.deck = new Deck();
        this.jugador.reset();
        this.computadora.reset();
    }

    pedirCartaJugador(){
        const carta = this.deck.pedirCarta();
        let valor = this.valorCarta(carta);
        if(this.jugador.puntos + valor > 21 && carta.startsWith('A')){
            valor = 1;
        }
        this.jugador.recibirCarta(carta, valor);
        return carta;
    }

    pedirCartaComputadora(){
        const carta = this.deck.pedirCarta();
        let valor = this.valorCarta(carta);

        if(this.computadora.puntos + valor > 21 && carta.startsWith('A')){
            valor = 1;
        }

        this.computadora.recibirCarta(carta, valor);
        return carta;
    }

    determinarGanador(){
        const j = this.jugador.puntos;
        const c = this.computadora.puntos;

        if(j > 21) return 'Perdiste';
        if(c > 21) return 'Ganaste';
        if(j === c) return 'Empate';
        return (j > c) ? 'Ganaste' : 'Perdiste';
    }
}