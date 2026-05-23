import { fetchData } from "./api.js";

const datos = await fetchData("../json/bannerPrincipalBd.json");

const bannerContainer = document.querySelector('.banner-container');

const datosArray = Object.keys(datos); // -> Debemos tener en cuenta que esto solo retorna la Keys, entonces no tenemos sus propiedades (nombre, title, etc, en este caso)

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


