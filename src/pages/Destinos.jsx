import React from 'react';
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
  return (
    <div>
      <h1>Destinos Turísticos en Asia</h1>
      <ul>
        {destinosAsia.map(destino => (
          <ItemLista key={destino.id} nombre={destino.nombre} descripcion={destino.descripcion} />
        ))}
      </ul>
    </div>
  );
};

export default Destinos;
