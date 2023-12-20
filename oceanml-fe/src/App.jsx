import React from 'react';

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
    </div>
  );
};

export default App;
