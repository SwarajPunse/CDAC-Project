import { useReducer,useState,useEffect } from "react";
  import CustomerNavBar from '../components/CustomerNavBar';
  import { useNavigate } from 'react-router-dom';
   import pic1 from '../images/art_for_home.jfif';
  import pic2 from '../images/art_for_office.jpg';
   import pic3 from '../images/outdoor.jpg';
   import { Button } from "react-bootstrap";
  
  


const init = {
    cid: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, [action.fld]: action.val };
        case 'reset':
            return init;
        default:
            return state;
    }
};

export default function CustomerHomeComp() {
    const [info, dispatch] = useReducer(reducer, init);
    const [data, setData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const[msg,setMsg]=useState("");

    

    

    const navigate = useNavigate();

    const [customer,setCustomer]=useState();

    useEffect( ()=>{
    const loginid=JSON.parse(localStorage.getItem("loggedUser")).id;
    fetch("http://localhost:8080/getcustomer?loginid="+loginid)
    .then(resp => resp.json())
    .then(obj => {
      localStorage.setItem("loggedCustomer",JSON.stringify(obj))
      setCustomer(obj);
    })
  })
  

    const goBack = () => {
        navigate(-1); // This navigates back one step in history
      };
    // Function to add artwork to the cart

    const addToCart = (e) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        existingCart.push(e);
        console.log("xyz"+existingCart);
        localStorage.setItem('cart', JSON.stringify(existingCart));
        setCartItems(existingCart);
        setMsg(<b className="lead" style={{color:'green'}}>"Added successfully"</b>)
    };

    const reqOptions = {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    };

    const fetchData = async () => {
        try {
            const resp = await fetch(`http://localhost:8080/getartofcat?cid=${info.cid}`, reqOptions);
            if (resp.ok) {
                const data = await resp.json();
                setData(data);
            } else {
                // Handle non-OK responses
            }
        } catch (error) {
            // Handle fetch errors
        }
    };

    useEffect(() => {
        fetchData();
    }, [info.cid]);

    return (
        <div>
           
            <div>
                <label htmlFor="cid" className="form-label text-uppercase">category</label>
                <select
                    type="Number"
                    className="form-control"
                    id="cid"
                    name="cid"
                    value={info.cid}
                    onChange={(e) => { dispatch({ type: 'update', fld: 'cid', val: e.target.value }) }}
                >
                    <option value="0">select category</option>
                    
                    <option value={"1"}>painting</option>
                    <option value={"2"}>ResinArt</option>
                    <option value={"3"}>Sculpture</option>
                    <option value={"4"}>Cultural art</option>
                    <option value={"5"}>Sketches</option>
                </select>
                {/* <button onClick={fetchData}>Fetch Data</button> */}
            </div>

            
           
            <div style={{marginTop:"20"}}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="text-center">Art Name</th>
                            <th className="text-center">Description</th>
                            <th className="text-center">art_img</th>
                            <th className="text-center">art length</th>
                            <th className="text-center">art breadth</th>
                            <th className="text-center">price</th>
                            <th className="text-center">Add to Cart</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(v => (
                            <tr key={v.id}>
                                <td className="text-center">{v.art_name}</td>
                                <td className="text-center">{v.art_description}</td>
                                <td className="text-center"><img
                                        src={`data:image/jpeg;base64,${v.art_img}`} // Modify this line
                                        alt={v.art_name}
                                        style={{ width: '100px' }}
                                    /></td>
                                <td className="text-center">{v.art_length}</td>
                                <td className="text-center">{v.art_breadth}</td>
                                <td className="text-center">{v.price}</td>
                                <td className="text-center"><Button type="button" onClick={() => addToCart({ artwork_id : v.id ,artwork_name: v.art_name,art_price:v.price,image:v.art_img })} >Add To Cart</Button></td>
                                {/* <td className="text-center"><button type="button" >Order</button></td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* <p>{JSON.stringify(cartItems)}</p> */}
            <p>{msg}</p>

            <Button onClick={goBack}>Go Back </Button>
            
        </div>
    );
}

// import { useReducer,useState,useEffect } from "react";
//   import CustomerNavBar from '../components/CustomerNavBar';
  

// const init = {
//     cid: ""
// };


// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'update':
//             return { ...state, [action.fld]: action.val };
//         case 'reset':
//             return init;
//         default:
//             return state;
//     }
// };

// export default function CustomerHomeComp() {
//     const [info, dispatch] = useReducer(reducer, init);
//     const [data, setData] = useState([]);
//     const [cartItems, setCartItems] = useState([]);

    
//     const addToCart = (e) => {
//         const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
//         existingCart.push(e);
//         localStorage.setItem('cart', JSON.stringify(existingCart));
//         setCartItems(existingCart);
//     };

//     const reqOptions = {
//         method: 'GET',
//         headers: { 'content-type': 'application/json' },
//     };

//     const fetchData = async () => {
//         try {
//             //cid is category id
//             const resp = await fetch(`http://localhost:8080/getartofcat?cid=${info.cid}`, reqOptions);
//             if (resp.ok) {
//                 const data = await resp.json();
//                 setData(data);
//             } else {
//                 // Handle non-OK responses
//             }
//         } catch (error) {
//             // Handle fetch errors
//         }
//         console.log(data);
//     };

//     useEffect(() => {
//         fetchData();
//     }, [info.cid]);

//     return (
//         <div>
//          <div>
           
//             <div>
//                 <label htmlFor="cid" className="form-label text-uppercase">category</label>
//                 <select
//                     type="Number"
//                     className="form-control"
//                     id="cid"
//                     name="cid"
//                     value={info.cid}
//                     onChange={(e) => { dispatch({ type: 'update', fld: 'cid', val: e.target.value }) }}
//                 >
//                     <option value="0">select</option>
//                     <option value={"1"}>painting</option>
//                     <option value={"2"}>ResinArt</option>
//                     <option value={"3"}>Sculpture</option>
//                     <option value={"4"}>Cultural art</option>
//                     <option value={"5"}>Sketches</option>
//                 </select>
//                 {/* <button onClick={fetchData}>Fetch Data</button> */}
//             </div>
           
//             <div style={{marginTop:"20"}}>
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th className="text-center">Art Name</th>
//                             <th className="text-center">Description</th>
//                             <th className="text-center">art_img</th>
//                             <th className="text-center">art length</th>
//                             <th className="text-center">art breadth</th>
//                             <th className="text-center">price</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map(v => (
//                             <tr key={v.id}>
//                                 <td className="text-center">{v.art_name}</td>
//                                 <td className="text-center">{v.art_description}</td>
//                                 <td className="text-center">{v.art_img}</td>
//                                 <td className="text-center">{v.art_length}</td>
//                                 <td className="text-center">{v.art_breadth}</td>
//                                 <td className="text-center">{v.price}</td>
//                                 <td className="text-center"><button type="button" onClick={() => addToCart({  Cutomer_id:artwork_id: v.id , artwork_name: v.art_name,art_price:v.price,image:v.art_img })} >Add To Cart</button></td>
//                                 <td className="text-center"><button type="button" >Order</button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
                
                                
//             </div>
            
//             <p>{JSON.stringify(cartItems)}</p>
//         </div>
//         </div>
    
        
//     );
//     }

// export default function CustomerHomeComp() {
//     const [info, dispatch] = useReducer(reducer, init);
//     const [data, setData] = useState([]);
//     const [cartItems, setCartItems] = useState([]);

//     const addToCart = (e) => {
//         const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
//         existingCart.push(e);
//         localStorage.setItem('cart', JSON.stringify(existingCart));
//         setCartItems(existingCart);
//     };

//     const reqOptions = {
//         method: 'GET',
//         headers: { 'content-type': 'application/json' },
//     };

//     const fetchData = async () => {
//         try {
//             const resp = await fetch(`http://localhost:8080/getartofcat?cid=${info.cid}`, reqOptions);
//             if (resp.ok) {
//                 const data = await resp.json();
//                 setData(data);
//             } else {
//                 // Handle non-OK responses
//             }
//         } catch (error) {
//             // Handle fetch errors
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [info.cid]);

//     return (
//         <div>
//             <div>
//                 <div>
//                     <label htmlFor="cid" className="form-label text-uppercase">category</label>
//                     <select
//                         type="Number"
//                         className="form-control"
//                         id="cid"
//                         name="cid"
//                         value={info.cid}
//                         onChange={(e) => { dispatch({ type: 'update', fld: 'cid', val: e.target.value }) }}
//                     >
//                         <option value="0">select</option>
//                         <option value={"1"}>painting</option>
//                         <option value={"2"}>ResinArt</option>
//                         <option value={"3"}>Sculpture</option>
//                         <option value={"4"}>Cultural art</option>
//                         <option value={"5"}>Sketches</option>
//                     </select>
//                 </div>

//                 <div style={{ marginTop: "20px" }}>
//                     <table className="table table-striped">
//                         <thead>
//                             <tr>
//                                 <th className="text-center">Art Name</th>
//                                 <th className="text-center">Description</th>
//                                 <th className="text-center">art_img</th>
//                                 <th className="text-center">art length</th>
//                                 <th className="text-center">art breadth</th>
//                                 <th className="text-center">price</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {data.map(v => (
//                                 <tr key={v.id}>
//                                     <td className="text-center">{v.art_name}</td>
//                                     <td className="text-center">{v.art_description}</td>
//                                     <td className="text-center">{v.art_img}</td>
//                                     <td className="text-center">{v.art_length}</td>
//                                     <td className="text-center">{v.art_breadth}</td>
//                                     <td className="text-center">{v.price}</td>
//                                     <td className="text-center">
//                                         <button
//                                             type="button"
//                                             onClick={() => addToCart({
//                                                 artwork_id: v.id,
//                                                 artwork_name: v.art_name,
//                                                 art_price: v.price,
//                                                 image: v.art_img
//                                             })}
//                                         >
//                                             Add To Cart
//                                         </button>
//                                     </td>
//                                     <td className="text-center">
//                                         {/* <button type="button">Order</button> */}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 <p>{JSON.stringify(cartItems)}</p>
//             </div>
//         </div>
//     );
// }

