import { fetchData } from "./api.js";
import { iniciarBanner } from "./banner.js";

async function intit() {
    try {
        const datos = await fetchData("../json/bannerPrincipalBd.json");
        iniciarBanner(datos);
        
    } catch(error) {
        console.error("Error al inicializar la app:", error);
    }
}

intit();