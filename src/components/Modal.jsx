function Modal({name, close}){
    if (!name) return null; // no renderiza nada si no hay nombre

    return(
        <>
            <div className="modal show d-block" tabIndex="-1" aria-labelledby="miModalLabel" aria-modal="true" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h5 className="modal-title" id="miModalLabel">Adopción</h5>
                        </div>

                        <div className="modal-body">
                            <p>¡Has adoptado a {name}!</p>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" onClick={close}>Aceptar</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Fondo semi-transparente */}
            <div className="modal-backdrop fade show"></div>
        </>
    )

}

export default Modal;

