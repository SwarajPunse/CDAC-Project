import { useState } from "react";
import {useHistory } from 'react';
import { Route, Routes } from "react-router-dom";
import Co_CustRegister1 from "./Co_CustRegister1";

export default function RegisterComp()
{
    const[ role,setrole]=useState(' ');
    
    const history =useHistory();
    const [selectedOption,setSelectedOption] = useState('');

    const handleRadioChange=(event) =>{
        setSelectedOption(event.target.value);
    };
    
    const handleNextClick =() =>{
        if(selectedOption === 'artist')
        {
            history.push('/registerartist')
        }
    }
  
    return(
    
        <div className="app">
         <form className="bg-radial-gradient-info" style={{backgroundColor : "grey"}}  method ="get">
        <table className="table table-borderd table-hover"><tbody>
        <tr>
        <td><label  className="text-uppercase" htmlFor="role">For what you are registering for?</label></td>
        </tr>
        <tr>
        <td onChange={(e) => setrole(e.target.value)}>
            <input type="radio" value="artist" checked={selectedOption === 'artist'} onChange={handleRadioChange} name="role" />Artist
        <input type="radio" value="customer" name="role" />Customer
        <input type="radio" value= "registercorperate" name="role"  />Corporate-Customer</td>
    </tr>
    </tbody>
    </table>
    {/* <div className="app" style={{display:role==="artist"?'inline-block':'none'}}>
        <label for="fname" className=" text-uppercase text-left " >fname</label>
        <input type="text" className="form-control" id="fname" placeholder="Enter the first name" name="fname"/>
        <label for="lname" className="form-label text-uppercase">lname</label>
        <input type="text" className="form-control" id="lname" placeholder="Enter the last name" name="lname"/>
        <label for="email" className="form-label text-uppercase">email</label>
        <input type="email" className="form-control" id="email" placeholder="Enter the email " name="email"/>
        <label for="mobileno" className="form-label text-uppercase">mobile no</label>
        <input type="number" className="form-control" id="mobileno" placeholder="Enter the Mobile no" name="mobileno"/>
        <label for="Add" className="form-label text-uppercase"> Address</label>
        <input type="text" className="form-control" id="add" placeholder="Enter the Address" name="add"/>
        <label for="studio" className="form-label text-uppercase">Studio</label>
        <input type="text" className="form-control" id="studio" placeholder="Enter the studio name" name="studio"/>
        <button type="submit" id="submit">Submit</button>

    </div>

    <div className="app" style={{display:role==="customer"?'inline-block':'none'}}>
        <label for="fname" className=" text-uppercase">fname</label>
        <input type="text" className="form-control" id="fname" placeholder="Enter the first name" name="fname"/>
        <label for="lname" className="form-label text-uppercase">lname</label>
        <input type="text" className="form-control" id="lname" placeholder="Enter the last name" name="lname"/>
        <label for="email" className="form-label text-uppercase">email</label>
        <input type="email" className="form-control" id="email" placeholder="Enter the email " name="email"/>
        <label for="mobileno" className="form-label text-uppercase">mobile no</label>
        <input type="number" className="form-control" id="mobileno" placeholder="Enter the Mobile no" name="mobileno"/>
        <label for="Add" className="form-label text-uppercase"> Address</label>
        <input type="text" className="form-control" id="add" placeholder="Enter the Address" name="add"/>
        <button type="submit" id="submit">Submit</button>
       
    </div>

    <div className="app" style={{display:role==="corporatecust"?'inline-block':'none'}}>
        <label for="firmname" className=" text-uppercase">firmname</label>
        <input type="text" className="form-control" id="firmname" placeholder="Enter the firmname" name="firmname"/>
        
        <label for="email" className="form-label text-uppercase">email</label>
        <input type="email" className="form-control" id="email" placeholder="Enter the email " name="email"/>
        <label for="mobileno" className="form-label text-uppercase">mobile no</label>
        <input type="number" className="form-control" id="mobileno" placeholder="Enter the Mobile no" name="mobileno"/>
        <label for="Add" className="form-label text-uppercase"> Address</label>
        <input type="text" className="form-control" id="add" placeholder="Enter the Address" name="add"/>
        <label for="gst" className="form-label text-uppercase">gst no</label>
        <input type="number" className="form-control" id="gst" placeholder="Enter the GST No" name="gst"/>
        <button type="submit" id="submit">Submit</button>
    </div>
  */}
    
    </form>
    <div>
        <Routes>
            <Route path="registercorperate" element={<Co_CustRegister1/>}/>
        </Routes>
        
    </div>
    </div>
    
    


    )


}