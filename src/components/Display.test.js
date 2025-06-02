import { render } from '@testing-library/react'
import Display from './Display'

test('muestra el valor en pantalla', () => {
  const { getByText } = render(<Display value="123" />)
  getByText('123') // pasa si el valor es visible
})
