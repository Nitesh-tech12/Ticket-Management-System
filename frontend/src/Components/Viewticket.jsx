// import React from 'react'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

const Viewticket = () => {
  const navigate = useNavigate();

  const show = (e) => {

    navigate("/Singleticket");
  };
  const back = () => {
    navigate("/");
  };

  axios
    .get("/Viewticket")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios
      .get("/createticket")
      .then((users) => setusers(users.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="container">
      <nav class="navbar mt-2 ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            TicketSystem
          </a>
          <div style={{ textAlign: "center" }} className="display-flex ">
            <button
              onClick={back}
              style={{ width: "100px", height: "40px", background: "gold" }}
              className="me-2 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="mb-1 bi bi-door-closed-fill"
                viewBox="0 0 16 16"
              >
                <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className="container mt-5 edit">
        <table class="table">
          <thead>
            <tr className="nit1">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Product</th>
              <th scope="col"></th>
              <th scope="col">Date</th>
              <th scope="col"></th>
              
            </tr>
          </thead>

          <tbody>
            {users.map((uuu) => {
              return (
                <tr>
                  <td className="rna">{uuu._id}</td>
                  <td className="rna">{uuu.name}</td>
                  <td className="rna">{uuu.email}</td>
                  <td className="rna">{uuu.product}</td>
                  <td className="rna"></td>
                  <td className="rna">{uuu.createdAt}</td>
                  <td className="rna">
              
                 <Link to={`/Singleticket?ticketId=${uuu._id}`} type="button" className='btn btn-reverse btn-sm'>View</Link>
                 </td>     
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Viewticket;
