/**
 * React component for the form GuestLogin - remaining to css
 *
 *
 */

import React, { useState } from "react";
import Footer from "./Footer";
import '../assets/css/main.css';
import './Login.css';


function GuestLoginForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const password = "bruhmoment";
  const roles = ["VOLUNTEERNOACCOUNT"];


  async function handleSubmit(event) {
    event.preventDefault();
    // handle form submission logic here-/api/guests
    try {
        const response = await fetch("http://localhost:3500/users", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ fullName, email, phoneNumber, password, roles}),
        });
  
        if (!response.ok) {
          console.error(response);
          throw new Error(response.statusText);
        }
  
        const user = await response.json();
        alert(`Welcome, ${user.fullName}! Your user ID is ${user.id}.`);

      } catch (error) {
        console.error("lucka " + error);
        alert('Failed to create guest user');
      }
  }


  return (

    <>
      {/* <HeaLoginer */}
      <section className="headcover d-print-none headcover-home">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="headcover-title1">Volunteering</h1>
              <p className="headcover-title2">
                Login to your single use Volunteer Account Below!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Survey Bar */}
      <section className="headnotice text-center p-3 d-print-none">
        <a
          href="https://www.surveymonkey.com/r/2YXRXRR"
          title="Your input is crucial to our decisions."
        >
          Product Survey
        </a>
      </section>


    <br/>
    <br/>
    <br/>

      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-form__label">
          First and Last Name:
          <input className="login-form__input" type="text" value={fullName} onChange={(event) => setFullName(event.target.value)} placeholder="First and Last Name"/>
        </label>
        <label className="login-form__label">
          Email:
          <input className="login-form__input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email"/>
        </label>
        <label className="login-form__label">
          Phone Number:
          <input className="login-form__input" type="tel" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} placeholder="Phone Number"/>
        </label>
        <button className="login-form__submit" type="submit">
          Log-In
        </button>
      </form>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      {/* 
      
      */}


      <Footer/>

    </>
  );
}

export default GuestLoginForm;
