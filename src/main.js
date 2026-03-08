import './style.css';
import { Game } from './game/game.js';
import { actualizarPuntos, mostrarMensaje, mostrarCartaConAnimacion } from './ui/ui.js';

const game = new Game();

const btnNuevoJuego = document.getElementById('btnNuevoJuego');
const btnPedir = document.getElementById('btnPedir');
const btnConceder = document.getElementById('btnConceder');

const small = document.querySelectorAll('small');
const divJugador = document.querySelector("#jugador-cartas");
const divComputadora = document.querySelector("#computadora-cartas");

btnNuevoJuego.addEventListener('click', ()=>{
    game.nuevoJuego();
    btnPedir.disabled = false;
    btnConceder.disabled = false;

    small.forEach(e => e.textContent = 0);
    divJugador.innerHTML = '';
    divComputadora.innerHTML = '';
});

btnPedir.addEventListener('click', ()=>{
    const carta = game.pedirCartaJugador();
    mostrarCartaConAnimacion(carta, divJugador);
    actualizarPuntos(game.jugador.puntos, small[0]);

    if(game.jugador.puntos > 21){
        btnPedir.disabled = true;
        btnConceder.disabled = true;
        jugarComputadora();
    }
});

btnConceder.addEventListener('click', ()=>{
    btnPedir.disabled = true;
    btnConceder.disabled = true;
    jugarComputadora();
});

function jugarComputadora(){
    do{
         const carta = game.pedirCartaComputadora();
    mostrarCartaConAnimacion(carta, divComputadora);
    actualizarPuntos(game.computadora.puntos, small[1]);
    }
   while( game.computadora.puntos < game.jugador.puntos && game.jugador.puntos <= 21);
    const resultado = game.determinarGanador();
    mostrarMensaje(resultado);
}