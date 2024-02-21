import React from 'react';

function ShiftCard({ shift }) {
  // const { title, description, startTime, endTime, duration, numVolunteers } = shift;
  const shift1 = {
    title:"Shift Title",
    description:"This is a description of the shift.",
    startTime:"10:00 AM",
    endTime:"3:00 PM",
    date:"2023-11-02",
    duration:5,
    numVolunteers: 0
  };
  return (
    <div className="shift-card">
      <h2 className="shift-title">{shift1.title}</h2>
      <p className="shift-description">{shift1.description}</p>
      <p className="shift-start-time">Start Time: {shift1.startTime}</p>
      <p className="shift-end-time">End Time: {shift1.endTime}</p>
      <p className="shift-duration">Duration: {shift1.duration} hours</p>
      <p className="shift-volunteers">Volunteers Assigned: {shift1.numVolunteers}</p>
    </div>
  );
}

// function ShiftList({ shifts }) {
//   return (
//     <div className="shift-list">
//       {shifts ?. shifts.map(shift => (
//         <ShiftCard key={shift.id} shift={shift} />
//       ))}
//     </div>
//   );
// }

export default ShiftCard;