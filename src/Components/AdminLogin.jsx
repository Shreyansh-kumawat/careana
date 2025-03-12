import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {loginAsAdmin} from '../redux/authSlice';

function AdminLogin() {
    const dispatch = useDispatch();
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const adminPass1 = 'shreyansh';
    const adminPass2 = 'qwerty';


const handleLogin =()=>{
if(password1 === adminPass1 && password2 === adminPass2){
    dispatch(loginAsAdmin());
    window.location.href = '/admin-dashboard'
}else{
    alert("Good Try.");

}

}

return(
<div className='bg-[#121c2d] p-8'>
    <h2>Admin Login</h2>
    <br />
      <input type="password"
      placeholder="Password 1" 
      onChange={(e) => 
      setPassword1(e.target.value)} 
      className='bg-black rounded-sm p-2 m-2'
      />
      <br />

      <input type="password" 
      placeholder="Password 2" 
      onChange={(e) => 
      setPassword2(e.target.value)}
      className='bg-black rounded-sm p-2 m-2'

      />
      <br /><br />


      <button onClick={handleLogin}
      className='cursor-pointer bg-gray-500 text-[#0f1f67] font-extrabold  rounded-sm p-2 m-2'
      >Login</button>
</div>
)
};

export default AdminLogin;