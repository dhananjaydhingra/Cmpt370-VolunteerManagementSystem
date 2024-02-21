
/**
 * React component for the form GuestLogin - remaining to css
 *
 *
 */

import React, { useState } from "react";
import "./SignUp.css";
import '../assets/css/main.css'
import Header from './Header'
import Footer from './Footer';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState([]);
  // const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  async function handleSubmit(event) {
    event.preventDefault();

    //  
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error('Password must be at least 8 characters, and include at least one uppercase letter, one lowercase letter, and one number');
      return;
    }
    const phoneNumberRegex = /^\d{10}$/;
      if (!phoneNumberRegex.test(phoneNumber)) {
      toast.error('Please enter a valid 10 digit phone number');
     return;
    }

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
      toast.success(`${fullName} user created`);
    } catch (error) {
      console.error(error);
      toast.error(`${fullName} user already exits`);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
  
    switch (name) {
      case 'fullName':
        setFullName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }

  function handleRoleChange(event) {
    const { value } = event.target;
    setRoles(value);
    if (value === 'VOLUNTEERNOACCOUNT') {
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
            <h1 className="headcover-title1">Signup</h1>
            <p className="headcover-title2">
              Create a new account for someone.
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
        <br/>Make sure you select the proper role.
      </p>

      <br/>
      <br/>
      <br/>

      <form className="account-sign-up-form" onSubmit={handleSubmit}>
        <label className="account-sign-up-form__label">
          Full Name:
          <input
            className="account-sign-up-form__input"
            type="text"
            value={fullName}
            name="fullName"
            onChange={handleChange}
          />
        </label>
        {/* <label className="account=sign-up-form__label">
          UserName:
          <input className="account=sign-up-form__input" type="username" value={username} onChange={event => setUsername(event.target.value)} /> */}
        {/* </label> */}
        <label className="account-sign-up-form__label">
          Email:
          <input
            className="account-sign-up-form__input"
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <label className="account-sign-up-form__label">
          Phone Number:
          <input
            className="account-sign-up-form__input"
            type="tel"
            value={phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
          />
        </label>
        <label className="account-sign-in-form__label">
          <b>Roles:</b>
          <select
            className="account-sign-in-form__input"
            name="roles"
            value={roles}
            onChange={handleRoleChange}
            // multiple

          >
            <option placeholder="select a role" onChange={handleRoleChange}>select a role</option>
            <option value="VOLUNTEER">Volunteer</option>
            <option value="ADMIN">Admin</option>
            <option value="VOLUNTEERNOACCOUNT">Volunteer w/o Account</option>
            <option value="EMPLOYEE">Employee</option>
          </select>
        </label>
        <label className="account-sign-up-form__label">
          Password:
          {roles !=='VOLUNTEERNOACCOUNT' &&(
          <input
            className="account-sign-up-form__input"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />)}
        </label>
        <button className="account-sign-up-form__submit" type="submit">
          Sign Up
        </button>
        <ToastContainer />

      </form>
     

      <br/>
      <br/>
      <br/>
      
      {/* <Footer/> */}
    </>
    
  );
}

export default SignUp;
