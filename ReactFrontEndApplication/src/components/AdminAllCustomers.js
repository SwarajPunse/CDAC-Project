import AdminNavBar from "./AdminNavBar";
import { useEffect, useState } from "react";
export default function AdminAllCustomers()
{
    const username=JSON.parse(localStorage.getItem("loggedUser"));

    const [data,setData]=useState([]);

   
    useEffect(()=>{
        
        //fetch("http://localhost:8080/getallcustomers")
        fetch("https://localhost:7299/api/Customers")
        .then(res=>res.json())
        .then(data=>setData(data))
        
    },[]);

    return(
        <div>
            <AdminNavBar/> 
            <h1>Customer List {username.fname}</h1>
            <table className="table table-striped" >
                <tbody>
                <tr>
                <th className="text-center">Customer Id</th>
                    <th className="text-center">First Name</th>
                   
                    <th className="text-center">Last Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Contact</th>
                    <th className="text-center">Address</th>
                    {/* <th className="text-center">Membership ID</th>
                    <th className="text-center">Login ID</th> */}
                    
                    
                    
                    
                </tr>
               

                { // here slice used for limited data
                    data.map(v => {
                        // if(v.role.id === 2){
                           // if(v.roles_id === 2){
                        return (
                            <tr>                                
                               
                               <td className="text-center">{v.id}</td>
                                <td className="text-center">{v.fname}</td>
                                <td className="text-center">{v.lname}</td>
                                <td className="text-center">{v.email}</td>
                                <td className="text-center">{v.mobile_no}</td>
                                <td className="text-center">{v.address}</td>
                                {/* <td className="text-center">{v.membership.id}</td>
                                <td className="text-center">{v.login.id}</td> */}
                                

                                
                            </tr>
                        )}
                    
                )}
                
            </tbody>
            </table>
        </div>
    )
}