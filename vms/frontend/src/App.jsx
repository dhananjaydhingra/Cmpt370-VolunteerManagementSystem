import './App.css'
import Public from './components/Public';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
// import Layout from "./Layout";
import Login from './components/Login';
import StaffSignUpForm from './components/SignUp';
import SignupButtons from './components/SignupButtons';
import GuestLoginForm from './components/GuestLogin';
// import './components/GuestLogin.css'
import Shift from './components/Shift'
import ShiftCard from './components/ShiftCard'
import AdminDashboard from './components/AdminDashboard';
import Shifts  from './components/Shifts'
import VolunteerLogin from './components/VolunteerHome'; 
import EditAccounts from './components/EditAccounts';
import SignUpNormal from './components/SignUpNormal'
import Dashboard from './components/VolunteerDashboard';
import SignUp from './components/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
    return (
        
        <><ToastContainer />
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Public />} />
                {/* <Route path="volunteer" element={<VolunteerLogin/>}/> */}
                {/* <Route path="login" element={<Login/>}/> */}
                {/* <Route path="singup" element={<SignupButtons/>}/> */}
                <Route path="guest" element={<GuestLoginForm />} />
                <Route path="shifts" element={<Shifts />} />
                <Route path="admin" element={<AdminDashboard />} />
                <Route path="shift" element={<Shift />} />
                <Route path="login" element={<Login />} />
                <Route path="shiftcard" element={<ShiftCard />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="volunteer" element={<Dashboard />} />
                <Route path="editAccounts" element={<EditAccounts />} />

            </Route>
        </Routes>
        </>
    )
}

export default App
