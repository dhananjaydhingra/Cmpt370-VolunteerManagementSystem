/**
 * React component for the form GuestLogin - remaining to css
 *
 *
 */
/* eslint-disable no-alert */

import React, { useState } from "react";
import Header from './Header';
import Footer from "./Footer";
import '../assets/css/main.css';
import './Login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  function validatePassword(password) {
    // Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validateEmail(email)) {
      alert('Invalid email');
      return;
    }
  
    // if (!validatePassword(password)) {
    //   alert('Invalid password');
    //   return;
    // }
    // handle form submission logic here-/api/guests
    try {
      const response = await fetch("http://localhost:3500/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // check database for the user email and password if they match print the message user logged in else
      // print the message user not found
      
      const result = await response.json();
      console.log(result.message)
      if (result.message == 'User logged in successfully') {
        toast.success(result.message);
        console.log('Condition met');
        
      }
      else if (result.message == 'Incorrect password or email'){
        toast.error(result.message);
        console.log('Condition not met');
      }
      else {
        toast.error(result.message);
        console.log('Condition not met');
      }
    }
      
    
     catch (error) {
      console.error(error);
    }
  }
  
  return (

    <>
      {/* <Header /> */}

      {/* Meta Data */}
      <>
        <title>Volunteer - Steep Hill Food Co-op</title>
        <link rel="stylesheet" href="/vms/frontend/src/assets/css/main.css" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />{" "}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://steephillfood.ca/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://steephillfood.ca/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://steephillfood.ca/favicon-16x16.png"
        />
        <link rel="manifest" href="https://steephillfood.ca/site.webmanifest" />
        <link
          rel="mask-icon"
          href="https://steephillfood.ca/safari-pinned-tab.svg"
          color="#999999"
        />
        <link rel="me" href="https://www.facebook.com/steephillfoodcoop" />
        <link rel="me" href="https://www.instagram.com/steephillfoodcoopyxe/" />
        <link rel="me" href="https://twitter.com/steephillyxe" />
        <link
          rel="me"
          href="https://www.yelp.com/biz/steep-hill-food-co-operative-saskatoon"
        />
        <link
          type="application/atom+xml"
          rel="alternate"
          href="https://steephillfood.ca/news/feed.xml"
          title="Steep Hill Food Co-op"
        />
        <meta name="generator" content="Jekyll v4.2.1" />
        <meta property="og:title" content="Home" />
        <meta name="author" content="Steep Hill" />
        <meta property="og:locale" content="en_CA" />
        <meta
          name="description"
          content="Steep Hill, Saskatoon’s non-profit co-operative local and organic food store."
        />
        <meta
          property="og:description"
          content="Steep Hill, Saskatoon’s non-profit co-operative local and organic food store."
        />
        <link rel="canonical" href="https://steephillfood.ca/" />
        <meta property="og:url" content="https://steephillfood.ca/" />
        <meta property="og:site_name" content="Steep Hill Food Co-op" />
        <meta
          property="og:image"
          content="https://steephillfood.ca/assets/img/sh-logo-og.jpg"
        />
        <meta property="og:image:height" content={630} />
        <meta property="og:image:width" content={1200} />
        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:image"
          content="https://steephillfood.ca/assets/img/sh-logo-og.jpg"
        />
        <meta property="twitter:title" content="Home" />
        <meta name="twitter:site" content="@steephillyxe" />
        <meta name="twitter:creator" content="@steephillyxe" />

      </>

      {/* Banner */}
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
          Email:
          <input className="login-form__input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label className="login-form__label">
          Password:
          <input className="login-form__input" type="password" value={password} onChange={(event) => setpassword(event.target.value)} />
        </label>
        <button className="login-form__submit" type="submit">
          Log-In
        </button>
      </form>

      <br/>
      <br/>
      <br/>
      
      {/* <Footer/> */}
    </>
  );
}

export default Login;
