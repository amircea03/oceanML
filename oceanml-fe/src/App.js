// oceanml-frontend/src/App.js

import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        console.log('Data from Express.js:', data);
        setData(data.message);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <h1>OceanML React App</h1>
        <p>Data from Express.js: {data}</p>
      </header>
    </div>
  );
}

export default App;