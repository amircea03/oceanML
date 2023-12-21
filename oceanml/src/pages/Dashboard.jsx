import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Dashboard.css';

function Dashboard() {
  const boxData = [
    { name: 'About Us', index: 0 },
    { name: 'Image Recognition', index: 1 },
    { name: 'Placeholder', index: 2 },
    { name: 'Placeholder', index: 3 },
    { name: 'Placeholder', index: 4 },
    { name: 'Placeholder', index: 5 },
  ];

  return (
    <div>
      <Header />
      <main className="dashboard-main">
        <div className="box-container">
          {boxData.map(({ name, index }) => (
            <div key={index} className="box">
              <img src={`path/to/square-image-${index + 1}.jpg`} alt={name} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;