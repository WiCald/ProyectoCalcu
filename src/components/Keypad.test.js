<<<<<<< HEAD
import { render, fireEvent } from '@testing-library/react'
import Keypad from './Keypad'

test('renderiza botones y ejecuta onDigit al hacer clic en un número', () => {
  const onDigit = jest.fn()
  const { getByText } = render(
    <Keypad
      onDigit={onDigit}
      onDot={() => {}}
      onClear={() => {}}
      onSign={() => {}}
      onPercent={() => {}}
      onOperator={() => {}}
      onEqual={() => {}}
    />
  )
  fireEvent.click(getByText('7'))
  expect(onDigit).toHaveBeenCalledWith('7')
})
=======
import { render, fireEvent } from '@testing-library/react'
import Keypad from './Keypad'

test('renderiza botones y ejecuta onDigit al hacer clic en un número', () => {
  const onDigit = jest.fn()
  const { getByText } = render(
    <Keypad
      onDigit={onDigit}
      onDot={() => {}}
      onClear={() => {}}
      onSign={() => {}}
      onPercent={() => {}}
      onOperator={() => {}}
      onEqual={() => {}}
    />
  )
  fireEvent.click(getByText('7'))
  expect(onDigit).toHaveBeenCalledWith('7')
})
>>>>>>> 4147c396404c6dc4d8fc3e8300a4e5f43a751f2c
