import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="top-bar">
        <h2>OceanML</h2>
      </div>
      <Link to="/about" className="box box1">
        About OceanML
      </Link>
      <Link to="/machinelearning" className="box box1">
        Machine Learning
      </Link>
      <Link to="/waveheight" className="box box1">
        Wave Height
      </Link>
      <div className="box box4">Box 4</div>
      <div className="box box5">Box 5</div>
      <div className="box box6">Box 6</div>
      <div className="footer">
        <p>&copy; 2023 OceanML. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Dashboard;