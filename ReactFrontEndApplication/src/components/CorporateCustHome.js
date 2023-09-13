import React from 'react';
import { Link } from 'react-router-dom';
import CorporateCustNavBar from './CorporateCustNavBar';
import  { useState,useEffect } from "react";

export default function CorporateCustomerComp() {
  const [cust, setCustomer] = useState([]);

    
  useEffect(() => {
    // Fetch customer data from local storage (assuming it's stored correctly)
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    setCustomer(loggedUser);
    console.log(loggedUser.id);

if (loggedUser && loggedUser.id) {
fetch("http://localhost:8080/getcocustbyloginid?login_id="+loggedUser.id)
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
      <CorporateCustNavBar/>
    </div>
    )
}

