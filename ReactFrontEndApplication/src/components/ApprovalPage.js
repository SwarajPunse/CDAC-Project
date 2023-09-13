import AdminNavBar from "./AdminNavBar";
import { useEffect, useState } from "react";
export default function ApprovalPage()
{
    // const username=JSON.parse(localStorage.getItem("loggedReducer"));
    const [data,setData]=useState([]);

   
    useEffect(()=>{
        
        fetch("http://localhost:8080/getalllog")
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(error=> console.error('Error:',error));
        
    },[]);

    const toggleArtistApproval=((id)=> {
        // alert(typeof(id));
        // alert(id);
        fetch("http://localhost:8080/updateapprove?id="+id)
        .then(res=>res.json())
        .then(data=>setData(prevData => prevData.map(v => v.id === id ? { ...v, approved: !v.approved } : v))
    );})
    
    return(
        <div>
            <AdminNavBar/>
            <h1>
            {/* Admin {username.fname} */}
            </h1>

            <h2 className="text-center"><b>Artist Approval Details</b></h2>

            <table className="table table-striped" >
                <thead>
                <tr>

                    <th className="text-center">Login Id</th>
                    
                    <th className="text-center">Username</th>
                    
                    <th className="text-center">Status</th>
                    
                    <th className="text-center">Question</th>
                    
                    <th className="text-center">Answer</th>

                    <th className="text-center">Approval</th>
                    
                </tr>
                </thead>
                <tbody> 
                {
                    data.map(v => (
                            <tr key= {v.id}>
                                <td className="text-center">{v.id}</td>                                
                                 <td className="text-center">{v.username}</td>
                                <td className="text-center">{v.status.toString()}</td>
                        
                                <td className="text-center">{v.question}</td>
                                <td className="text-center">{v.answer}</td>
                                <td className="text-center">
                                    <label className="switch">
                                        <input
                                        type="checkbox"
                                        checked={v.approved}
                                        onChange={() => toggleArtistApproval(v.id)}/>
                                        <span className="slider round"></span></label></td> 
                            
                            </tr>
                        ))}
                        </tbody>
                    
                

            </table>

         </div>   
    )
}
