import React from 'react';

// Recibe props de selección y callback para manejar selección
const ItemLista = ({ nombre, descripcion, seleccionado, onSeleccionar }) => {
  return (
    <li
      className={`list-group-item mb-2${seleccionado ? ' border border-primary border-3' : ''}`}
      style={{ cursor: 'pointer' }}
      onClick={onSeleccionar}
      data-testid="item-lista"
    >
      <h2 className="h5 mb-1">{nombre}</h2>
      <p className="mb-0">{descripcion}</p>
    </li>
  );
};

export default ItemLista;
