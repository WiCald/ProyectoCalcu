<<<<<<< HEAD
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
=======
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
>>>>>>> 4147c396404c6dc4d8fc3e8300a4e5f43a751f2c
