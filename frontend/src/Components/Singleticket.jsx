import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Viewticket from "./Viewticket";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams, useSearchParams } from "react-router-dom";

const Singleticket = () => {
  const [ticket, setTicket] = useState([]);
  const ticketId ="";
  //debugger;
  
  //console.log(response);

  const navigate = useNavigate();

  const btv = () => {
    navigate("/Viewticket");
  };
  const btl = () => {
    navigate("/");
  };
  
  const onTicketClose = (e) => {
    e.preventDefault();
   // dispatch(closeTicket(ticketId));
    toast.success("Ticket Closed Successfully");
    navigate("/Viewticket");
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
  const token = query.get('ticketId')
  const ticketId =token;
  const response = axios.get("createticket?id=" + token).then(res=>{
    console.log(res.data[0]);
    setTicket(res.data[0]);
  })
   
  }, [ticketId]);

  

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <button
          onClick={btv}
          style={{
            background: "black",
            color: "white",
            height: "30px",
            width: "80px",
          }}
        >
          BACK
        </button>
        <h2 style={{background:'#d4d8d4'}}>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3 style={{background:'#eb86'}}>
          Date Submitted:{" "}
          {new Date(ticket.createdAt).toLocaleString("en-IN")}
        </h3>
        <h3 style={{background:'#dfaea1'}}>Product : {ticket.product}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
      </header>
      {ticket.status !== "closed" && (
        <button style={{background:'red',textSize:'18%',width:'90px',height:'35spx'}} className="btn btn-block btn-danger" onClick={btl}>
          Close Ticket
        </button>
      )}
    </div>
  );
};

export default Singleticket;
