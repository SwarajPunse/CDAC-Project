import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ForgotPwdComp from "./ForgotPwdComp";
import { login } from "./slice";


import { useReducer } from "react";

import{ useState} from "react";


export default function LoginComp()
{ 
    const init={
        username:"",
        password:""
    
    }
    
    const reducer=(state,action) => {
        switch(action.type)
        {
            case 'update':
                return {...state , [action.fld]:action.val}
            case 'reset':
                return init;
        }
    }

    const [info, dispatch]=useReducer(reducer,init);
    const [msg,setMsg]=useState("");
    const navigate = useNavigate();
    const reduxAction =useDispatch();


    const sendData =(e)=> {
        e.preventDefault();
        const reqOptions={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(info)
        }
        fetch("http://localhost:8080/checklogin",reqOptions)
        .then(resp => resp.text())
        .then(console.log(info))
        .then(text => text.length ? JSON.parse(text):{})
        .then(obj => {
             if(Object.keys(obj).length === 0)
             {
                 console.log(Object.keys(obj).length);
                 setMsg(<b className="lead" style={{color:'red'}}>"Wrong Username?Password"</b>)
             }   
            else{
                
                console.log(JSON.stringify(obj))
                if(obj.status === false)
                {
                
                    setMsg(<b className="lead" style={{color:'red'}}>"Request has not been approved"</b>);
                }
                else{
                   
                    reduxAction(login())
                    localStorage.setItem("loggedUser",JSON.stringify(obj));
                    console.log(obj.role.id);
                    if(obj.role.id === 1)
                    {
                        navigate("/admin");

                    }
                    else if(obj.role.id === 2)
                    {
                        navigate("/ArtistHome");
                    }
                    else if(obj.role.id === 3)
                    {
                        navigate("/customerHome");
                    }
                    else if(obj.role.id=== 4)
                    {
                        navigate("/carporate_customer");
                    }

                }
            }
        })
    }

    const Forgot =()=>{navigate('/reset-pwd');}
    return(
        

         <div style={{marginTop:"4%"}}>   
        

    <h1 className="lead" style={{color:'#461303', fontSize:'35px',backgroundColor:'#FCC9B9', width:'30%',marginLeft:'35%',borderRadius:'20%'}}>Login Page</h1>
    <form border="solid" style={{border:'solid',marginLeft:'32%',marginRight:'32%',paddingBottom:'2%',paddingTop:'2%'}}>
        <div className="mb-3" style={{marginLeft:'32%',marginRight:'32%'}}>
        <label htmlFor="username" className="form-label" > Enter User ID:</label>
        <input type="text" className="form-control" id="username" name="username" value={info.uid}
        onChange={(e)=>{dispatch({type:'update',fld:'username',val:e.target.value})}}/>
        <div id="emailHelp" className="form-text">we'll never share your email with anyone</div>
        </div>
        <div className="mb-3"  style={{marginLeft:'32%',marginRight:'32%'}}>
        <label htmlFor="password" className="form-label">Enter Password:</label>
        <input type="password" className="form-control" id="password" name="password"value={info.pwd} 
        onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}}/>
        
        </div>
        
        
        <button type="submit" className="btn btn-primary mb-3" style={{marginRight:'2%'}} onClick={(e)=>{sendData(e)}}>LOGIN</button><span width="5cm"></span>
        <button type="reset" className="btn btn-primary mb-3" onClick={(e)=>{dispatch({type:'reset'})}}>CLEAR</button>
        <br/>
        

        <a type="button" onClick={Forgot}><u style={{color:'blue'}}>Forgot Password ?</u></a>


    </form>
    {/* <p>{JSON.stringify(info)}</p> */}
    <p style={{marginTop:"2%"}}> {msg}</p>
    <br/>
    
    </div>
    


    
    
    )
}