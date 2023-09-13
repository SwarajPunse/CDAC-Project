// import React, { useState } from 'react';

// export default function AddToCart () {
//     const [cartItems, setCartItems] = useState([]);

//     // Function to add artwork to the cart
//     const addToCart = (artwork) => {
//         const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
//         existingCart.push(artwork);
//         localStorage.setItem('cart', JSON.stringify(existingCart));
//         setCartItems(existingCart);
//     };

//     // Function to clear the cart
//     const clearCart = () => {
//         localStorage.removeItem('cart');
//         setCartItems([]);
//     };

//     return (
//         <div>
//             <h2>Artwork Cart</h2>
//             <ul>
//                 {cartItems.map((item, index) => (
//                     <li key={index}>{item.title}</li>
//                 ))}
//             </ul>
//             {/* <button onClick={() => addToCart({ title: 'Artwork Title' })}>Add to Cart</button> */}
//             <button onClick={clearCart}>Clear Cart</button>
//         </div>
//     );
// };

