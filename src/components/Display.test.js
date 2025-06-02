<<<<<<< HEAD
import { render } from '@testing-library/react'
import Display from './Display'

test('muestra el valor en pantalla', () => {
  const { getByText } = render(<Display value="123" />)
  getByText('123') // pasa si el valor es visible
})
=======
import { render } from '@testing-library/react'
import Display from './Display'

test('muestra el valor en pantalla', () => {
  const { getByText } = render(<Display value="123" />)
  getByText('123') // pasa si el valor es visible
})
>>>>>>> 4147c396404c6dc4d8fc3e8300a4e5f43a751f2c
