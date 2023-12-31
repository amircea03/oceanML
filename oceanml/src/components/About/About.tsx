import React from 'react';
import { Link } from 'react-router-dom';
import './About.scss';

const About: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="top-bar">
        <h2>About OceanML</h2>
      </div>
      <Link to="/" className="box box1">
        Dashboard
      </Link>
      <div className="box box2">Box 2</div>
      <div className="box box3">Box 3</div>
      <div className="box box4">Box 4</div>
      <div className="box box5">Box 5</div>
      <div className="box box6">Box 6</div>
      <div className="footer">
        <p>&copy; 2023 OceanML. All rights reserved.</p>
      </div>
    </div>
  );
};

export default About;