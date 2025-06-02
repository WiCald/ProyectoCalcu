import Keypad from './Keypad'

export default {
  title: 'Components/Keypad',
  component: Keypad
}

export const Default = () => (
  <Keypad
    onDigit={(n) => console.log('Digit', n)}
    onDot={() => console.log('Dot')}
    onClear={() => console.log('Clear')}
    onSign={() => console.log('Sign')}
    onPercent={() => console.log('Percent')}
    onOperator={(op) => console.log('Operator', op)}
    onEqual={() => console.log('Equal')}
  />
)
