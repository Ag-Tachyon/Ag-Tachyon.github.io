import { fetchData } from "./api.js";

const datos = await fetchData("../json/bannerPrincipalBd.json");
const bannerContainer = document.querySelector('.banner-container');
const datosArray = Object.keys(datos); // -> Debemos tener en cuenta que esto solo retorna la Keys, entonces no tenemos sus propiedades (nombre, title, etc, en este caso)
const overlay = document.getElementById('overlay')

datosArray.forEach(element => {
    
    const bannerTags = datos[element].tipo.map(tag => `<span class="banner__tags">${tag}</span>`).join("");
    
    // Como "datosArray" solo tiene las keys, tenemos que acceder a "datos" con el "element" y luego sí a la propiedad que queremos (img) -> datos[element].img;
    let bannerArticle = `
        <article class="banner__article" style="--bg: url(${datos[element].img})">   
                <div class="banner__info-container">
                    <h2 class="banner__title">
                        ${datos[element].title}
                    </h2>
                    <div class="banner__tags-container">
                        ${bannerTags}
                    </div>
                    <p class="banner__description">
                        ${datos[element].textoInfo}
                    </p>
                    <a href="" class="banner__link" style="--color-principal: ${datos[element].colorPrincipal};">Conoce más</a>
                </div>
            </article>
    `
    bannerContainer.insertAdjacentHTML('afterbegin' , bannerArticle)
});

const timeFunction = ()=> {
    setTimeout(() => {
            overlay.classList.add('active') // El active es para poder activar la transición
    } , 3000)
}
timeFunction() // Tenemos que llamarlo una vez por fuera para que el addEventListener del overlay se pueda ejecutar


let indiceActualDelBanner = 0;
let cantBanners = datosArray.length;
overlay.addEventListener('transitionend' , () => {

    if (!overlay.classList.contains('active')) return;
    /** Evita el doble disparo de 'transitionend' cuando el overlay se aclara, ya que el compu 
    detecta las transiciones (sin importar si es de negro a trans o viceversa) y se ejecutará siempre,
    entonces habrá veces que cuando pase de negro a transparente (hay una transición) el overlay
    entrará con "active" y el listener se ejecutará, no queremos eso, para eso es este if, si tiene active, ignora
    la transición hasta que no tenga el active. */
    indiceActualDelBanner = (indiceActualDelBanner + 1) % cantBanners;
    
    bannerContainer.style.transform = `translateX(-${indiceActualDelBanner * 100}%)`;
    overlay.classList.remove('active');

    timeFunction() // Como el overlay no tiene "active" volvemos a ejecutar el tiempo
})

