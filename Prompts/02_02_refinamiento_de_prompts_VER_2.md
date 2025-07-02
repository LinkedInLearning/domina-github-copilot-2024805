# Pruebas Unitarias

Crea pruebas unitarias utilizando Vitest + React Testing Library siguiendo estas especificaciones:

**ESTRUCTURA REQUERIDA:**
- Aplica el patrón AAA (Arrange, Act, Assert) en cada prueba
- Agrupa pruebas relacionadas usando describe()
- Nombres descriptivos que expliquen el comportamiento esperado
- Setup y cleanup apropiados

**TIPOS DE PRUEBAS A INCLUIR:**
1. Renderizado básico y contenido
2. Interacciones del usuario (clicks, inputs, formularios)
3. Manejo de props y estados
4. Casos edge y manejo de errores
5. Accesibilidad básica

**BUENAS PRÁCTICAS:**
- Usa data-testid solo cuando sea necesario, prefiere queries semánticas
- Simula dependencias externas con vi.mock()
- Pruebas independientes (no dependan entre sí)
- Comentarios solo para lógica compleja de testing
- Nombres de pruebas en formato "should [behavior] when [condition]"

**EJEMPLO ESPERADO:**
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm Component', () => {
  it('should render login form with email and password fields', () => {
    // Arrange
    render(<LoginForm />);
    
    // Act & Assert
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('should call onSubmit with form data when submitted with valid inputs', async () => {
    // Arrange
    const mockOnSubmit = vi.fn();
    const user = userEvent.setup();
    render(<LoginForm onSubmit={mockOnSubmit} />);
    
    // Act
    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/password/i), 'password123');
    await user.click(screen.getByRole('button', { name: /login/i }));
    
    // Assert
    expect(mockOnSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123'
    });
  });

  it('should display error message when email is invalid', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<LoginForm />);
    
    // Act
    await user.type(screen.getByLabelText(/email/i), 'invalid-email');
    await user.click(screen.getByRole('button', { name: /login/i }));
    
    // Assert
    expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
  });
});