/**  DogApi.js con una función asincrona getDogs(n) que retorne un array con los datos de n perros aleatorios. */


// axios para hacer peticiones a la API
import axios from 'axios';

let url = `https://dog.ceo/api/breeds/image/random/`; 
// let dogs = [];

async function getDogs(n){
    try {
        let endpoint = `${url}${n}`;
        const respuesta = await axios.get(endpoint);

        let urls = respuesta.data.message;

        // map para almacenar objetos dog en un array
        let dogs = urls.map((u) => {
            // Obtiene nombre del perro:
            // Separar por "/"
            let parts = u.split("/"); // parts = ["https:", "", "images.dog.ceo", "breeds", "hound-afghan", "n02088094_1003.jpg"]
            // El nombre de la raza está en la posición 4
            let name = parts[4].replace("-", " "); 
            
            // Almacena nombre + url del perro en un objeto:
            let dog = { name: name, url: u};

            // Almacena en array de objetos dogs:
            return dog; 

        });
        
        return dogs;
    } 
    catch (err) {
        console.error(err); 
        return []; 
    }
}

export default getDogs;


/* RESPUESTA:
{
    "message": [
        "https://images.dog.ceo/breeds/pyrenees/maggie1.jpg",
        "https://images.dog.ceo/breeds/terrier-andalusian/El-Bodeguero-Andaluz-caracteristicas-de-un-perro-ratonero-cachorro_9f98dd41-7aa4-4bd7-9554-eb616aafa4a0.jpg",
        "https://images.dog.ceo/breeds/mastiff-indian/Indian_Mastiff.jpg",
        "https://images.dog.ceo/breeds/pyrenees/maggie1.jpg",
        "https://images.dog.ceo/breeds/pyrenees/maggie1.jpg"
    ],
    "status": "success"
}

*/