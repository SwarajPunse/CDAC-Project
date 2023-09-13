// import { useReducer, useState } from "react"
// import { Navigate } from "react-router-dom";



// export default function ArtistReg()
// {
//    const init = {
//     username:"",
//     password:"",
//     firmname:"",
   
//     email:"",
//     mobile_no:"",
//     address:"",
//     gst_no:"",
//     answer:" ",
//     question:" ",
//     m_id:" "
    
//    }

//    const reducer =(state, action )=>{

//     switch(action.type)
//     {
//         case 'update':
//             return{...state,[action.fld]:action.val}
//         case 'reset':
//                 return init;
//         // default:
//         //     return state;
//     }
//    }

//    const[info, dispatch] = useReducer(reducer,init);
//    const[ role,setRole]=useState(null);
    

//    const sendData =  (e) => {

//     e.preventDefault();
//     const reqOptions = {
//         method : 'POST',
//         headers:{'content-type':'application/json'},
//         body: JSON.stringify(info)
//     }
    
//      fetch("http://localhost:8080/registercorporate",reqOptions)
//     .then(resp => {
//         if(resp.ok)
//         return resp.json();
//     else
//     throw new Error("server error");

//     // })
//     .then(obj => {
//         alert("Reg successful . try login");
//         Navigate('/');
//     })
//     .catch((error)=> alert(" "))

//    }





    

    

  
//     return(
    
// <div className="app" >
//          <form className="bg-radial-gradient-info" style={{backgroundColor : "grey"}}   method ="post">
//          <label for="username" className=" text-uppercase text-left " >username</label>
//         <input type="text" className="form-control" id="username" placeholder="Enter the Username" name="username" value={info.username}
//         onChange={(e)=>{dispatch({type:'update',fld:'username',val:e.target.value})}}/>
//         <div id="emailhelp" class="form-text">...</div>

//         <label for="password" className=" text-uppercase text-left " >password</label>
//         <input type="password" className="form-control" id="password" placeholder="Enter the password" name="password" value={info.password}
//         onChange={(e)=>{dispatch({type:'update',fld:'password',val:e.target.value})}}/>
//         <div id="emailhelp" class="form-text">...</div>
//         <label for="firmname" className=" text-uppercase">firmname</label>
//         <input type="text" className="form-control" id="firmname" placeholder="Enter the firmname" name="firmname" value={info.firmname}
//          onChange={(e)=>{dispatch({type:'update',fld:'firmname',val:e.target.value})}}/>
//          <div id="emailhelp" class="form-text">...</div>
        
//         <label for="email" className="form-label text-uppercase">email</label>
//         <input type="email" className="form-control" id="email" placeholder="Enter the email " name="email" value={info.email}
//          onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}/>
//          <div id="emailhelp" class="form-text">...</div>

//         <label for="mobile_no" className="form-label text-uppercase">mobile no</label>
//         <input type="text" className="form-control" id="mobile_no" placeholder="Enter the Mobile no" name="mobile_no" value={info.mobile_no}
//          onChange={(e)=>{dispatch({type:'update',fld:'mobile_no',val:e.target.value})}}/>
//          <div id="emailhelp" class="form-text">...</div>

//         <label for="address" className="form-label text-uppercase"> Address</label>
//         <input type="text" className="form-control" id="address" placeholder="Enter the Address" name="address" value={info.address}
//          onChange={(e)=>{dispatch({type:'update',fld:'address',val:e.target.value})}}/>
//          <div id="emailhelp" class="form-text">...</div>

//         <label for="gst_no" className="form-label text-uppercase">gst no</label>
//         <input type="text" className="form-control" id="gst_no" placeholder="Enter the GST No" name="gst_no" value={info.gst_no}
//          onChange={(e)=>{dispatch({type:'update',fld:'gst_no',val:e.target.value})}}/>
//          <div id="emailhelp" class="form-text">...</div>

//          <label for="question" className="form-label text-uppercase">question</label>
//          <select type="text" className="form-control" id="question"  name="question" 
//          onChange={(e)=>{dispatch({type:'update',fld:'question',val:e.target.value})}}>
//             <option placeholder="select" id="question" value="1">select</option>
//             <option id="question" value="2">what is your favourite colour?</option>
//             <option id="question" value="3"> who is your idol?</option>
//             <option id="question" value="4">what is your favourite sport?</option>
//             <option id="question" value="5">what is your pet's name?</option>
//             <option id="question" value="6">what is your nickname?</option>
//             </select><br/>
//         {/* <input type="text" className="form-control" id="gst_no" placeholder="Enter the GST No" name="gst_no" value={info.gst_no}
//          onChange={(e)=>{dispatch({type:'update',fld:'gst_no',val:e.target.value})}}/> */}
//          <div id="emailhelp" class="form-text">...</div>


//          <label for="answer" className="form-label text-uppercase">answer</label>
//         <input type="text" className="form-control" id="answer" placeholder="Enter the answer" name="answer" value={info.answer}
//          onChange={(e)=>{dispatch({type:'update',fld:'answer',val:e.target.value})}}/>
//          <div id="emailhelp" class="form-text">...</div>

//          <label for="m_id" className="form-label text-uppercase">Membership</label>
//          <select type="text" className="form-control" id="m_id"  name="Membership" 
//          onChange={(e)=>{dispatch({type:'update',fld:'m_id',val:e.target.value})}}>
//             <option placeholder="select" id="m_id" value="1">select</option>
//             <option id="m_id" value="9">Co_Diamond</option>
//             <option id="m_id" value="8"> Co_platinum</option>
//             <option id="m_id" value="7">Co_gold</option>
           
//             </select><br/>
        
//          <div id="emailhelp" class="form-text">...</div>


//         <button type="submit"  chassname=" btn btn-secondary mb-3" onClick={(e)=>{sendData(e)}} id="submit">Submit</button>
//         <button type="reset" className=" btn btn-secondary mb-3" onClick={()=> {dispatch({type:'reset'})}}> Reset</button>
    
 
    
//  </form>
//  <p>{JSON.stringify(info)}</p>
// </div>
    
 
    
   


//     )


// }