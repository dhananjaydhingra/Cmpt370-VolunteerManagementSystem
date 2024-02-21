
/**
 * React component for the form GuestLogin - remaining to css
 *
 *
 */

import React, { useState } from "react";
import "./SignupNormal.css";
import '../assets/css/main.css'
import Header from './Header'
import Footer from './Footer';

function StaffSignUpForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = 'VOLUNTEER';
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  async function handleSubmit(event) {
    event.preventDefault();
    // handle form submission logic here-/api/guests
    try {
      const response = await fetch("http://localhost:3500/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, password, email, phoneNumber, roles }),
      });

      if (!response.ok) {
        throw new Error("Failed to create guest user");
      }

      // console.log(roles);
      const user = await response.json();
      console.log(fullName);
      alert(`${fullName} user created`);
    } catch (error) {
      console.error(error);
      alert(`${fullName} user already exits`);
    }
  }

  function handleRoleChange(event) {
      setRoles(event.target.value);
      if (event.target.value === 'VOLUNTEERNOACCOUNT') {
        setPassword('');
      }
    }

  return (
    <>

      {/* <Header/> */}

      {/* Banner */}
      <section className="headcover d-print-none headcover-home">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="headcover-title1">Volunteer Signup</h1>
            <p className="headcover-title2">
              Create a new Volunteer account.
            </p>
          </div>
        </div>
      </div>
      </section>

      <br/>
      <br/>
      <br/>
    
      <p className="page-description">
        Enter the following information to create an account.
      </p>

      <br/>
      <br/>
      <br/>

      <form className="volunteer-sign-up-form" onSubmit={handleSubmit}>
        <label className="volunteer-sign-up-form__label">
          Full Name:
          <input
            className="volunteer-sign-up-form__input"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </label>
        {/* <label className="account=sign-up-form__label">
          UserName:
          <input className="account=sign-up-form__input" type="username" value={username} onChange={event => setUsername(event.target.value)} /> */}
        {/* </label> */}
        <label className="volunteer-sign-up-form__label">
          Email:
          <input
            className="volunteer-sign-up-form__input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="volunteer-sign-up-form__label">
          Phone Number:
          <input
            className="volunteer-sign-up-form__input"
            type="tel"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </label>
        <label className="volunteer-sign-up-form__label">
          Password:
          {roles !=='VOLUNTEERNOACCOUNT' &&(
          <input
            className="volunteer-sign-up-form__input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />)}
        </label>
        <button className="volunteer-sign-up-form__submit" type="submit">
          Sign Up
        </button>
      </form>

      <br/>
      <br/>
      <br/>
      
      {/* <Footer/> */}
    </>
  );
}

export default StaffSignUpForm;