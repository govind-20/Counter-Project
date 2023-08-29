import { useState } from 'react';
import './index.css'

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
    
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div id='main'>
      
      <h2> {counter}</h2>
      <button id='btn1' onClick={addValue}>Add value</button>
      <br />
      <button id='btn2' onClick={removeValue}>Remove value</button>
    </div>
  );
}

export default App;
