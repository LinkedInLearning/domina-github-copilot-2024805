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


        it('clears the form when the "Borrar" button is clicked', () => {
        render(<Contacto />);
        
        // Get form inputs
        const nameInput = screen.getByLabelText('Nombre:');
        const emailInput = screen.getByLabelText('Correo Electrónico:');
        const messageInput = screen.getByLabelText('Mensaje:');
        
        // Fill the form with data
        fireEvent.change(nameInput, { target: { value: 'Test Name' } });
        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(messageInput, { target: { value: 'Test message' } });
        
        // Verify inputs have values
        expect(nameInput.value).toBe('Test Name');
        expect(emailInput.value).toBe('test@example.com');
        expect(messageInput.value).toBe('Test message');
        
        // Get and click the Borrar button
        const clearButton = screen.getByText('Borrar');
        fireEvent.click(clearButton);
        
        // Verify inputs are cleared
        expect(nameInput.value).toBe('');
        expect(emailInput.value).toBe('');
        expect(messageInput.value).toBe('');
    });
});