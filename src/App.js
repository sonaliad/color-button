import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export function replaceCamelCasewithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  const [ disabled, setdisabled ] = useState(false);

  return (
    <div>
      <button style={{backgroundColor: disabled ? 'gray' : buttonColor}} 
      onClick={() => setButtonColor(newButtonColor)} 
      disabled={disabled}>Change to {replaceCamelCasewithSpace(newButtonColor)}
      </button>
      <input 
      type="checkbox"
      id="disable-button-checkbox"
      defaultChecked={disabled}
      aria-checked={disabled}
      onChange={(e) => setdisabled(e.target.checked)}
      />
      <label htmlFor='disable-button-checkbox'>Disable Button</label>
    </div>
  );
}

export default App;
