import React from 'react';
import '../assets/css/main.css';
import Header from './Header';
import { Link } from "react-router-dom";
import Footer from './Footer';
import { useNavigate,useLocation } from 'react-router-dom';
import StaffSignUpForm from './SignUp';
// import SignupButtons from './SignupButtons';
import GuestLoginForm from './GuestLogin';

function VolunteerLogin(){
  const navigate = useNavigate()
  const {pathname} = useLocation()

  const onSignupAsGuestClicked = () => navigate('/guest')
  const onLoginClicked = () => navigate('/login')
  const onStaffSignUpClicked = () => navigate('/signup')

    
  return(
<>

  {/*<Header/> */}

  {/* Banner */}
  <section className="headcover d-print-none headcover-home">
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12 text-center">
          <h1 className="headcover-title1">Volunteering</h1>
          <p className="headcover-title2">
            Login to your Volunteer Account Below or Create one if You are New!
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

  {/* Main Page Body */}
  <main role="main" className="container">
    {/* Page Description */}
    <p className="lead">
      Our store is not about making a profit: our prices reflect only what is
      necessary to cover our costs. As such, volunteers play a crucial role in
      keeping our doors open. Plus volunteers get a great discount on purchases
      in the store!
    </p>
    <p className="lead">
      Thank you for considering volunteering with us! If this is your first
      time, signup below for a volunteer account or pick-up a shift by filling
      out our quick form. If you already have an account you can log in below.
    </p>
    {/* Testimonials */}
    <div className="col-lg-12 mt-5 mb-5">
      <div id="testimonials" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          {/* Testimonials Start */}
          {/* TODO: Get Volunteer Testimonials */}
          <div className="carousel-item text-center p-4">
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                <span className="fa fa-quote-left"></span> The intent for all to
                live a better life through sourcing quality food within a like
                minded supportive community! Steep Hill Rocks!!{" "}
                <span className="fa fa-quote-right"></span>
              </p>
              <footer className="blockquote-footer mt-2 bg-transparent">
                Steep Hill Member
                <cite title="Source Title" className="font-weight-bold">
                  survey
                </cite>
              </footer>
            </blockquote>
          </div>
          <div className="carousel-item text-center p-4">
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                <span className="fa fa-quote-left"></span> You fill a
                much-needed niche by supplying organic goods as well as
                supporting local producers.{" "}
                <span className="fa fa-quote-right"></span>
              </p>
              <footer className="blockquote-footer mt-2 bg-transparent">
                Steep Hill Member
                <cite title="Source Title" className="font-weight-bold">
                  survey
                </cite>
              </footer>
            </blockquote>
          </div>
          <div className="carousel-item text-center p-4 active">
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                <span className="fa fa-quote-left"></span> The staff is top
                notch and go out of their way to be helpful.{" "}
                <span className="fa fa-quote-right"></span>
              </p>
              <footer className="blockquote-footer mt-2 bg-transparent">
                Steep Hill Member
                <cite title="Source Title" className="font-weight-bold">
                  survey
                </cite>
              </footer>
            </blockquote>
          </div>
          <div className="carousel-item text-center p-4">
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                <span className="fa fa-quote-left"></span> This is a really
                great business ... thoughtfully stocked , great variety, and
                great local and seasonal produce...I love shopping there!{" "}
                <span className="fa fa-quote-right"></span>
              </p>
              <footer className="blockquote-footer mt-2 bg-transparent">
                Steep Hill Member
                <cite title="Source Title" className="font-weight-bold">
                  survey
                </cite>
              </footer>
            </blockquote>
          </div>
          <div className="carousel-item text-center p-4">
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                <span className="fa fa-quote-left"></span> So glad to have the
                option of Steep Hill in Saskatoon. It has been an integral part
                of my experience here as a newcomer to the community and it
                would be a huge loss to lose this resource.{" "}
                <span className="fa fa-quote-right"></span>
              </p>
              <footer className="blockquote-footer mt-2 bg-transparent">
                Steep Hill Member{" "}
                <cite title="Source Title" className="font-weight-bold">
                  survey
                </cite>
              </footer>
            </blockquote>
          </div>
          <div className="carousel-item text-center p-4">
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                <span className="fa fa-quote-left"></span> Overall, I love this
                warm little nook on Broadway!{" "}
                <span className="fa fa-quote-right"></span>
              </p>
              <footer className="blockquote-footer mt-2 bg-transparent">
                Steep Hill Member
                <cite title="Source Title" className="font-weight-bold">
                  survey
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#testimonials" data-slide-to={0} className=""></li>
          <li data-target="#testimonials" data-slide-to={1} className=""></li>
          <li
            data-target="#testimonials"
            data-slide-to={2}
            className="active"
          ></li>
          <li data-target="#testimonials" data-slide-to={3}></li>
          <li data-target="#testimonials" data-slide-to={4}></li>
          <li data-target="#testimonials" data-slide-to={5}></li>
        </ol>
      </div>
    </div>
    {/* Testimonials End */}


    <div>
      <nav className="nav">
        <div className="container-fluid">
          <ul className="form-container">
            <li>
              <a className="nav-button" onClick={onLoginClicked}>
                {" "}
                Login{" "}
              </a>
            </li>
            <li>
              <a className="nav-button" onClick={onStaffSignUpClicked}>
                {" "}
                Signup{" "}
              </a>
            </li>
            <li>
            <a className="nav-button" onClick={onSignupAsGuestClicked}>Sign up as guest</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </main>
  
  {/*

  
  
    
  */}

  <Footer/>
</>

    )
}

export default VolunteerLogin;