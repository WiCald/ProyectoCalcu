import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

test('calls onClick with label when clicked', () => {
  const mockClick = jest.fn()
  const { getByText } = render(<Button label="5" onClick={mockClick} />)
  fireEvent.click(getByText('5'))
  expect(mockClick).toHaveBeenCalledWith('5')
})
