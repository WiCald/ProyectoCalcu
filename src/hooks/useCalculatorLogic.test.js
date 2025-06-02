import { renderHook, act } from '@testing-library/react'
import useCalculatorLogic from './useCalculatorLogic'

test('realiza suma correctamente', () => {
  const { result } = renderHook(() => useCalculatorLogic())

  act(() => result.current.inputDigit('3'))
  act(() => result.current.handleOperator('+'))
  act(() => result.current.inputDigit('4'))
  act(() => result.current.handleEqual())

  expect(result.current.display).toBe('7')
})

test('muestra ERROR al dividir por cero', () => {
  const { result } = renderHook(() => useCalculatorLogic())

  act(() => result.current.inputDigit('8'))
  act(() => result.current.handleOperator('÷'))
  act(() => result.current.inputDigit('0'))
  act(() => result.current.handleEqual())

  expect(result.current.display).toBe('ERROR')
})
