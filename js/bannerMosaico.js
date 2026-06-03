import { extraerData } from "./extraerData.js";

const bannerContainer = document.querySelector(".gender__banner-container");

let datosBd = [];
let cantDatos = 0;
let indiceActualDelBanner = 0;

let dibujarBanner = (datosMosaico) => {
    datosBd = extraerData(datosMosaico)
    cantDatos = datosBd.length;
    
    datosBd.forEach(element => {
        let img = `<img src="${datosMosaico[element].img}" alt="">`;

        bannerContainer.insertAdjacentHTML('beforeend', img); 
    });
}

let timer = () => {
    setInterval(()=>{
        // 💡 El truco: El residuo (%) reinicia el índice a 0 cuando llega al límite
        indiceActualDelBanner = (indiceActualDelBanner + 1) % cantDatos;
        bannerContainer.style.transform = `translateY(-${indiceActualDelBanner * 100}%)`
    } , 3000)
}

export let iniciarBannerMosaico = (datosMosaico) => {
    dibujarBanner(datosMosaico)
    timer()
}