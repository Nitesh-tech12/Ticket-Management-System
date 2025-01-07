import React from 'react'

import {useNavigate} from 'react-router-dom'

const Help = () => {

  const navigate = useNavigate();
  const regstr = ()=>{
    navigate("/Ticket")
  }
  const logout = ()=>{
    navigate("/")
  }
  const viewtk = ()=>{
    navigate("/Viewticket")
  }
  return (
    <div>
      <div style={ {display:'flex',justifyContent:'space-evenly'}}>
            <h6 style={{marginTop:'10px',textAlign:'center'}}>Support Desk</h6>
            <div style={{gap:'20px'}}>
                <button onClick={logout} className='ms-3' style={{textAlign:'center', border:'none', backgroundColor:'white'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" mb-1 bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>LOG OUT</button>
               </div>
            </div>
            <h1 style={{marginTop:'20px',textAlign:'center'}}><b>How Can I Help You ?</b></h1>
        <h5 style={{color:'GrayText',textAlign:'center'}}>Please choose from an option below</h5>
        <div>
          <button onClick={regstr} style={{width:'630px',textAlign:'center' ,height:'35px',  backgroundColor:'white', color:'black',marginLeft:'300px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" mb-1bi bi-question-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927"/>
</svg>Create New Ticket</button>
        </div>
        <div>
          <button onClick={viewtk} style={{textAlign:'center',width:'630px', height:'35px', marginLeft:'300px', backgroundColor:'black', color:'white', marginTop:'20px'}}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  fill="currentColor" className=" mb-1 bi bi-ticket-detailed-fill" viewBox="0 0 16 16">
  <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zm4 1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5m0 5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5M4 8a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1"/>
</svg>View Your Ticket</button>
        </div>
    </div>

  )
}

export default Help
