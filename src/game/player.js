export class Player {
    constructor(nombre){
        this.nombre = nombre;
        this.puntos = 0;
        this.cartas = [];
    }

    recibirCarta(carta, valor){
        this.cartas.push(carta);
        this.puntos += valor;
    }

    reset(){
        this.cartas = [];
        this.puntos = 0;
    }
}