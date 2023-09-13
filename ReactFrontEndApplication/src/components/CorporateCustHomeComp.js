import { useReducer,useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
  

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

export default function CorporateCustHomeComp() {
    const [info, dispatch] = useReducer(reducer, init);
    const [data, setData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const[msg,setMsg]=useState("");

    const navigate = useNavigate();


    const addToCart = (e) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        existingCart.push(e);
        localStorage.setItem('cart', JSON.stringify(existingCart));
        setCartItems(existingCart);
        setMsg(<b className="lead" style={{color:'green'}}>"Added successfully"</b>)
    };

    const goBack = () => {
        navigate(-1); // This navigates back one step in history
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
                    <option value="0">select</option>
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
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(v => (
                            <tr key={v.id}>
                                <td className="text-center">{v.art_name}</td>
                                <td className="text-center">{v.art_description}</td>
                                <td className="text-center">{v.art_img}</td>
                                <td className="text-center">{v.art_length}</td>
                                <td className="text-center">{v.art_breadth}</td>
                                <td className="text-center">{v.price}</td>
                                <td className="text-center"><button type="button" >Order</button></td>
                                <td className="text-center"><button type="button" >Add to cart</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p>{msg}</p>

            <button onClick={goBack}>Go Back </button>
        </div>
    );
}

