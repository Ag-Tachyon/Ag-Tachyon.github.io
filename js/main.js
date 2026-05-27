import { fetchData } from "./api.js";
import { iniciarBanner } from "./banner.js";
import { mensajeAleatorio } from "./search.js";

async function intit() {
    try {
        const datos = await fetchData("../json/bannerPrincipalBd.json");
        iniciarBanner(datos);

        const mensajes = await fetchData("../json/mensajesBusquedaBd.json");
        mensajeAleatorio(mensajes)
        
    } catch(error) {
        console.error("Error al inicializar la app:", error);
    }
}

intit();