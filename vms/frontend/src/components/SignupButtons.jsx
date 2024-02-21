import React from 'react';
import { Link } from "react-router-dom";
import GuestLoginForm from './GuestLogin';
import { useNavigate,useLocation } from 'react-router-dom';
import './SignUpButtons.css'


function SignupButtons() {
    // const [guestUser,setGuestUser] = useState(false);
    const navigate = useNavigate()
    const {pathname} = useLocation()

    const onSignupAsGuestClicked = () => navigate('/guest')
    const onLoginClicked = () => navigate('/LogIn')
    const onStaffSignUpClicked = () => navigate('/signUpStaff')

  return (
    <div>
      <button className="sign-up-account" onClick={onStaffSignUpClicked}>Sign up with account</button>
      <button className="sign-up-guest" onClick={onSignupAsGuestClicked}>Sign up as guest</button>
      <button className="login" onClick={onLoginClicked}>Login</button>
    </div>
  );

     function handleSignupWithAccount() {
      return (
        <Link to="/GuestLogin"><GuestLoginForm /></Link>
        )
  }


  function handleSignupAsGuest() {
        // get guestloginform.jsx when SignupAsGuest is clicked
        return (
        <Link to="/GuestLogin"><GuestLoginForm /></Link>
        )
        
      
        }
  }

export default SignupButtons;