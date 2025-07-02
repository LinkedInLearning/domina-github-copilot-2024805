# Demostración de Agencia de Viajes

Un sitio web básico construido con Vite, React, React Router y Vitest para pruebas.

## Features

- **Vite**: Herramienta de construcción rápida y servidor de desarrollo
- **React**: Biblioteca moderna para construir interfaces de usuario
- **React Router**: Enrutamiento del lado del cliente para navegación en aplicaciones de una sola página
- **Vitest**: Marco de pruebas unitarias rápido con soporte integrado

## Estándares de Código

### Requisitos Antes de Cada Commit
- Ejecuta `npm run lint` para asegurarte de que el código cumpla con los estándares del proyecto
- Asegúrate de que todos los componentes estén ubicados correctamente (`src/components` o `src/pages`)
- Si agregas una nueva funcionalidad, actualiza el archivo `README.md`
- Verifica que todas las pruebas unitarias pasen ejecutando `npm run test`
- Si es necesario, actualiza `src/test/setup.js` para configurar el entorno de pruebas

### Buenas Prácticas con JavaScript y React
- Utiliza sintaxis moderna de JavaScript (ES6+) y componentes funcionales de React
- Usa Hooks de React (`useState`, `useEffect`, etc.) cuando sea apropiado
- Mantén los componentes modulares y que sigan el principio de responsabilidad única
- Los componentes reutilizables deben estar en `src/components/`
- Los componentes que representan páginas completas deben ir en `src/pages/`

### Estilos
- Prioriza el uso de clases de bootstrap siempre que sea posible. Si es necesario, puedes definir clases personalizadas de bootstrap. Crear CSS personalizado debe ser la última opción.
- Prefiere los estilos en línea con clases utilitarias en JSX; usa `App.css` o `index.css` solo como respaldo


## Ejecución del programa

### Requisitos Previos

- Node.js (versión 16 o superior)
- npm

### Instalación

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```

### Desarrollo

Inicia el servidor de desarrollo:
```bash
npm run dev
```

Visita http://localhost:5173 para ver la aplicación.

### Pruebas

Ejecuta las pruebas:
```bash
npm run test
```

Ejecuta las pruebas una vez (modo CI):
```bash
npm run test:run
```

### Construcción

Construye para producción:
```bash
npm run build
```

Vista previa de la construcción para producción:
```bash
npm run preview
```

### Linter

Verifica la calidad del código:
```bash
npm run lint
```

## Estructura del Proyecto

```
src/
├── components/         # Componentes de UI reutilizables
│   ├── Destino.jsx     # Componente para mostrar un destino
│   ├── Destino.test.jsx # Pruebas unitarias para el componente Destino
│   ├── HeaderBar.jsx   # Barra de encabezado
│   ├── ItemLista.jsx   # Componente para elementos de lista
├── pages/              # Componentes de página
│   ├── Home.jsx        # Página de inicio
│   ├── Nosotros.jsx    # Página sobre nosotros
│   ├── Contacto.jsx    # Página de contacto
│   ├── Contacto.test.jsx # Pruebas unitarias para la página de contacto
│   ├── Destinos.jsx    # Página de destinos
├── test/               # Configuración de pruebas
│   └── setup.js        # Archivo de configuración de pruebas
├── App.jsx             # Componente principal de la aplicación
├── App.css             # Estilos de la aplicación
├── App.test.jsx        # Pruebas unitarias para el componente principal
├── main.jsx            # Punto de entrada de la aplicación
└── index.css           # Estilos globales
```

## Rutas Disponibles

- `/` - Página de inicio con destacados de destinos
- `/nosotros` - Sobre la agencia de viajes
- `/contacto` - Información de contacto y formulario
- `/destinos` - Explora los destinos disponibles
