import React, { useState } from 'react';

const Destino = ({ destino }) => {
    const [destacado, setDestacado] = useState(false);

    const destacar = () => {
        setDestacado(true);
    };
    const eliminarDestacado = () => {
        setDestacado(false);
    };

    return (
        <>
            <div
                role="button"
                className={`col-md-4 mb-3${destacado ? ' destacado' : ''}`}
                onClick={destacar}
            >
                <div className="card h-100 d-flex flex-column">
                    <img src={destino.imagen} className="card-img-top" alt={destino.nombre} />
                    <div className="card-body flex-grow-1">
                        <h3 className="card-title">{destino.nombre}</h3>
                        <p className="card-text">{destino.descripcion}</p>
                    </div>
                    {destacado && <button className="btn btn-primary mt-auto" onClick={(e) => { e.stopPropagation(); eliminarDestacado(); }}>Destino Seleccionado</button>}
                </div>
            </div>
        </>
    );
};

export default Destino;