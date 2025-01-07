import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'; // Import axios
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Correctly prevent default form submission

    try {
      const userdata = { email, password };
      const response = await axios.post("/" ,userdata); // Correct API route

      if (response.data) {
        toast.success("Login successful!");
        alert('Login Succesfully')
        navigate('/Help'); // Redirect after successful login
      }
    } catch (error) {
      toast.error("You are not registered. Please register yourself."); // Better error handling using toast
    }
  };

  const handleRegister = () => {
    navigate('/Register'); // Navigate to registration page
  };

  return (
    <div style={{background:'#70638f'}} className='container w-50'>
      <ToastContainer /> {/* For displaying toast notifications */}
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
              
          </a>
          <div style={{textAlign:'center',height:'40px'}} className='display-flex '>
            <button style={{width:'90px',height:'38px',background:'yellow'}} onClick={handleRegister}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blackColor"  className="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg> Register
            </button>
          </div>
        </div>
      </nav>

      <form className='mt-5' onSubmit={handleSubmit} style={{textAlignLast:"center"}}>
        <h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-box-arrow-in-right mb-2" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
            <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
          </svg> Login
        </h1>
        <h3 className='text-center'>Please login to get support</h3>
        <div className="mb-3">
          <input style={{width:"500px",height:'30px'}} type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="form-control" placeholder='Enter Your Email' required />
        </div><br></br>
        <div className="mb-3">
          <input style={{width:"500px",height:'30px'}} type="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="form-control" placeholder='Enter Your Password' required />
        </div>
        <br></br>
        <button style={{width:"100px",height:'30px',background:'red'}}  type="submit"  className="btn btn-outline-dark w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
