import { renderHook, act } from '@testing-library/react'
import useCalculatorLogic from './useCalculatorLogic'

describe('useCalculatorLogic', () => {
  it('should input digits correctly', () => {
    const { result } = renderHook(() => useCalculatorLogic())

    act(() => {
      result.current.inputDigit('1')
      result.current.inputDigit('2')
    })

    expect(result.current.display).toBe('12')
  })

  it('should handle decimal input', () => {
    const { result } = renderHook(() => useCalculatorLogic())

    act(() => {
      result.current.inputDigit('3')
      result.current.inputDot()
      result.current.inputDigit('1')
    })

    expect(result.current.display).toBe('3.1')
  })

  it('should clear all', () => {
    const { result } = renderHook(() => useCalculatorLogic())

    act(() => {
      result.current.inputDigit('9')
      result.current.clearAll()
    })

    expect(result.current.display).toBe('0')
  })

  it('should toggle sign', () => {
    const { result } = renderHook(() => useCalculatorLogic())

    act(() => {
      result.current.inputDigit('5')
      result.current.toggleSign()
    })

    expect(result.current.display).toBe('-5')
  })

  it('should calculate percent', () => {
    const { result } = renderHook(() => useCalculatorLogic())

    act(() => {
      result.current.inputDigit('5')
      result.current.inputDigit('0')
      result.current.inputPercent()
    })

    expect(result.current.display).toBe('0.5')
  })

  it('should perform addition', () => {
    const { result } = renderHook(() => useCalculatorLogic())

    act(() => {
      result.current.inputDigit('4')
      result.current.handleOperator('+')
      result.current.inputDigit('3')
      result.current.handleEqual()
    })

    expect(result.current.display).toBe('7')
  })

  it('should perform division by zero', () => {
    const { result } = renderHook(() => useCalculatorLogic())

    act(() => {
      result.current.inputDigit('4')
      result.current.handleOperator('÷')
      result.current.inputDigit('0')
      result.current.handleEqual()
    })

    expect(result.current.display).toBe('Error')
  })

  it('should perform modulo operation', () => {
    const { result } = renderHook(() => useCalculatorLogic())

    act(() => {
      result.current.inputDigit('9')
      result.current.handleOperator('mod')
      result.current.inputDigit('4')
      result.current.handleEqual()
    })

    expect(result.current.display).toBe('1')
  })
})
