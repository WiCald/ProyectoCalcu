<<<<<<< HEAD
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

test('calls onClick with label when clicked', () => {
  const mockClick = jest.fn()
  const { getByText } = render(<Button label="5" onClick={mockClick} />)
  fireEvent.click(getByText('5'))
  expect(mockClick).toHaveBeenCalledWith('5')
})
=======
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

test('calls onClick with label when clicked', () => {
  const mockClick = jest.fn()
  const { getByText } = render(<Button label="5" onClick={mockClick} />)
  fireEvent.click(getByText('5'))
  expect(mockClick).toHaveBeenCalledWith('5')
})
>>>>>>> 4147c396404c6dc4d8fc3e8300a4e5f43a751f2c
