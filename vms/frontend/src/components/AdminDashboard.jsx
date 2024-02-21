import React from 'react';
// import '../assets/css/main.css';
import './AdminDashboard.css'
import Header from './Header';
import Footer from './Footer';
import { useNavigate,useLocation } from 'react-router-dom';


function AdminDashboard(){
    const navigate = useNavigate();
    const {pathname} = useLocation()
    const onCreateAnewAccountclicked = () => navigate('/signUpStaff')
    const onCreateShiftClicked = () => navigate('/shift')
    const onViewAccountsClicked = () => navigate('/adminAccounts')
    const onScheduleShiftClicked = () => navigate('/shifts')

    return(
        <>
            {/* <Header/> */}

            {/* Banner */}
            <section className="headcover d-print-none headcover-home">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <h1 className="headcover-title1">Dashboard</h1>
                            <p className="headcover-title2">
                               <b> Welcome to the Dashboard! From here you can select what you want to do!</b>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        

            <br/>
            <br/>
            <br/>
            
            <div className="card-deck">

                <div className='card card-bg'>
                    <div className='card-body'>
                        <h5 className='card-title'>Create Account</h5>
                        <p className='card-text'>Create a new account</p>
                        {/* Add navigation to signup for an account */}
                        <a href="" onClick={onCreateAnewAccountclicked}>Click Here</a>
                    </div>
                </div>                

                <div className='card card-bg'>
                    <div className='card-body'>
                        <h5 className='card-title'>View Accounts</h5>
                        <p className='card-text'>View and modify accounts and account history</p>
                        {/* Add navigation to view accounts */}
                        <a href="" onClick={onViewAccountsClicked}>Click Here</a>
                    </div>
                </div> 

                <div className='card card-bg'>
                    <div className='card-body'>
                        <h5 className='card-title'>Create Shift</h5>
                        <p className='card-text'>Create a new shift!</p>
                        {/* Add navigation to create Shifts and delete shifts */}
                        <a href="" onClick={onCreateShiftClicked}>Click Here</a>
                    </div>
                </div>

                <div className='card card-bg'>
                    <div className='card-body'>
                        <h5 className='card-title'>Sign Up for shift</h5>
                        <p className='card-text'>Sign up someone for a shift in person!</p>
                        {/* Add navigation for shift signup in person - it will be without account */}
                        <a href="">Click Here</a>
                    </div>
                </div>

                <div className='card card-bg'>
                    <div className='card-body'>
                        <h5 className='card-title'>Schedule</h5>
                        <p className='card-text'>See all scheduled shift</p>
                        {/* Add navigation to view all scheduled shifts and volunteers assigned to them*/}
                        <a href="" onClick={onScheduleShiftClicked}>Click Here</a>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Footer/>   
        </>

    );
}

export default AdminDashboard;