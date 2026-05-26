export function extraerData(DatosRecibidos) {
    const datosArray = Object.keys(DatosRecibidos); // -> Debemos tener en cuenta que esto solo retorna la Keys, entonces no tenemos sus propiedades (nombre, title, etc, en este caso)
    return datosArray;
}