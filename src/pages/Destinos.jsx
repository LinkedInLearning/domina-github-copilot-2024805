import React, { useState } from 'react';
import ItemLista from '../components/ItemLista';

const destinosAsia = [
  { id: 1, nombre: 'Kyoto, Japón', descripcion: 'Famoso por sus templos y jardines tradicionales.' },
  { id: 2, nombre: 'Bangkok, Tailandia', descripcion: 'Conocido por sus mercados flotantes y templos.' },
  { id: 3, nombre: 'Bali, Indonesia', descripcion: 'Popular por sus playas y cultura única.' },
  { id: 4, nombre: 'Seúl, Corea del Sur', descripcion: 'Una mezcla de modernidad y tradición.' },
  { id: 5, nombre: 'Beijing, China', descripcion: 'Hogar de la Gran Muralla y la Ciudad Prohibida.' },
  { id: 6, nombre: 'Hanoi, Vietnam', descripcion: 'Famoso por su casco antiguo y cultura vibrante.' },
  { id: 7, nombre: 'Mumbai, India', descripcion: 'Conocido por su energía y Bollywood.' },
  { id: 8, nombre: 'Singapur', descripcion: 'Una ciudad-estado moderna con jardines impresionantes.' },
  { id: 9, nombre: 'Phuket, Tailandia', descripcion: 'Famoso por sus playas y vida nocturna.' },
  { id: 10, nombre: 'Luang Prabang, Laos', descripcion: 'Conocido por sus templos y paisajes naturales.' },
];

const Destinos = () => {
  // Estado para la lista de destinos y el destino seleccionado
  const [ordenados, setOrdenados] = useState(false);
  const [seleccionado, setSeleccionado] = useState(null);

  // Ordena la lista alfabéticamente por nombre si se activa
  const destinos = ordenados
    ? [...destinosAsia].sort((a, b) => a.nombre.localeCompare(b.nombre))
    : destinosAsia;

  // Maneja el click en el botón de ordenar
  const handleOrdenar = () => setOrdenados((prev) => !prev);

  // Maneja la selección de un destino
  const handleSeleccionar = (id) => setSeleccionado(id);

  return (
    <div>
      <h1>Destinos Turísticos en Asia</h1>
      <button className="btn btn-primary mb-3" onClick={handleOrdenar}>
        {ordenados ? 'Quitar orden alfabético' : 'Ordenar alfabéticamente'}
      </button>
      <ul className="list-group">
        {destinos.map(destino => (
          <ItemLista
            key={destino.id}
            nombre={destino.nombre}
            descripcion={destino.descripcion}
            seleccionado={seleccionado === destino.id}
            onSeleccionar={() => handleSeleccionar(destino.id)}
          />
        ))}
      </ul>
    </div>
  );
};

// Función utilitaria para sumar dos dígitos
export function sumar(a, b) {
  // Retorna la suma de a y b
  return a + b;
}

export default Destinos;
