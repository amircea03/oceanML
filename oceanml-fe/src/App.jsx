import React from 'react';
import Footer from './Footer';
import './styles/css/main.css'; // Import this line to ensure the styles are applied

const App = () => {
  return (
    <div>
      <header>
        <h1>OceanML</h1>
      </header>
      <div className="container index-content">
        {[1, 2, 3, 4, 5, 6].map((boxNumber) => (
          <div className="box" key={`box${boxNumber}`}>
            {/* Box Content */}
            Box {boxNumber}
            <div className="box-image-placeholder"></div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;