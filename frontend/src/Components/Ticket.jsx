import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Ticket = () => {
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  // const [type, settype] = useState("");
  const [title, settitle] = useState("");
  const [product, setproduct] = useState("");

  const [description, setdescription] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const adduser = { name, email, title ,product, description};
      const response = await axios.post("/createticket", adduser)

      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log("User added successfully:", response.data);
        navigate('/help')
      }
      
     
      console.log(response)
      
   
      
    } catch (error) {

        toast.error("already existing data");
      
      console.error("Error adding user:", error);
    }
  };
return (

    <div>
            <ToastContainer></ToastContainer>

       < form style={{textAlign:'center',background:'grey'}} onSubmit={handleSubmit}>
     
        <div>
        <div style={{ marginBottom:'10px',backgroundColor:'white',marginTop:'30px',textAlign:'center'}}>
      <button  className='ms-3'style={{backgroundColor:'white',border:'black',textAlign:'center'}} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mb-1 bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg>BACK</button>  
      </div >
        <h1 ><b>Create New Ticket</b></h1>
        <h>Please fill out the form below</h>
        
        <label style={{marginRight:'30px'}}>NAME</label><br></br>
        <input style={{height:'35px', marginBottom:'15px',marginLeft:'20px'}} type='text' placeholder='Please enter your name' size='80'value={name} onChange={(e) => setname(e.target.value)}></input>
        <br></br>
        <label style={{marginRight:'30px'}}>EMAIL</label><br></br>
         <input style={{height:'35px', marginBottom:'15px',marginLeft:'20px'}} type='email' placeholder='Please enter your email' size='80'value={email} onChange={(e) => setemail(e.target.value)}></input>
         <br></br>
         
         <label style={{marginRight:'30px'}}>TITLE OF THE ISSUE</label><br></br>
         <input style={{height:'35px', marginBottom:'15px',marginLeft:'20px'}} type='text' placeholder='Please enter your Issue' size='80'value={title} onChange={(e) => settitle(e.target.value)}></input>
         <br></br>
         <label   style={{marginRight:'30px',}}>Product</label><br></br>
         <select style={{height:'40px',width:'570px', marginBottom:'15px',marginLeft:'20px'}}value={product} onChange={(e)=> setproduct(e.target.value)} name ='Product' id='Type'>
         <option value="Phone">Mobile</option>
         <option value="PC">PC</option>
         <option value="Tablet">Tablet</option>
         <option value="Laptp">Laptop</option>
         </select> 
         <br></br>
         <label style={{marginRight:'30px'}}>DESCRIPTION OF THE ISSUE</label><br></br>
         <input style={{height:'35px', marginBottom:'15px',marginLeft:'20px'}} type='text' placeholder='Please enter your Description' size='80'value={description} onChange={(e) => setdescription(e.target.value)}></input>
         <br></br>
        </div>
        <div>
        <button type='submit' style={{width:'150px', height:'35px', marginLeft:'17px', backgroundColor:'black', color:'white' ,marginTop:'10px'}}>Submit</button>
        
          </div>
        </form>
  
      
      </div>
  
  );
}

export default Ticket
