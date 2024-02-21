import React from 'react';
import './VolunteerDashboard.css'; 
import dashboardImage from '../assets/Steep_Hill_Banner.png';
import '../assets/css/main.css';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <div className="dashboard-image-container">
        <img src={dashboardImage} alt="Dashboard" className="dashboard-image" />
        <h1 className="dashboard-title">Volunteer Dashboard</h1>
      </div>
      <div className="shifts-section">
        <h2>Your Shifts</h2>
        <table>
          <tr>
            <th>Shift Number</th>
            <th>Time</th>
          </tr>
          <tr>
            <td>Shift 1</td>
            <td>9:00 AM - 12:00 PM</td>
          </tr>
          <tr>
            <td>Shift 2</td>
            <td>1:00 PM - 5:00 PM</td>
          </tr>
          <tr>
            <td>Shift 3</td>
            <td>6:00 PM - 9:00 PM</td>
          </tr>
        </table>
      </div>
      <div className="dashboard-buttons">
        <button>View Profile</button>
        <button>Settings</button>
        <button onClick={() => navigate('/shifts')}>View All Shifts</button>
        <button>Previous Shifts</button>
      </div>
    </div>
  );
}

export default Dashboard;
