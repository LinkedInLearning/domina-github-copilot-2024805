import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from './App'

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('App', () => {


  it('Muestra la pagina inicial por defecto', () => {
    renderWithRouter(<App />)
    expect(screen.getByText('Viajes Odisea IA')).toBeInTheDocument()
  })
})
describe('sumDigits', () => {
  // 🧪 Prueba que la función suma correctamente dos números
  it('Debe retornar la suma de dos números', () => {
    const result = App.prototype.sumDigits(3, 5);
    expect(result).toBe(8);
  });

  // 🧪 Prueba que la función maneja correctamente entradas como cadenas numéricas
  it('Debe convertir cadenas numéricas y retornar la suma', () => {
    const result = App.prototype.sumDigits('4', '6');
    expect(result).toBe(10);
  });

  // 🧪 Prueba que la función retorna NaN si las entradas no son números válidos
  it('Debe retornar NaN si las entradas no son números válidos', () => {
    const result = App.prototype.sumDigits('a', 'b');
    expect(result).toBeNaN();
  });
});
