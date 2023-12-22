import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import MachineLearning from './components/MachineLearning/MachineLearning';
import WaveHeight from './components/WaveHeight/WaveHeight';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/machinelearning" element={<MachineLearning />} />
        <Route path="/waveheight" element={<WaveHeight />} />
    </Routes>
    </Router>
  );
};

export default App;
