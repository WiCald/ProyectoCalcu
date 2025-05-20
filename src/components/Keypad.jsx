import React from 'react'
import Button from './Button'

export default function Keypad({
  onDigit, onDot, onClear,
  onSign, onPercent, onOperator, onEqual
}) {
  return (
    <div className="keypad">
      {/* Fila 1 */}
      <Button onClick={onClear}   label="C"   className="func"/>
      <Button onClick={onSign}    label="+/−" className="func"/>
      <Button onClick={onPercent} label="%"   className="func"/>
      <Button onClick={onOperator} label="÷"  className="op"/>

      {/* Fila 2 */}
      <Button onClick={onDigit} label="7"/>
      <Button onClick={onDigit} label="8"/>
      <Button onClick={onDigit} label="9"/>
      <Button onClick={onOperator} label="×" className="op"/>

      {/* Fila 3 */}
      <Button onClick={onDigit} label="4"/>
      <Button onClick={onDigit} label="5"/>
      <Button onClick={onDigit} label="6"/>
      <Button onClick={onOperator} label="−" className="op"/>

      {/* Fila 4 */}
      <Button onClick={onDigit} label="1"/>
      <Button onClick={onDigit} label="2"/>
      <Button onClick={onDigit} label="3"/>
      <Button onClick={onOperator} label="+" className="op"/>

      {/* Fila 5 */}
      <Button onClick={onDigit} label="0"/>
      <Button onClick={onDot}   label="."/>
      <Button onClick={onEqual} label="=" className="op"/>
      {/* celda vacía */}
    </div>
  )
}
