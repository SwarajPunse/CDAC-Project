
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function ArtistHomeComp() {
    const [orders, setOrders] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [totalArtworkPrice, setTotalArtworkPrice] = useState(0);
    const [orderTotalPrices, setOrderTotalPrices] = useState([]);
    const[msg,setMsg]=useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('orderbill'));
        setOrders(Array.isArray(storedOrders) ? storedOrders : [storedOrders]);
          //alert(JSON.stringify(orders));
        const storedCartItems = JSON.parse(localStorage.getItem('cart'));
        setCartItems(storedCartItems);

        fetchTotalArtworkPrice();
    }, []);

    const fetchTotalArtworkPrice = () => {
        const orderTotalPricesArray = orders.map(order => {
            return fetch(`http://localhost:8080/getorderprice/${order.id}`)
                .then(response => response.json())
                .then(data => data.totalPrice)
                .catch(error => {
                    console.error('Error fetching total artwork price:', error);
                    return 0;
                });
        });

        Promise.all(orderTotalPricesArray).then(prices => {
            setOrderTotalPrices(prices);
        });
    };

    const goBack = () => {
        navigate(-2); // This navigates back one step in history
      };

    // var total=0;
    // const calculateOrderTotal = (order) => {
    //   // console.log("in calculateOrderTotal "+order);
    //   //   if (!order.orderlist) return 0;
    //   //   return order.orderlist.reduce((total, artwork) => {
    //         //const cartItem = cartItems.find(item => item.artwork_id === artwork.artwork_id);
           
    //         total=  cartItems.reduce((ctotal,cartItems1) => {
    //          // alert("price"+cartItems1.art_price)
    //         ctotal += cartItems1.art_price;
           
    //     } )
    //     return total;
       
    // };
    // alert(total);
    return (
        <div>
            <h1>Order Bill</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Order Date</th>
                        {/* <th>Customer ID</th> */}
                        {/* <th>Artwork Count</th> */}
                        <th>Total Price</th>
                        <th>Sell Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{new Date(order.date).toLocaleString()}</td>
                            {/* <td>{order.customer.id}</td> */}
                            {/* <td>{order.orderlist ? order.orderlist.length : 0}</td> */}
                            <td>
                                {/* {JSON.stringify(calculateOrderTotal())} */}
                                {cartItems.reduce((total,item)=>
                                parseFloat(total) +(parseFloat(item.art_price)),0)}
                            </td>
                            <td><p>Order Confirmed</p></td>
                        </tr>
                    ))}
                </tbody>
                
            </Table>
            {/* <p>{JSON.stringify(orders)}</p><br/> */}
             {/* <p>{JSON.stringify(orders)}</p> */}
             <p>{msg}</p>

    <Button onClick={goBack}>Go Back </Button>
        </div>
        
    );
}
