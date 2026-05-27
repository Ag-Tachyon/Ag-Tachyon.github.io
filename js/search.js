let numAleatorio = (longitud)=>{
    let resultadoAleatorio = Math.floor(Math.random() * longitud)
    return resultadoAleatorio
}

let asignarValores = (mensajes , numAleatorio)=>{
    const title = document.querySelector('.search__title');
    const inputSearch = document.querySelector('.search__input');

    if (title && inputSearch) {
        title.textContent = mensajes[numAleatorio].titulo;
        inputSearch.placeholder = mensajes[numAleatorio].placeholder;
    }
}

export let mensajeAleatorio = (mensajes)=>{
    let mensajesBdLong = mensajes.length;
    let numALeatorio = numAleatorio(mensajesBdLong);

    return asignarValores(mensajes , numALeatorio);
}

