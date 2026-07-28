/**  Componente AnimalCards.jsx
    - Debe tener un estado local animales (un array) inicializado vacío. 
    - En un useEffect, al montar el componente, llama a las funciones getDogs(5) 
      y getCats(5) para obtener 10 URLs (5 de perros, 5 de gatos). 
    - Por último, debe visualizar una tarjeta de AnimalCard por cada entrada del array.
*/

// Hooks usados de react:
// useState - Guarda un estado actual (guarda datos de respuesta de la api)
// useEffect - Para ejecutar efectos secundarios en los componentes (llamadas a la api)
import { useEffect, useState } from "react";

// Componente card
import AnimalCard from "./AnimalCard";
import LoadSpinner from "./Spinner";
import Modal from "./Modal";

// Funciones de peticiones a la api
import getDogs from "../api/DogApi";
import getCats from "../api/CatApi";



function AnimalCards() {
    
    // ---- USE STATE: estado del componente
    
    // Estado de animales almacenados, para mostrar los actuales
    const [animales, setAnimales] = useState([]);
    // animales -- estado (valor) actual; array de los animales recibidos por la api
    // setAnimales -- funcion para cambiar estado
    // useState([]) -- hook que inicializa estados; [] es estado inicial vacío (y el valor de animales)

    // Estado de carga, para loading spinner
    const [loading, setLoading] = useState(true);
    
    // Estado de adopción de un animal, para el modal
    const [adoptado, setAdoptado] = useState(null);




    // ---- MANEJADOR DE EVENTO: onclick sobre boton adoptar
    
    // Si se le pasa al estado un nombre, se muestra modal
    // Este manejador se le pasa al button de AnimalCard
    const handleAdoptado = (animalName) => { setAdoptado(animalName); }
    
    // Si se establece estado null, desaparece modal 
    // Este manejador se le pasa al button cerrar de Modal 
    const closeModal = () => { setAdoptado(null); }
    

    

    // ---- USE EFFECT: reacciones 

    useEffect(() => {
        async function cargarAnimales() {
            try {
                // Aparece spinner mientras se cargan...
                setLoading(true);
                

                // Peticiones en paralelo
                /* const dogs = await getDogs(5);
                const cats = await getCats(5);*/
                const [dogs, cats] = await Promise.all([getDogs(5), getCats(5)]);

                // Combinar arrays
                const todos = [...dogs, ...cats];

                // Manda a la función del useState para cambiarle el estado -- almacenado en array animales
                setAnimales(todos);
            } 
            catch (error) { console.error(error); } // **MOD??
            // Desparece spinner tras cargar
            finally{ setLoading(false); }
        }

        cargarAnimales();

    }, []); // array vacío -- este bloque se ejecuta solo al iniciar (inicializa datos)



    // ---- RENDERIZADO

    // Estado loading: Mientras tenga estado loading, carga componente Spinner
    if(loading){
        return( 
            <div className='container'>
                <div className="row justify-content-center">
                    <LoadSpinner />
                </div>
            </div>
        );
    }

    else return (
        // Estado animales: Agarra el estado actual (datos ultimos recibidos de la api) y 
        // carga datos en el componente
        <div className='container'>
            <div className="row justify-content-center">

                { animales.map((animal, index) => (
                <div className="col-auto" key={index}>
                    <AnimalCard
                    key={index}
                    name={animal.name}
                    image={animal.url}
                    adopted={handleAdoptado}
                    />
                </div>
                )) }
            </div>

            {/* Renderiza según estado del modal (con nombre para mostrar o null para ocultar) */}
            <Modal 
            name={adoptado} 
            // se le pasa funcion para cerrar el modal al clickar boton aceptar
            close={closeModal} 
            />

        </div>
    );
}

export default AnimalCards;


/******  USEEFFECT:

Hook de react. Para ejecutar efectos secundarios en los componentes.



1. Efectos secundarios (cualquier cosa que no sea renderizar JSX):
- Llamadas a APIs
- Escuchar eventos (scroll, resize)
- Manipular el DOM
- Timers (setTimeout, setInterval)
- Suscripciones



2. Sintaxis básica:
useEffect(() => {
    // código que se ejecuta

    return () => {
        // limpieza (opcional)
    };
}, [dependencias]);



3. Cuándo se ejecuta:
Depende del array de dependencias

a) Solo una vez:
- Llamadas a API al iniciar
- Inicializar datos

useEffect(() => { 
    console.log("Se ejecuta solo al cargar");
}, []);


b) Cada vez que cambia una variable
useEffect(() => {
    console.log("Cambió el contador");
}, [contador]);


c) En cada render
useEffect(() => {
    console.log("Se ejecuta siempre");
});



EJEMPLO:
import { useEffect, useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then(res => res.json())
      .then(data => setPokemons(data.results));
  }, []);

  return (
    <div>
      {pokemons.map(p => (
        <p key={p.name}>{p.name}</p>
      ))}
    </div>
  );
}

useEffect se ejecuta una sola vez, hace petición, guarda los datos en el estado



4. Limpieza:
Sirve para evitar fugas de memoria.

useEffect(() => {
  const handleScroll = () => console.log("scroll");

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

*/