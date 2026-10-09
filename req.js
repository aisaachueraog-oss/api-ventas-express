import http from "node:http";
const server = http.createServer(async (req, res) => {
    console.log("Request received");

    try {

        const datos = await ObtenerDatos();
        res.end("Cantidad de elementos: " + datos.length);
    } catch (error) {

        console.log("Ocurrió un error:", error);

        res.end("No se pudieron obtener los datos");
    }

});

server.listen(3000, () => {

    console.log("Server is running on http://localhost:3000");
});

async function ObtenerDatos() {
    try {
        const endpoint = "https://microsoftedge.github.io/Demos/json-dummy-data/5MB-min.json";
        const respuesta = await fetch(endpoint);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log("Error al obtener los datos:", error);

    }

}