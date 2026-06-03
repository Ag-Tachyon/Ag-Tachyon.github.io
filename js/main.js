import { fetchData } from "./api.js";
import { iniciarBanner } from "./banner.js";
import { mensajeAleatorio } from "./search.js";
import { iniciarBannerMosaico } from "./bannerMosaico.js";

async function intit() {
    try {
        const datos = await fetchData("../json/bannerPrincipalBd.json");
        iniciarBanner(datos);

        const mensajes = await fetchData("../json/mensajesBusquedaBd.json");
        mensajeAleatorio(mensajes)

        const datosMosaico = await fetchData("../json/bannerMosaico.json");
        iniciarBannerMosaico(datosMosaico)
        
    } catch(error) {
        console.error("Error al inicializar la app:", error);
    }
}

intit();