// const diceContainer = document.querySelector('.dice__container');
// let facesArray = ["dice__cara-uno","dice__cara-dos","dice__cara-tres","dice__cara-cuatro","dice__cara-cinco","dice__cara-seis"];

// let numRandom = (array) => {
//     let arrayLong = array.length;
//     return Math.floor(Math.random() * arrayLong);
// }

// export let drawDice = () => {
//     //TRUCO: Vaciamos el contenedor antes de dibujar para destruir el dado anterior
//     diceContainer.innerHTML = ""; 

//     let classDice = facesArray[numRandom(facesArray)];

//     let diceFaceMarkup = `<div class="dice ${classDice}" id="dice">
//                     <div class="dice__face dice__face--uno"></div>
//                     <div class="dice__face dice__face--dos"></div>
//                     <div class="dice__face dice__face--tres"></div>
//                     <div class="dice__face dice__face--cuatro"></div>
//                     <div class="dice__face dice__face--cinco"></div>
//                     <div class="dice__face dice__face--seis"></div>
//                     <div class="dice__face dice__face--siete"></div>
//                 </div>`;

//     diceContainer.insertAdjacentHTML('beforeend', diceFaceMarkup); 
// }


// diceContainer.addEventListener('mouseleave', () => {
//     drawDice();
// });


/* 

EXISTEN VARIAS FORMAS DE HACER LO DEL DADO, TENGO DOS, LA DE ARRIBA LA HICE YO, PERO NO ES ÓPTIMA, MIENTRAS QUE LA DE ABAJO
ES MÁS ÓPITMA Y FLEXILE. EN VEZ DE BORRAR Y VOLVE A DIBUJAR EL HTML, LO QUE HACE ES QUE DIBUJA UNA SOLA VEZ EL DADO, Y CON EL EVENTLISTENER
BORRAMOS LA CLASE QUE ESTÉ EN EL ARRAY Y LUEGO ASIGAMOS OTRA.

*/


const diceContainer = document.querySelector('.dice__container');
let facesArray = ["dice__cara-uno","dice__cara-dos","dice__cara-tres","dice__cara-cuatro","dice__cara-cinco","dice__cara-seis"];

let numRandom = (array) => {
    return Math.floor(Math.random() * array.length);
}

// 1. Esta función inyecta la estructura fija una sola vez
export let iniciarDado = () => {
    let diceStructure = `<div class="dice" id="dice">
                    <div class="dice__face dice__face--uno"></div>
                    <div class="dice__face dice__face--dos"></div>
                    <div class="dice__face dice__face--tres"></div>
                    <div class="dice__face dice__face--cuatro"></div>
                    <div class="dice__face dice__face--cinco"></div>
                    <div class="dice__face dice__face--seis"></div>
                    <div class="dice__face dice__face--siete"></div>
                </div>`;
    
    diceContainer.insertAdjacentHTML('beforeend', diceStructure);
    lanzarDado(); // Tiramos el dado por primera vez para que no empiece vacío
}

// 2. Esta función cambia EXCLUSIVAMENTE la clase del dado real en el DOM
const lanzarDado = () => {
    const elDadoReal = document.getElementById("dice"); // Buscamos el elemento real que ya existe en el DOM
    
    if (elDadoReal) {
        // Quitamos todas las clases de caras anteriores para que no se encimen
        elDadoReal.classList.remove(...facesArray);
        
        // Elegimos la nueva cara aleatoria
        let nuevaClase = facesArray[numRandom(facesArray)];
        
        // La aplicamos
        elDadoReal.classList.add(nuevaClase);
    }
}

// 🎯 Escuchamos los eventos del mouse directamente en el contenedor
diceContainer.addEventListener('mouseleave', () => {
    lanzarDado(); // Cambia de cara instantáneamente al pasar el mouse por encima
});