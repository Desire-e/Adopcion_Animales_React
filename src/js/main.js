// ---- Referencias al DOM
const error = document.getElementById("error");
// modal
const modalO = document.getElementById("poke-modal-overlay");
const modal = document.getElementById("poke-modal");


// ---- Inicializacion
window.addEventListener("load",init);

function init(){
    error.textContent="";
    
    // Eventos
    //cerrar modal al clickar fuera de él
    modalO.addEventListener("click", (e) => {
        // Si el clic ocurrió directamente en el overlay (no en el modal)
        if (e.target === modalO) {
            modalO.style.display = "none";
            modal.style.display = "none";
        }
    });


    // evento load: cuando la imagen de la API se cargue en el DOM, spinner desaparece
    imgGato.addEventListener("load", ()=>{ spinnerGato.style.display='none'; })
    imgPerro.addEventListener("load", ()=>{ spinnerPerro.style.display='none'; })
}



// ---- Funciones

function showMoreInfo(e, arrayData){
    // pName.textContent = "";
    // pExp.textContent = "";
    // pHeight.textContent = "";
    // pWeight.textContent = "";

    // let pokemon = e.currentTarget; 
    // let id = parseInt(pokemon.getAttribute('data-id'));

    // for(let obj of arrayData){
    //     if (obj.id === id){
    //         pName.textContent = obj.name;
    //         pExp.textContent = obj.base_experience;
    //         pHeight.textContent = obj.height;
    //         pWeight.textContent = obj.weight;

    //         break;
    //     }
    // }

    modalO.style.display="flex"; // has adoptado a...
    modal.style.display="flex";   
}