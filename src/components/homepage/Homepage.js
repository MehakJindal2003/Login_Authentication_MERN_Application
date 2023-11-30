import React from 'react'
import "./homepage.css";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Homepage = ({user,setLoginUser}) => {
  const history=useHistory();
  const id=user._id;
  const handleUpdatePassword=()=>{
    history.push({
      pathname:'/update-password',
      state:{user}
    })
  }
  const handleUpdateUsername=()=>{
    history.push({
      pathname:'/update-username',
      state:{user}
    })
  }
  const handleDelete=async ()=>{
    const confirmDelete = window.confirm("Are you sure you want to delete your account?");
    
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:9002/${id}`);
        history.push('/login');
      } catch (error) {
        console.error("Error deleting account:", error);
        // handle error appropriately, show a message, etc.
      }
    }
  }
  return (
    <div className='homepage'>
        <h1>Hello! {user.name}</h1>
        <h3>{user.email}</h3>
        <div className='buttonContainer'>
        <div className='buttonContainer1'>
        <div className='button' onClick={()=>history.push('/login')}>Logout</div>
        <div className='button' onClick={handleUpdateUsername}>Update Username</div>
        </div>
        <div className='buttonContainer1'>
        <div className='button' onClick={handleUpdatePassword}>Update Password</div>
        <div className='button' onClick={handleDelete}>Delete Account</div>
        </div>
        </div>
    </div>
  )
}

export default Homepage