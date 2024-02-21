import React, { useState,useEffect } from 'react';
import './EditAccounts.css';
import './SignUp.css';

function EditAccounts() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
    useEffect(()=>{
        fetch('http://localhost:3500/users')
        .then(res=>res.json())
        .then(data=>{
            setUsers(data);
        })
        .catch(error=>console.error('Error:',error))
    },[])


    async function handleSubmit(event) {
      event.preventDefault();
      const x = event.target.elements;
      const id =  event.target.id;
      const fullName = x.fullName.value;
      const email = x.email.value;
      const phoneNumber = x.phoneNumber.value;
      const roles = x.roles.value;
      // handle form submission logic here-/api/guests
      try {
        const response = await fetch("http://localhost:3500/users", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id, fullName, email, phoneNumber, roles }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to update user");
        }
  
        // console.log(roles);
        const user = await response.json();
        console.log(fullName);
        alert(`${fullName} user updated`);
      } catch (error) {
        console.error(error);
        alert(`${fullName} user already iiii`);
      }
    }
  

  return (
    <div className="user-list">
      <div className="user-card">
      Filter user by name:
        <input type="text" value={filter} onChange={event => setFilter(event.target.value)} />
      </div>
      {users.map(user => 
      {
        console.log(user._id);
        if(user.fullName && user.fullName.toLowerCase().includes(filter.toLowerCase())) {
      
          return (
            <form id={user._id} className="user-card" onSubmit={handleSubmit}>
                {/* <h2>{shift.title}</h2> */}
              <p className="user-e">Name: <input className="user-name" name="fullName" defaultValue={user.fullName && user.fullName.length <= 100 ? user.fullName : user.fulName && user.fullName.substring(0, 100) + '...'}/></p>
            <div className='user-details'>
              <p className="user-e">Email: <input name="email" defaultValue={user.email}/></p>
              <p className="user-e">Phone Number: <input name="phoneNumber" defaultValue={user.phoneNumber}/></p>
              <label className="account-sign-in-form__label">
                Roles:
                <select
                  className="account-sign-in-form__input"
                  defaultValue={[user.roles]}
                  name="roles"
                >
                  <option value="VOLUNTEER">Volunteer</option>
                  <option value="ADMIN">Admin</option>
                  <option value="VOLUNTEERNOACCOUNT">Volunteer w/o Account</option>
                  <option value="EMPLOYEE">Employee</option>
                </select>
              </label>
              {/* <p className="shift-duration">Duration: {Number(duration) ? Number(duration).toFixed(2) : '00.00'} hours</p> */}
            </div>
            <button className="submit-button" type="submit">
              Save Changes
            </button>
            </form>
          );
        }
})}
    </div>
  );
}

export default EditAccounts;