import React from 'react'
import Button from './Button'

export default function Keypad({ onDigit, onDot, onClear, onSign, onPercent, onOperator, onEqual }) {
  const rows = [
    [['C', onClear, 'func'], ['+/−', onSign, 'func'], ['%', onPercent, 'func'], ['÷', onOperator, 'op']],
    [['7', onDigit], ['8', onDigit], ['9', onDigit], ['×', onOperator, 'op']],
    [['4', onDigit], ['5', onDigit], ['6', onDigit], ['-', onOperator, 'op']],
    [['1', onDigit], ['2', onDigit], ['3', onDigit], ['+', onOperator, 'op']],
    [['0', onDigit], ['.', onDot], ['=', onEqual, 'op'], ['mod', onOperator, 'op']]
  ]
  return (
    <div className="keypad">
      {rows.flat().map(([label, handler, cls]) => (
        <Button key={label} label={label} className={cls || ''} onClick={handler} />
      ))}
    </div>
  )
}
