
import { useEffect, useState } from "react";
import CorporateCustNavBar from "./CorporateCustNavBar";
export default function AllArtistCorpComp()
{
    

    const [data,setData]=useState([]);

   
    useEffect(()=>{
        
        fetch("http://localhost:8080/getallartist")
        .then(res=>res.json())
        .then(data=>setData(data))
        
    },[]);


    
    return(
        <div>
            <CorporateCustNavBar/>
            
            
            <table className="table table-striped" >
                <tbody>
                <tr>
                    
                    <th className="text-center">First Name</th>
                   
                    <th className="text-center">Last Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Contact</th>
                    <th className="text-center">Studio Name</th>
                    <th className="text-center">Address</th>
                    
                    
                    
                    
                </tr>
               

                { 
                    data.map(v => {
                        
                        return (
                            <tr key={v.id}>                                
                               
                                
                                <td className="text-center">{v.fname}</td>
                                <td className="text-center">{v.lname}</td>
                                <td className="text-center">{v.email}</td>
                                <td className="text-center">{v.mobile_no}</td>
                                <td className="text-center">{v.studio}</td>
                                <td className="text-center">{v.address}</td>
                                

                                
                            </tr>
                        )}
                    
                )}
              </tbody>
            </table>
        </div>
    )
}

// export default function AllArtists()
// {
//     return(
//         <div>
//            <h1>All Artist</h1> 
//         </div>
//     )
// }