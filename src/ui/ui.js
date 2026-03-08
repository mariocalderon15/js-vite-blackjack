export function mostrarCartaConAnimacion(carta, divCartas) {
    const contenedor = document.createElement('div');
    contenedor.classList.add('carta-contenedor');

    const back = document.createElement('img');
    back.src = 'assets/cartas/grey_back.png';
    back.classList.add('carta', 'back');

    const front = document.createElement('img');
    front.src = `assets/cartas/${carta}.png`;
    front.classList.add('carta', 'front');

    contenedor.appendChild(back);
    contenedor.appendChild(front);
    divCartas.appendChild(contenedor);

    const index = divCartas.children.length - 1;
    contenedor.style.transform = `translate(-200px, -200px) rotate(-20deg) scale(0.5) translateX(${ index * 20 }px)`;
    contenedor.style.opacity = 0;

    setTimeout(() => {
        contenedor.style.transition = 'all 0.5s ease';
        contenedor.style.transform = 'translate(0,0) rotate(0deg) scale(1)';
        contenedor.style.opacity = 1;
    }, 50);

    setTimeout(() => {
        contenedor.classList.add('voltear');
    }, 600);
}

export function actualizarPuntos(puntos, elemento){
    elemento.textContent = puntos;
}

export function mostrarMensaje(mensaje){
    setTimeout(() => alert(mensaje), 1000);
}