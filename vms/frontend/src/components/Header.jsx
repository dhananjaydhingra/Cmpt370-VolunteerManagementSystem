// /**
//  * React component for the form GuestLogin - remaining to css
//  * 
//  * 
//  */

// import React, { useState } from 'react';
// import '../assets/css/main.css'
// import './GuestLogin.css'
// import Header from './Header';
// import Footer from './Footer';

// function GuestLoginForm() {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const password = "bruhmoment";
//   const roles = ["VOLUNTEERNOACCOUNT"];


//   async function handleSubmit(event) {
//     event.preventDefault();
//     // handle form submission logic here-/api/guests
//     try {
//         const response = await fetch("http://localhost:3500/users", {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ fullName, email, phoneNumber, password, roles}),
//         });
  
//         if (!response.ok) {
//           console.error(response);
//           throw new Error(response.statusText);
//         }
  
//         const user = await response.json();
//         alert(`Welcome, ${user.fullName}! Your user ID is ${user.id}.`);

//       } catch (error) {
//         console.error("lucka " + error);
//         alert('Failed to create guest user');
//       }
//   }

//   return (
    
//     <>
      


//       <section className="headcover d-print-none headcover-home">
//         <div className="container h-100">
//           <div className="row h-100 align-items-center">
//             <div className="col-12 text-center">
//               <h1 className="headcover-title1">Volunteering</h1>
//               <p className="headcover-title2">
//                 Login to your single use Volunteer Account Below!
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Product Survey Bar */}
//       <section className="headnotice text-center p-3 d-print-none">
//         <a
//           href="https://www.surveymonkey.com/r/2YXRXRR"
//           title="Your input is crucial to our decisions."
//         >
//           Product Survey
//         </a>
//       </section>

//       {/* Main Page Body */}
//       <main role="main" className="container">
//         {/* Page Description */}
//         <p className="lead">
//           Thank you for deciding to volunteer with us!
//         </p>
//         <p className="Lead">
//           We will need a little bit of information from you before we can book your shift. 
//           Please enter your name, phone number, and an email address so we can get in contact with you if anything comes up.
//         </p>


//         {/* <div className='container-fluid'>
//           <div className='form-container'>
//             <form className="guest-sign-in-form" onSubmit={handleSubmit}>
//               <label className="form-label">
//                 First and Last Name <br />
//                 <input className="form__input" type="text" value={fullName} onChange={event => setFullName(event.target.value)} placeholder='Name'/>
//               </label>
//               <br />
//               <label className="form-label">
//                 Email <br />
//                 <input className="form-input" type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder='Email'/>
//               </label>
//               <br />
//               <label className="form-label">
//                 Phone Number <br />
//                 <input className="form-input" type="tel" value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} placeholder='Phone Number'/>
//               </label>
//               <br/>
 
//               <button className="form-submit" type="submit">Sign In as Guest</button>
//             </form>
//           </div>
//         </div>
//          */}
//       </main>
      
//       {/*

//       */}

      
//       </>
//   );
// }

// export default GuestLoginForm;