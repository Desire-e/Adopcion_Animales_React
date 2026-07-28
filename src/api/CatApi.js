/** CatApi.js con una función asincrona getCats(n) que retorne un array con los datos de n gatos aleatorios. */
/** 
Al pulsar el botón de adoptar se debe generar un modal con un mensaje de "Has adoptado a <nombre>". El modal debe poder cerrarse.
Mientras se están haciendo peticiones, debe mostrarse un “loading spinner” o algún indicador visual de que se está cargando la página.
*/

// axios para hacer peticiones a la API
import axios from 'axios';

let url = `https://api.thecatapi.com/v1/images`; 
// let cats = [];

async function getCats(n){
    try {

        // Obtiene un array de objetos con datos basicos (id, imagen, altura, peso)
        // Solo aquellos objetos con breeds (+info en petición de respuesta larga)
        let shortEndpoint = `${url}/search?limit=${n}&has_breeds=1`;
        const shortResponse = await axios.get(shortEndpoint);

        // Obtiene promesas de un array de objetos con más datos de cada objeto anterior (nombre, origen ...)
        const promises = shortResponse.data.map( resp => {
            let longEndpoint = `${url}/${resp.id}`; 
            return axios.get(longEndpoint); //devuelve un objeto largo por cada respuesta corta, almacenado en array promises
        });

        
        // Agrupa las promesas y las ejecuta en paralelo + espera a que todas terminen
        // Obtiene array de respuestas
        const longResponses = await Promise.all(promises);

        // Recorre array de respuestas 
        let cats = longResponses.map((res) => {
            // Obtiene nombre del gato (algunos no tienen, si no tienen se imprime "Gato"):
            let name = res.data.breeds?.[0]?.name || "Gato"; //res.data.breeds[0].name;
            let url = res.data.url;
            
            // Almacena nombre + url del gato:
            let cat = { name: name, url: url};

            // Almacena en array de objetos gatos:
            return cat;
        });



        // Limito el array a contener n objetos gato
        // **Aunque ponga limit, el array siempre se devuelve con 10 objetos, en el caso de esta API, por eso limito length
        let catsResponse = cats.slice(0, n);
        // slice(start, end) devuelve un nuevo array que empieza en el índice start (incluido) y termina en end (no incluido).    


        return catsResponse;        
    } 
    catch (err) {
        console.error(err); 
        return []; 
    }
}

export default getCats;


/* SHORT RESPONSE:
  {
    "id": "40g",
    "url": "https://cdn2.thecatapi.com/images/40g.jpg",
    "width": 640,
    "height": 426
  },
*/

/* LONG RESPONSE:
[
    {
        "id":"0XYvRd7oD",
        "width":1204,"height":1445,
        "url":"https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
        "breeds": [
            {
                "weight":{"imperial":"7  -  10","metric":"3 - 5"},
                "id":"abys",
                "name":"Abyssinian",
                "temperament":"Active, Energetic, Independent, Intelligent, Gentle",
                "origin":"Egypt",
                "country_codes":"EG",
                "country_code":"EG",
                "life_span":"14 - 15",
                "wikipedia_url":"https://en.wikipedia.org/wiki/Abyssinian_(cat)" 
            }
        ]
    }, 
    
    {...}
]
 */
