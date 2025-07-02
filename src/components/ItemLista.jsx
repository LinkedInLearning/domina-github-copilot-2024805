import React from 'react';

const ItemLista = ({ nombre, descripcion }) => {
  return (
    <li>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
    </li>
  );
};

export default ItemLista;
