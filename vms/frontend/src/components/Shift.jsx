import React, { useState } from 'react';
import './Shift.css';
import '../assets/css/main.css';
import Header from './Header';
import Footer from './Footer';

function Shift() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [duration, setDuration] = useState('');

  function handleStartTimeChange(event) {
    setStartTime(event.target.value);
    updateDuration(event.target.value, endTime);
  }

  function handleEndTimeChange(event) {
    setEndTime(event.target.value);
    updateDuration(startTime, event.target.value);
  }

  function updateDuration(start, end) {
    const startMs = Date.parse(start);
    const endMs = Date.parse(end);

    if (!isNaN(startMs) && !isNaN(endMs)) {
      const durationMs = endMs - startMs;
      setDuration(durationMs / 1000 / 60 / 60 + ' hours');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    // handle form submission logic here-/api/guests
    try {
        const response = await fetch("http://localhost:3500/shifts", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({title, description, startTime, endTime}),
        });
  
        if (!response.ok) {
          console.error(response);
          throw new Error(response.statusText);
        }
  
        const shift = await response.json();
        alert(`Shift ${shift.title} created!`);

      } catch (error) {
        console.error("lucka " + error);
        alert('Failed to create shift');
      }
  }

  return (

    <>
      {/* Banner */}
      {/* <Header/> */}
      <section className="headcover d-print-none headcover-home">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="headcover-title1">Shift Creation</h1>
              <p className="headcover-title2">
                Create a new Shift
              </p>
            </div>
          </div>
        </div>
      </section>

      <br/>
      <br/>
      <br/>

      <form className="shift-form" onSubmit={handleSubmit}>
        <label className="shift-form__label">
          Shift Title:
          <input className="shift-form__input" type="text" value={title} onChange={event => setTitle(event.target.value)} />
        </label>
        <label className="shift-form__label">
          Shift Description:
          <textarea className="shift-form__textarea" value={description} onChange={event => setDescription(event.target.value)} />
        </label>
        <label className="shift-form__label">
          Shift Start Time:
          <input className="shift-form__input" type="datetime-local" value={startTime} onChange={handleStartTimeChange} />
        </label>
        <label className="shift-form__label">
          Shift End Time:
          <input className="shift-form__input" type="datetime-local" value={endTime} onChange={handleEndTimeChange} />
        </label>
        <label className="shift-form__label">
          Shift Duration:
          <input className="shift-form__input" type="text" value={duration} readOnly />
        </label>
        <button onClick={handleSubmit} className="shift-form__submit" type="submit">Create Shift</button>
      </form>
      
      <br/>
      <br/>
      <br/>
    {/* <Footer/> */}
    </>
  );
}

export default Shift;