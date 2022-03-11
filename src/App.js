import Add from './components/Add';
import Counter from './components/Counter';
import React from 'react'

function App() {
  return (
    <div>
        <p>
          JSX transpiled to JS <code>src/App.js</code>.
        </p>
        <header><Add /></header>
        <Counter />
    </div>
  );
}

export default App;