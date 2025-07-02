import { render, screen, fireEvent } from '@testing-library/react';
import Destino from './Destino';
import { describe, it, expect } from 'vitest';

describe('Destino Component', () => {
    it('modifies the class when clicked', () => {
        const destinoMock = {
            imagen: 'test-image.jpg',
            nombre: 'Test Destino',
            descripcion: 'Test Descripcion'
        };

        render(<Destino destino={destinoMock} />);

        const destinoElement = screen.getByRole('button');

        // Verify initial class does not include 'destacado'
        expect(destinoElement).not.toHaveClass('destacado');

        // Simulate click
        fireEvent.click(destinoElement);

        // Verify class includes 'destacado'
        expect(destinoElement).toHaveClass('destacado');
    });
});
it('calls destacar and updates the class when clicked', () => {
    const destinoMock = {
        imagen: 'test-image.jpg',
        nombre: 'Test Destino',
        descripcion: 'Test Descripcion'
    };

    render(<Destino destino={destinoMock} />);

    const destinoElement = screen.getByRole('button');

    // Simulate click to trigger destacar
    fireEvent.click(destinoElement);

    // Verify class includes 'destacado' after click
    expect(destinoElement).toHaveClass('destacado');
});
