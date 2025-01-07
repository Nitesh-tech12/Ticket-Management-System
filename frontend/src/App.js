import './App.css';
import Help from './Components/Help.jsx';
import Login from './Components/Login';
import Register from './Components/Register';
import Ticket from './Components/Ticket.jsx';
import Viewticket from './Components/Viewticket.jsx';
import Singleticket from './Components/Singleticket.jsx';
import { useState } from 'react';
// import { AuthProvider } from './AuthContext';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
const [darkmode , setdarkmode]= useState(false)

const togglemode=()=>{
  setdarkmode(!darkmode)
}

  return (
    // <AuthProvider>
    <div  className={darkmode ? 'dark-mode' : 'light-mode'} id='App'>
 <BrowserRouter>
 <div>
  <button onClick={togglemode}> D/L</button>
 </div>
      <Routes>
         <Route path="/" element={<Login />}/>
          <Route path="/Register" element={<Register />} />
          <Route path="/Ticket" element={<Ticket />} />  
          <Route path ="/Help"  element={<Help/>}  />
          <Route path = "/Singleticket" element= {<Singleticket/>}/>
          <Route path = "/Viewticket" element={<Viewticket/>}/>
          {/* <Route path = "/Ticketnew" element = {<Ticketnew/>}/> */}
          
      </Routes>
    </BrowserRouter>

      </div>
      // </AuthProvider>
  );
}

export default App;
