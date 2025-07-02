import Destino from "../components/Destino";

function Home() {
  const destinos = [
    {
      nombre: "Destinos de Playa",
      descripcion: "Relájate en playas prístinas con aguas cristalinas.",
      imagen: "/Tropical_beach_LIL_192401.jpeg"
    },
    {
      nombre: "Aventuras en la Montaña",
      descripcion: "Explora impresionantes cadenas montañosas y rutas de senderismo.",
      imagen: "/Hiking_trail_through_redwood_forest_LIL_114268.jpeg"
    },
    {
      nombre: "Tours por la Ciudad",
      descripcion: "Experimenta culturas vibrantes en increíbles ciudades de todo el mundo.",
      imagen: "/Paris_city_LIL_193338.jpeg"
    }
  ];
  
  return (
    <div>
      <h2 className="mb-3">Bienvenido a Viajes Odisea IA</h2>
      <p className="lead">¡Descubre destinos increíbles y planifica tu viaje perfecto con nosotros!</p>
      <div className="row mt-4">
        {destinos.map((destino, index) => (
          <Destino destino={destino} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;