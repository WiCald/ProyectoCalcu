import { useState } from 'react'

export default function useCalculatorLogic() {
  const [display, setDisplay] = useState('0')
  const [firstValue, setFirstValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waiting, setWaiting] = useState(false)
  const MAX = 9

  const formatResult = result => {
    const str = String(result)
    if (str.includes('e')) return 'ERROR'
    if (str.length > MAX) {
      if (str.includes('.')) {
        const [intPart, decPart] = str.split('.')
        const allowed = MAX - intPart.length - 1
        const rounded = allowed > 0
          ? parseFloat(result).toFixed(allowed)
          : intPart
        return rounded.length <= MAX ? rounded : 'ERROR'
      }
      return 'ERROR'
    }
    return str
  }

  const inputDigit = digit => {
    if (display === 'ERROR') {
      setDisplay(digit)
      setWaiting(false)
      return
    }
    if (waiting) {
      setDisplay(digit)
      setWaiting(false)
    } else if (display.length < MAX) {
      setDisplay(display === '0' ? digit : display + digit)
    }
  }

  const inputDot = () => {
    if (waiting) {
      setDisplay('0.')
      setWaiting(false)
    } else if (!display.includes('.') && display.length < MAX) {
      setDisplay(display + '.')
    }
  }

  const clearAll = () => {
    setDisplay('0')
    setFirstValue(null)
    setOperator(null)
    setWaiting(false)
  }

  const toggleSign = () => {
    if (display === 'ERROR') return
    if (display.startsWith('-')) {
      setDisplay(display.slice(1))
    } else if (display.length < MAX) {
      setDisplay('-' + display)
    }
  }

  const inputPercent = () => {
    if (display === 'ERROR') return
    const num = parseFloat(display) / 100
    setDisplay(formatResult(num))
  }

  const handleOperator = nextOp => {
    // Normaliza cualquier signo unicode “−” a ASCII “-”
    const op = nextOp === '−' ? '-' : nextOp
    const inputValue = parseFloat(display)

    if (firstValue == null) {
      setFirstValue(inputValue)
    } else if (operator) {
      let result = {
        '+': () => firstValue + inputValue,
        '-': () => firstValue - inputValue,
        '×': () => firstValue * inputValue,
        '÷': () => inputValue === 0 ? NaN : firstValue / inputValue,
        '%': () => firstValue % inputValue
      }[operator]()

      if (isNaN(result) || result < 0) {
        setDisplay('ERROR')
        setFirstValue(null)
        setOperator(null)
        return
      }
      const formatted = formatResult(result)
      setDisplay(formatted)
      setFirstValue(parseFloat(formatted))
    }

    setWaiting(true)
    setOperator(op)
  }

  const handleEqual = () => {
    if (operator) handleOperator(operator)
    setOperator(null)
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
