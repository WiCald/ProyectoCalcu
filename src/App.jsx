<<<<<<< HEAD
import React from 'react'
import Display from './components/Display'
import Keypad from './components/Keypad'
import useCalculatorLogic from './hooks/useCalculatorLogic'

export default function App() {
  const {
    display, inputDigit, inputDot, clearAll,
    toggleSign, inputPercent, handleOperator, handleEqual
  } = useCalculatorLogic()

  return (
    <div className="calculator">
      <Display value={display}/>
      <Keypad
        onDigit={inputDigit}
        onDot={inputDot}
        onClear={clearAll}
        onSign={toggleSign}
        onPercent={inputPercent}
        onOperator={handleOperator}
        onEqual={handleEqual}
      />
    </div>
  )
}
=======
import React from 'react'
import Display from './components/Display'
import Keypad from './components/Keypad'
import useCalculatorLogic from './hooks/useCalculatorLogic'

export default function App() {
  const {
    display, inputDigit, inputDot, clearAll,
    toggleSign, inputPercent, handleOperator, handleEqual
  } = useCalculatorLogic()

  return (
    <div className="calculator">
      <Display value={display}/>
      <Keypad
        onDigit={inputDigit}
        onDot={inputDot}
        onClear={clearAll}
        onSign={toggleSign}
        onPercent={inputPercent}
        onOperator={handleOperator}
        onEqual={handleEqual}
      />
    </div>
  )
}
>>>>>>> 4147c396404c6dc4d8fc3e8300a4e5f43a751f2c
