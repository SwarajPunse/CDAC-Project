import { current } from "@reduxjs/toolkit";
import React, { useState,useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [msg,setOrderMsg] = useState("");
    const [user,setUser] =useState("");
    const [obj1,setobj] =useState("");
    const navigate = useNavigate();
    
    
    useEffect(() => {
        const Users = JSON.parse(localStorage.getItem('customer'));
        setUser(Users);
    }, []);
    

    // const Users =JSON.parse(localStorage.getItem('loggedUser')).id;
    // setUser(Users);

    const fetchFromCart = () => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        console.log("cart"+existingCart); 
        setCartItems(existingCart);
    };
   //alert(cartItems);
    // const customer1=localStorage.getItem("customer");
    // console.log(customer1);

    const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItems(updatedCart);
    };

    const clearCart = () => {
        localStorage.removeItem('cart');
        setCartItems([]);
    };

    

    const goBack = () => {
        navigate(-1); // This navigates back one step in history
      };



const placeOrder = () => {
    const orderData = {
        custid: user.id,
        orderlist: cartItems.map(item => ({
           // artwork_id: item.artwork_id,
            art_price: item.art_price

        })),
        // Date: new Date().toLocaleString(),
    };
    
const reqOptions = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(orderData),
    
};

fetch("http://localhost:8080/addordercust", reqOptions)
    // .then(resp => resp.json())
    .then(resp => resp.text())
    // .then( resp => 
    //     {
    //     if (resp.ok) {
    //         setOrderMsg("Order placed successfully!");
    //         clearCart();
    //         // const c= localStorage.setItem("orderbill",JSON.stringify(orderData));
    //         // console.log(c.id);
           
    //         navigate("/OrderBill");
    //     } else {
    //         setOrderMsg("Failed to place order.");
    //     }})   
    
        
       
    .then(text=>text.length?JSON.parse(text):{})
    .then((obj) => {
         localStorage.setItem("orderbill",JSON.stringify(obj));
    console.log(localStorage.getItem("orderbill"))
        setobj(obj);
        //console.log("body"+orderData);

        console.log("obj"+JSON.stringify(obj));
        navigate("/OrderBill");
    } )
   
    // .catch(error => {
    //     console.error("Error placing order:", error);
    //     setOrderMsg("An error occurred while placing the order.");
    // });
    //  const c= localStorage.setItem("orderbill",JSON.stringify(obj1));
     console.log("orderdata"+orderData);
     console.log("user"+(user));
 };




    return (
        <div>
            <h2>Artwork Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ArtWork Name</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr key={index}>
                                        <td>{item.artwork_name}</td>
                                        <td><img
                                                src={`data:image/jpeg;base64,${item.image}`}
                                                alt={item.artwork_name}
                                                style={{ width: '100px' }}
                                            /></td>
                                        <td>{item.art_price}</td>
                                        <td>
                                            <button onClick={() => removeFromCart(index)}>Remove</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                ))}
            </ul>

            <Button style={{marginRight:"2%"}} onClick={clearCart}>Clear Cart</Button>
           
            <Button style={{marginRight:"2%"}} onClick={fetchFromCart}>Fetch Cart</Button>
            
            <Button style={{marginRight:"2%"}} onClick={placeOrder}>Order</Button>
            
            <div>{msg}</div>
            <br/>
            <Button onClick={goBack}>Go Back </Button>
        </div>
    );
                
            }





            // const placeOrder = () => {
                
    //             const orderData = {
    //                 // customerInfo:  {cid:Users.map(c =>({cid:c.id}))}, // Replace with actual customer info
    //              cust_id:user.id, 
    //                 items: cartItems.map(item => ({
    //                     artwork_id: item.artwork_id
                       
    //                 })),
    //                 //Date:new Date().toLocaleString ,
                    
    //             };
            
                 
//         const reqOptions = {
//             method: 'POST',
//             headers: { 'content-type': 'application/json' },
//             body: JSON.stringify(orderData),
            
            
//         }

//         fetch("http://localhost:8080/addordercust", reqOptions)
//             .then(resp => resp.json())
//             .then(data => {
//                 if (data.success) {
//                     setOrderMsg("Order placed successfully!");
//                     clearCart(); 
//                 } else {
//                     setOrderMsg("Failed to place order.");
//                 }
//                 console.log(orderData);
//             })
//             .catch(error => {
//                 console.error("Error placing order:", error);
//                 setOrderMsg("An error occurred while placing the order.");
//             });
    
//    // console.log(Date);
//    //console.log(cid);
//         }























// import React, { useState } from "react";

// export default function Cart() {

//     // const init={
//     //     fname:"",
//     //     lname:"",
//     //     email:"",
//     //     mobile_no:"",
//     //     address:"",
        
//     //     firmname:"",
//     //     gst_no:"",
//     //     artwork_name:"",
//     //     image:"",
//     //     art_price:""

//     // }

