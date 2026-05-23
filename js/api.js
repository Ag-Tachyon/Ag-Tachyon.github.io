export async function fetchData(url){
    try{
        const answer = await fetch(url);
        
        if(!answer.ok) throw new Error(`Error al cargar datos de: ${url}`);
        return await answer.json()

    }catch(error){
        console.error("Error en la petición:", error);
        return null;
    }
}


