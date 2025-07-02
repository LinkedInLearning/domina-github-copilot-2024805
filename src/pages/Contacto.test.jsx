import { render, screen, fireEvent } from '@testing-library/react';
import Contacto from './Contacto';
import { describe, it, expect } from 'vitest';

describe('Contacto Component', () => {
    it('renders the form', () => {
        render(<Contacto />);
        expect(screen.getByText('Contacto')).toBeInTheDocument();
        expect(screen.getByLabelText('Nombre:')).toBeInTheDocument();
        expect(screen.getByLabelText('Correo Electrónico:')).toBeInTheDocument();
        expect(screen.getByLabelText('Mensaje:')).toBeInTheDocument();
        expect(screen.getByText('Enviar Datos')).toBeInTheDocument();
    });

    it('updates the name state on input change', () => {
        render(<Contacto />);
        const nameInput = screen.getByLabelText('Nombre:');
        fireEvent.change(nameInput, { target: { value: 'Test Name' } });
        expect(nameInput.value).toBe('Test Name');
    });

    it('limpia los datos del formulario al hacer clic en el botón de borrado', () => {
        render(<Contacto />);
        
        // Arrange: Llenar los campos del formulario
        const nameInput = screen.getByLabelText('Nombre:');
        const emailInput = screen.getByLabelText('Correo Electrónico:');
        const messageInput = screen.getByLabelText('Mensaje:');
        fireEvent.change(nameInput, { target: { value: 'Test Name' } });
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(messageInput, { target: { value: 'Test Message' } });

        // Act: Hacer clic en el botón de borrado
        const clearButton = screen.getByText('Borrar Datos');
        fireEvent.click(clearButton);

        // Assert: Verificar que los campos estén vacíos
        expect(nameInput.value).toBe('');
        expect(emailInput.value).toBe('');
        expect(messageInput.value).toBe('');
    });
});