//     // const reducer = (state, action) => {
//     //     //console.log(state);
//     //     switch (action.type) {
//     //         case 'update': {
//     //             const { fname, lname, email, mobile_no, address, firmname , gst_no,artwork_name,image,art_price } = action.data;
//     //             // return{...state,[name]:{value,touched,valid,error},formvalid}
//     //             return {
//     //                 ...state,
//     //                 [fname,lname, email, mobile_no, address,firmname,gst_no,artwork_name,image,art_price]: { ...state[fname,lname,email,mobile_no,address,firmname,gst_no,artwork_name,image,art_price], value},
                    
//     //             }   //modifying and returning new object as state
//     //         }
//     //         case 'reset': {
//     //             return init;
//     //         }
//     //     }
//     // }



//     const [cartItems, setCartItems] = useState([]);

//     const fetchFromCart = () => {
//         const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
//         console.log(existingCart); 
//         setCartItems(existingCart);
//     };

//     const removeFromCart = (index) => {
//         const updatedCart = [...cartItems];
//         updatedCart.splice(index, 1);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//         setCartItems(updatedCart);
//     };

//     const clearCart = () => {
//         localStorage.removeItem('cart');
//         setCartItems([]);
//     };

//     const sendData = (e) => {
//         e.preventDefault();
//         const reqOptions = {
//             method: 'POST',
//             headers: { 'content-type': 'application/json' },
//             // body: JSON.stringify(info)
//             body: JSON.stringify({
//                 username: info.username.value,
//                 password: info.password.value,
//                 // cpassword: info.cpassword.value,
//                 fname: info.fname.value,
//                 lname: info.lname.value,
//                 email: info.email.value,
                
//                 mobile_no: info.mobile_no.value,
//                 address : info.address.value,
//                 studio : info.address.value,
//                 question : info.question.value,
//                 answer:info.answer.value,
//                 m_id : info.m_id.value      
                
                
//             })

//         }

//         fetch("http://localhost:8080/registerartist", reqOptions)
//             //.then(res => console.log(res))
//             //.then(resp => console.log(resp))
//             // .then(resp => resp.json())
//             // .then(obj => console.log(JSON.stringify(obj)))
//             .then(resp => {
//                 if (resp.ok)
//                     return resp.text();
//                 else
//                     throw new Error("Server Error.");

//             })
//             .then(text => text.length ? JSON.parse(text) : {})
//             .then(obj => {
//                 if (Object.keys(obj).length === 0) {
//                     setMsg("Somthing Wrong.");
//                 }
//                 else {
//                     // alert('You have registed sucessfully. Just wait for approval.')
//                     navigate("/login");

//                 }
//             })
//             .catch((error) => alert("Server error. Try after some time"))
//     }



//     return (
//         <div>
//             <h2>Artwork Cart</h2>
//             <ul>
//                 {cartItems.map((item, index) => (
//                     <li key={index}>
//                         <div>
//                             <table>
//                                 <thead>
//                                     <tr>
//                                         <th>ArtWork Name</th>
//                                         <th>Image</th>
//                                         <th>Price</th>
//                                         <th>Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr key={index}>
//                                         <td>{item.artwork_name}</td>
//                                         <td><img src={item.image} alt={item.artwork_name} style={{ width: '100px' }} /></td>
//                                         <td>{item.art_price}</td>
//                                         <td>
//                                             <button onClick={() => removeFromCart(index)}>Remove</button>
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                     </li>
//                 ))}
//             </ul>

//             <button onClick={clearCart}>Clear Cart</button>
//             <button onClick={fetchFromCart}>Fetch Cart</button>
//             {/* <button onClick={}>Order</button> */}
//         </div>
//     );
// }


















// import { useState } from "react";

// export default function cart()
// {

//     const init={
//         art_name:"",
//         price:" ",
//         art_img:" "
//     }

//     const reducer = (state, action) => {
//         switch (action.type) {
//             case 'update':
//                 return { ...state, [action.fld]: action.val };
//             case 'reset':
//                 return init;
//             default:
//                 return state;
//         }
//     };

    
//     const [cartItems, setCartItems] = useState([]);
//     const fetchfromCart = (e) => {
//         const existingCart = JSON.parse(localStorage.getItem('cart'));
        
//     };
    
//     const clearCart = () => {
//             localStorage.removeItem('cart');
//                 setCartItems([]);
//             };
        

//     return(
//         <div>
           
        
//             <h2>Artwork Cart</h2>
//             <ul>
//                  {existingCart.map((item, index) => (
//                      <li key={index}>{item.title}</li>
//                 ))}
//            </ul>
//            {/* <button onClick={() => addToCart({ title: 'Artwork Title' })}>Add to Cart</button> */}
//            <button onClick={clearCart}>Clear Cart</button>
        
    
//             <button type="button" onClick={() => fetchfromCart()} >fetch</button>            <p>{JSON.stringify(existingCart)}</p>
//         </div>
//     );
// }