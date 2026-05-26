import { extraerData } from "./extraerData.js";

const bannerContainer = document.querySelector('.banner-container');
const overlay = document.getElementById('overlay');

let datosArray = [];
let cantBanners = 0;
let indiceActualDelBanner = 0;

export let crearBanners = function(datos) {
    datosArray = extraerData(datos); 
    cantBanners = datosArray.length;
    
    datosArray.forEach(element => {
        const bannerTags = datos[element].tipo.map(tag => `<span class="banner__tags">${tag}</span>`).join("");
        
        let bannerArticle = `
            <article class="banner__article" style="--bg: url(${datos[element].img})">   
                <div class="banner__info-container">
                    <h2 class="banner__title">${datos[element].title}</h2>
                    <div class="banner__tags-container">${bannerTags}</div>
                    <p class="banner__description">${datos[element].textoInfo}</p>
                    <a href="" class="banner__link" style="--color-principal: ${datos[element].colorPrincipal};">Conoce más</a>
                </div>
            </article>
        `;
        bannerContainer.insertAdjacentHTML('beforeend', bannerArticle); 
    });
}

const timeFunction = () => {
    setTimeout(() => {
        overlay.classList.add('active');
    }, 3000);
}

overlay.addEventListener('transitionend', () => {
    if (!overlay.classList.contains('active')) return;
    /** Evita el doble disparo de 'transitionend' cuando el overlay se aclara, ya que el compu 
    detecta las transiciones (sin importar si es de negro a trans o viceversa) y se ejecutará siempre,
    entonces habrá veces que cuando pase de negro a transparente (hay una transición) el overlay
    entrará con "active" y el listener se ejecutará, no queremos eso, para eso es este if, si tiene active, ignora
    la transición hasta que no tenga el active. */

    indiceActualDelBanner = (indiceActualDelBanner + 1) % cantBanners;
    bannerContainer.style.transform = `translateX(-${indiceActualDelBanner * 100}%)`;
    overlay.classList.remove('active');
    timeFunction();
});

export function iniciarBanner(datos) {
    crearBanners(datos);
    timeFunction(); 
}