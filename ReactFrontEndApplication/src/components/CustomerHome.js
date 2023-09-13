import React from 'react';
import { Link } from 'react-router-dom';
import CustomerNavBar from "./CustomerNavBar";
import pic1 from '../images/art_for_home.jfif';
  import pic2 from '../images/art_for_office.jpg';
  import pic3 from '../images/outdoor.jpg';
  import  { useState,useEffect } from "react";



export default function CustomerHome() {

  const [cust, setCustomer] = useState([]);

 

  useEffect(() => {
      // Fetch customer data from local storage (assuming it's stored correctly)
      const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
      setCustomer(loggedUser);
      console.log(loggedUser.id);

if (loggedUser && loggedUser.id) {
  fetch("http://localhost:8080/getcustomertbyloginid?login_id="+loggedUser.id)
      .then(resp => {
          if (resp.ok) {
              return resp.json();
          } else {
              throw new Error("Server error");
          }
      })
      .then(customerData => {
          // Store fetched customer data in local storage
          localStorage.setItem("customer", JSON.stringify(customerData));
      })
      .catch(error => {
          console.error("Error fetching customer data:", error);
      });
}
}, []);

  return (
    <div>
   <CustomerNavBar/>

   <div class="container text-center">
  <div class="row">
  <div class="col">
    <img src={pic1} class="img-thumbnail" width='410cm' height='400cm'></img><br/>
    <h4><u>Art for Home</u></h4>
    </div>
    <div class="col">
    <img src={pic3} class="img-thumbnail" width='500cm' height='800cm'></img><br/>
    <h4><u>Art for Office</u></h4>
    </div>
    <div class="col">
    <img src={pic2} class="img-thumbnail" width='350cm' height='320cm'></img><br/>
    <h4><u>Art for Outdoor Installation</u></h4>
    </div>
    
  </div>
  </div>
  </div>
  )
}

