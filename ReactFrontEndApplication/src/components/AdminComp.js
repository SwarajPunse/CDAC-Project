import React from 'react';
import { useEffect, useState } from "react";
import AdminNavBar from './AdminNavBar';
import { Link,} from 'react-router-dom';



export default function AdminComp() {

 
  const [data,setData]=useState([]);

  // const sendData =(e)=> {
  //   e.preventDefault();
  //   const reqOptions={
  //       method:'POST',
  //       headers:{'content-type':'application/json'},
  //       body:JSON.stringify(info)
  //   }
  // }

  const handleClick = () => {
    
    fetch("http://localhost:8080/getallartist")
    .then(res=>res.text())
        .then(text=>text.length ? JSON.parse(text):{})
        .then(obj=>{
          setData(obj);
        })
        // .catch(error=> console.error('Error:',error));
     
  }
    
  //const username = JSON.parse(localStorage.getItem("loggedUser"));
  return (
    <div>
       <AdminNavBar /> 
       
          {/* <div className='container-fluid'>
            <input type="button" value="Pending Requests" onClick={handleClick} />
            <table className="table table-striped" >
            <tbody>
              {data.map(log =>(
                
                <tr><td key={log.id=2}>{log.id}</td>
                <td key={log.id}>{log.username}</td>
                <td key={log.id}>{log.role.id} </td>
                <td key={log.id}>{log.role.role} </td>
                  
               </tr>
              ))}
              </tbody>
            </table>
    </div> 
      */}
    </div>
  )
  
}

