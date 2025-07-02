Examina este prompt y sugiere mejoras, aplica buenas prácticas para prompts eficientes.

Crea pruebas unitarias utilizando vitest + React Testing Library.
Estructura las pruebas y el código de manera clara, especificando cada fase.
Incluye comentarios relevantes dentro del código.
Prefiere la legibilidad del código en las pruebas
  
# Ejemplo:

```javascript

import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import MyComponent from './MyComponent';


/// Evalua que el componente despliegue el texto esperado
it('debe desplegar el texto correcto', () => {
    render(<MyComponent />);
    const element = screen.getByText(/texto esperado/i);
    expect(element).toBeInTheDocument();
});

```

  
