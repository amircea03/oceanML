import React from 'react';
import { Link } from 'react-router-dom';
import './MachineLearning.scss';

const MachineLearning: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="top-bar">
        <h2>Machine Learning</h2>
      </div>
      <Link to="/" className="box box1">
        Dashboard
      </Link>
      <div className="text-container">
        <h1>OceanML "Machine Learning"</h1>
        <p>OceanML's Machine Learning Platform</p>
      </div>
      <div className="footer">
        <p>&copy; 2023 OceanML. All rights reserved.</p>
      </div>
    </div>
  );
};

export default MachineLearning;