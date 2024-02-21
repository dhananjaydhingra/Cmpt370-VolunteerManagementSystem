import React, { useState } from 'react';
import './VolunteerHistoryPage.css'
import '../assets/css/main.css'
import Header from './Header'
import Footer from './Footer';

const VolunteerHistoryPage = () => {
  const [userLoggedIn, setUserLoggedIn] = useState('John Doe'); // Replace with actual user data
  const [volunteerHistory, setVolunteerHistory] = useState(null);

  // Simulating fetched volunteer history
  // Replace this with your actual data fetching logic
  const fetchedVolunteerHistory = [
    { id: 1, date: '2023-11-01', purpose: 'Event setup', startTime: '09:00', endTime: '12:00' },
    { id: 2, date: '2023-11-05', purpose: 'Food distribution', startTime: '13:00', endTime: '16:00' },
    { id: 3, date: '2023-11-10', purpose: 'Cleaning', startTime: '10:30', endTime: '12:30' },
    // Add more volunteer data as needed
  ];

  // Simulating fetch behavior on component mount
  useState(() => {
    setVolunteerHistory(fetchedVolunteerHistory);
  }, []);

  const calculateHours = (startTime, endTime) => {
    const start = new Date(`2023-01-01T${startTime}`);
    const end = new Date(`2023-01-01T${endTime}`);
    const diffInMilliseconds = end - start;
    const diffInHours = diffInMilliseconds / (1000 * 60 * 60);
    return diffInHours.toFixed(2); // Return hours with 2 decimal places
  };

  const totalHours = volunteerHistory
    ? volunteerHistory.reduce(
        (total, shift) => total + parseFloat(calculateHours(shift.startTime, shift.endTime)),
        0
      )
    : 0;

  return (
    <div className="container">
      <h1>Welcome, {userLoggedIn}!</h1>
      {volunteerHistory ? (
        <div>
          <h2>Worked Hours:</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Purpose</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Hours</th>
              </tr>
            </thead>
            <tbody>
              {volunteerHistory.map(shift => (
                <tr key={shift.id}>
                  <td>{shift.date}</td>
                  <td>{shift.purpose}</td>
                  <td>{shift.startTime}</td>
                  <td>{shift.endTime}</td>
                  <td>{calculateHours(shift.startTime, shift.endTime)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="total-hours-label">Total Hours</td>
                <td>{totalHours}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <p>Loading volunteer history...</p>
      )}
    </div>
  );
};

export default VolunteerHistoryPage;
