import AdminNavBar from "./AdminNavBar";
import { useEffect, useState } from "react";
export default function AdminAllArtists()
{
    const username=JSON.parse(localStorage.getItem("loggedUser"));

    const [data,setData]=useState([]);

   
    useEffect(()=>{
        
        //fetch("http://localhost:8080/getallartist")
        fetch("https://localhost:7299/api/Artists")
        .then(res=>res.json())
        .then(data=>setData(data))
        
    },[]);
    return(
        <div>
            <AdminNavBar/> 
            <h1>Artist List {username.fname}</h1>
            <table className="table table-striped" >
            <tbody>
                <tr>
                <th className="text-center">Artist Id</th>
                    <th className="text-center">First Name</th>
                   
                    <th className="text-center">Last Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Contact</th>
                    <th className="text-center">Studio Name</th>
                    <th className="text-center">Address</th>
                    {/* <th className="text-center">Membership ID</th>
                    <th className="text-center">Membership Duration(In months)</th> */}
                    
                    
                    
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
                                <td className="text-center">{v.studio}</td>
                                <td className="text-center">{v.address}</td>
                                {/* <td className="text-center">{v.member.id}</td>
                                <td className="text-center">{v.member.duration}</td> */}

                                
                            </tr>
                        )}
                    
                )}
            </tbody>
            </table>
        </div>
    )
}