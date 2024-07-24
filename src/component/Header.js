import React from 'react'
import { auth } from '../utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
 const user=useSelector((store)=>store.user)
  const navigate=useNavigate()
  const handleSignout=()=>{
    signOut(auth).then(() => {
    navigate("/")
}).catch((error) => {
  
});
  }
  return (
    <div className='absolute w-full h-full bg-gradient-to-b from-black '>

      <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
      {user && <div className='absolute right-2 top-2 w-40 h-8 ' >
      <button onClick={handleSignout} className='bg-red-700 rounded-md text-white w-full h-full'>SignOut</button>
    </div>}
    </div>
    
  )
}

export default Header