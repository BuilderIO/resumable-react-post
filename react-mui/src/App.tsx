import { useState } from 'react';

import './App.css';
import { Button } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Regular React component</h2>
      <Button
        variant="contained"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        I'm a button from react
      </Button>
      <p>current count is: {count}</p>
    </div>
  );
}

export default App;
