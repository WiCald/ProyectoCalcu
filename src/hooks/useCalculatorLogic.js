import { useState } from 'react'

export default function useCalculatorLogic() {
  const [display, setDisplay] = useState('0')
  const [value, setValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(digit)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? digit : display + digit)
    }
  }

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const clearAll = () => {
    setDisplay('0')
    setValue(null)
    setOperator(null)
    setWaitingForOperand(false)
  }

  const toggleSign = () => {
    if (display !== '0') {
      setDisplay(display.charAt(0) === '-' ? display.slice(1) : '-' + display)
    }
  }

  const inputPercent = () => {
    const currentValue = parseFloat(display)
    if (!isNaN(currentValue)) {
      setDisplay(String(currentValue / 100))
    }
  }

  const performCalculation = {
    '+': (prev, next) => prev + next,
    '-': (prev, next) => prev - next,
    '×': (prev, next) => prev * next,
    '÷': (prev, next) => next !== 0 ? prev / next : 'Error',
    'mod': (prev, next) => next !== 0 ? prev % next : 'Error'
  }

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(display)

    if (operator && waitingForOperand) {
      setOperator(nextOperator)
      return
    }

    if (value == null) {
      setValue(inputValue)
    } else if (operator) {
      const func = performCalculation[operator]
      const result = func ? func(value, inputValue) : inputValue

      setValue(result === 'Error' ? null : result)
      setDisplay(String(result))
    }

    setWaitingForOperand(true)
    setOperator(nextOperator)
  }

  const handleEqual = () => {
    const inputValue = parseFloat(display)

    if (operator && value != null) {
      const func = performCalculation[operator]
      const result = func ? func(value, inputValue) : inputValue

      setDisplay(String(result))
      setValue(null)
      setOperator(null)
      setWaitingForOperand(false)
    }
  }

  return {
    display,
    inputDigit,
    inputDot,
    clearAll,
    toggleSign,
    inputPercent,
    handleOperator,
    handleEqual
  }
}
