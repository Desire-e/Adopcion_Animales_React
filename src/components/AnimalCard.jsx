/** Componente AnimalCard.jsx
    - Debe mostrar, en una tarjeta (un <div> con un diseño sencillo), 
      la foto de un animal pasado por props. 
    - Además, mostrar el nombre y un botón de adoptar.

    - Al pulsar el botón de adoptar se debe generar un modal con un mensaje de 
      "Has adoptado a <nombre>". El modal debe poder cerrarse.
    - Mientras se están haciendo peticiones, debe mostrarse un “loading spinner” 
      o algún indicador visual de que se está cargando la página.
*/


function AnimalCard({image, name, adopted}) {
    return (
        <div className='card m-2' style={{width:'200px'}}>
            <img 
            className='card-img-top' 
            style={{ height: '200px', objectFit: 'cover' }}  
            src={image} alt={name} 
            />

            <div className="card-body text-center">
                <p className="card-title fw-bold">{name}</p>
                {/* <button className="btn btn-primary btn-sm">Adoptar</button> */}

                {/* Botón para abrir el modal */}
                <button 
                className="btn btn-primary btn-sm" 
                type="button"
                data-bs-toggle="modal" 
                data-bs-target="#miModal"
                // Evento JSX - da estado al modal para indicar si se renderiza, o no
                onClick={() => adopted(name)}>
                    Adoptar
                </button>
            </div>            
        </div>
    );
}

export default AnimalCard;


