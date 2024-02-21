import { Outlet } from "react-router-dom";
import VolunteerLogin from "./VolunteerHome";

function Layout() {
    return (
        
        <div className="container">
            <Outlet />
            {/* <VolunteerLogin/> */}
        </div>
 
    );
    }
export default Layout;