import { useReducer, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function CustomerRegister1() {

    const init = {
        
        username:{ value: "", touched: false, valid: false, error: "" },
         password:{ value: "", touched: false, valid: false, error: "" },
        //  cpassword: { value: "", touched: false, valid: false, error: "" },
        fname: { value: "", touched: false, valid: false, error: "" },
        lname: { value: "", touched: false, valid: false, error: "" },
        email: { value: "", touched: false, valid: false, error: "" },
       
       
        mobile_no: { value: "", touched: false, valid: false, error: "" },
         address:{ value: "", touched: false, valid: false, error: "" },
        
         question:{ value: "", touched: false, valid: false, error: "" },
        answer:{ value: "", touched: false, valid: false, error: "" },
         m_id:{ value: "", touched: false, valid: false, error: "" },
         formvalid:false
        
        
    }



    const reducer = (state, action) => {
        //console.log(state);
        switch (action.type) {
            case 'update': {
                const { name, value, touched, valid, error, formvalid } = action.data;
                // return{...state,[name]:{value,touched,valid,error},formvalid}
                return {
                    ...state,
                    [name]: { ...state[name], value, touched, valid, error },
                    formvalid
                }   //modifying and returning new object as state
            }
            case 'reset': {
                return init;
            }
        }
    }


    const [info, dispatch] = useReducer(reducer, init);
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const validateData = (name, value) => {
        let valid = false;
        let error = "";
        switch (name) {
            case 'username': var pattern = /^[A-Za-z0-9_]{5,29}$/
            if (pattern.test(value)) {
                valid = true;
                error = "";
            }
            else {
                valid = false;
                error = "Username invalid"
            }
            break;
            case 'fname': var pattern = /^[A-Z][a-z]{2,15}$/
                if (pattern.test(value)) {
                    valid = true;
                    error = "";
                }
                else {
                    valid = false;
                    error = "First name invalid"
                }
                break;
            case 'lname': var pattern = /^[A-Z][a-z]{2,15}$/
                if (pattern.test(value)) {
                    valid = true;
                    error = "";
                }
                else {
                    valid = false;
                    error = "Last name invalid"
                }
                break;
            case 'email': var pattern = /^[A-Za-z0-9_.-]{3,15}@gmail.com$/
                if (pattern.test(value)) {
                    valid = true;
                    error = "";
                }
                else {
                    valid = false;
                    error = "Email invalid"
                }
                break;
            case 'password': var pattern = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&*]{5,15}$/
                if (pattern.test(value)) {
                    valid = true;
                    error = "";
                }
                else {
                    valid = false;
                    error = "Password invalid"
                }
                break;
            // case 'cpassword':
            //     if (info.password.value === value) {
            //         valid = true;
            //         error = "";
            //     }
            //     else {
            //         valid = false;
            //         error = "Passwords do not match"
            //     }
            //     break;
            case 'mobile_no': var pattern = /^[0-9]{10}$/
                if (pattern.test(value)) {
                    valid = true;
                    error = "";
                }
                else {
                    valid = false;
                    error = "Contact invalid"
                }
                break;
            
            case 'address': var pattern = /^([a-zA-Z0-9/\\'':.\s(),-]{2,255})$/
                if (pattern.test(value)) {
                    valid = true;
                    error = "";
                }
                else {
                    valid = false;
                    error = "Address invalid"
                }
                break;
            
            case 'question': var pattern = /^[0-9]$/
                if (pattern.test(value)) {
                    valid = true;
                    error = "";
                }
                
                break;
            case 'answer': var pattern = /^[A-Za-z]{2,50}$/
                if (pattern.test(value)) {
                    valid = true;
                    error = "";
                }
                else {
                    valid = false;
                    error = "answer invalid"
                }
                break;
                case 'm_id': var pattern = /^[0-9]$/
                if (pattern.test(value)) {
                    valid = true;
                    error = "";
                }
                
                break;
            
            

        }
        return { valid, error };
    }

    const handleChange = (name, value) => {
        const { valid, error } = validateData(name, value)
        let formvalid = true;
        /*if(info.firstName.valid === true && info.lastName.valid === true && info.email.valid === true && info.password.valid === true && info.confirmpassword.valid === true)
            formvalid = true;*/
        for (const key in info) {
            //console.log(key + " : " + key.valid)
            if (key.valid === false) {
                formvalid = false;
                break;
            }
        }
        console.log(formvalid)
        dispatch({ type: 'update', data: { name, value, touched: true, valid, error, formvalid } })
        // dispatch({ type: 'update', data: { name, value, formvalid } })
    }

    const onFocusout = (name, value) => {
        const { valid, error } = validateData(name, value)
        let formvalid = false;
        /*if(info.firstName.valid === true && info.lastName.valid === true && info.email.valid === true && info.password.valid === true && info.confirmpassword.valid === true)
            formvalid = true;*/
        for (const key in info) {
            console.log(key + " : " + info[key].valid)
            if (info[key].valid === false) {
                formvalid = false;
                break;
            }
        }
        dispatch({ type: 'update', data: { name, value, touched: true, valid, error, formvalid } })
    }


    const sendData = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            // body: JSON.stringify(info)
            body: JSON.stringify({
                username: info.username.value,
                password: info.password.value,
                // confirmpassword: info.confirmpassword.value,
                fname: info.fname.value,
                lname: info.lname.value,
                email: info.email.value,
                
                mobile_no: info.mobile_no.value,
                address : info.address.value,
                
                question : info.question.value,
                answer:info.answer.value,
                m_id : info.m_id.value      
                
                
            })

        }

        fetch("http://localhost:8080/registercustomer", reqOptions)
            //.then(res => console.log(res))
            //.then(resp => console.log(resp))
            // .then(resp => resp.json())
            // .then(obj => console.log(JSON.stringify(obj)))
            .then(resp => {
                if (resp.ok)
                    return resp.text();
                else
                    throw new Error("Server Error.");

            })
            .then(text => text.length ? JSON.parse(text) : {})
            .then(obj => {
                if (Object.keys(obj).length === 0) {
                    setMsg("Somthing Wrong.");
                }
                else {
                    // alert('You have registed sucessfully. Just wait for approval.')
                    navigate("/login");

                }
            })
            .catch((error) => alert("Server error. Try after some time"))
    }




    return (
        <div className="container">
          <h2>Customer Registration</h2>
            <form style={{marginLeft:'32%'}}>
               
            <div class="form-row" >
                    <div class="form-group col-md-6">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" name="username" id="username" placeholder="username" value={info.username.value}
                            onChange={(e) => handleChange("username", e.target.value)} />
                        <div className="error-msg"> {info.username.error}</div>
                    </div>
                    </div>
                    <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" name="password" id="password" placeholder="Password" 
                            onChange={(e) => handleChange("password", e.target.value)} />
                        <div className="error-msg"> {info.password.error}</div>
                    </div>
                    {/* <div class="form-group col-md-6">
                        <label for="password">Confirm Password</label>
                        <input type="password" class="form-control" name="cpassword" id="password" placeholder="Password"
                            onChange={(e) => handleChange("cpassword", e.target.value)} />
                        <div className="error-msg"> {info.cpassword.error}</div>
                    </div> */}
                    </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="fname">First Name</label>
                        <input type="text" class="form-control" name="fname" id="fname" placeholder="Fname"
                            onChange={(e) => handleChange("fname", e.target.value)} />
                        <div className="error-msg"> {info.fname.error}</div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="lname">Last Name</label>
                        <input type="text" class="form-control" name="lname" id="lname" placeholder="Lname"
                            onChange={(e) => handleChange("lname", e.target.value)} />
                        <div className="error-msg"> {info.lname.error}</div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" name="email" id="email" placeholder="Email"
                            onChange={(e) => handleChange("email", e.target.value)} />
                        <div className="error-msg"> {info.email.error}</div>
                    </div>
                </div>
               
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="mobile_no">Contact number</label>
                        <input type="text" class="form-control" name="mobile_no" id="mobile_no" placeholder="Contact number"
                            onChange={(e) => handleChange("mobile_no", e.target.value)} />
                        <div className="error-msg"> {info.mobile_no.error}</div>
                    </div>
                </div>
                
                <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" name="address" id="address" placeholder="address" 
                    onChange={(e) => handleChange("address", e.target.value)} />
                     <div className="error-msg"> {info.address.error}</div>
                     </div>
                </div>

                
     

            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="question" >question</label>
         <select type="number" className="form-control" id="question"  name="question" 
         onChange={(e) => handleChange("question", e.target.value)}>
            <option placeholder="select" id="question">select</option>
            <option id="question">what is your favourite colour?</option>
            <option id="question" > who is your idol?</option>
            <option id="question" >what is your favourite sport?</option>
            <option id="question" >what is your pet's name?</option>
            <option id="question" >what is your nickname?</option>
            </select><br/>
            <div className="error-msg"> {info.question.error}</div>
            </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="answer" >answer</label>
        <input type="text" className="form-control" id="answer" placeholder="Enter the answer" name="answer" 
         onChange={(e) => handleChange("answer", e.target.value)}
         onBlur={(e) => handleChange("answer",e.target.value)}/>
          <div className="error-msg"> {info.answer.error}</div>   
                     </div>
                </div>

            
       
         
        <div class="form-row">
            <div class="form-group col-md-6">
         <label for="m_id" >Membership</label>
         <select type="text" className="form-control" id="m_id"  name="Membership" 
         onChange={(e) => handleChange("m_id", e.target.value)}>
            <option placeholder="select" id="m_id" value="1">select</option>
            <option id="m_id" value="3">Ar_Diamond</option>
            <option id="m_id" value="2"> Ar_platinum</option>
            <option id="m_id" value="1">Ar_gold</option>
             </select>
         
         
             <div className="error-msg"> {info.m_id.error}</div>
             </div>
             <br/>
         </div>

                <Button type="submit" disabled={!info.formvalid} onClick={(e) => { sendData(e) }} style={{marginRight:'50%'}}>Create Account</Button>
            </form>

            {/* <p>{JSON.stringify(info)}</p> */}
        </div>
        
    
    )
}