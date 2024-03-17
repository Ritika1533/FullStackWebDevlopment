import React from 'react';
import DataProvider from './context/DataProvider'; // Assuming DataProvider.js is in the same directory
import Home from './components/Home';

// App component
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Home />
      </DataProvider>
    </div>
  );
}

export default App;
