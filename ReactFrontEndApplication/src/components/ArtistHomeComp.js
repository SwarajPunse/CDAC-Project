import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ArtistNavBar from './ArtistNavBar';

function ArtistHomeComp() {

        const [data, setData] = useState([]);
        
      
        useEffect(() => {
          // Make a GET request to your Spring Boot API endpoint to fetch the data
          fetch('http://localhost:8080/getallartwork')
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              setData(data);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        }, []);


        

  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <ArtistNavBar/>
      <nav>
            <btn><Link to="/AddArtwork">Insert new artwork</Link></btn>
           
      </nav>
      <br/>
      <div>
      <h1>your Artworks</h1>
      <br/>
      <Table >
        <thead>
          <tr>
          <th>Image</th>
            <th>Art name</th>
            <th>Art Desc</th>
            <th>Art Length</th>
            <th>Art Breadth</th>
            <th>Price</th>
            <th>Sell Status</th>
            
            {/* Add more table headers based on your entity fields */}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
                <td>
                {item.art_img && (
                  <img
                    src={`data:image/jpeg;base64,${item.art_img}`}
                    alt="Image"
                    width="100"
                  />
                )}
              </td>
              <td>{item.art_name}</td>
              <td>{item.art_description}</td>
              <td>{item.art_length}</td>
              <td>{item.art_breadth}</td>
              <td>{item.price}</td> 
              <td>{item.sold.toString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  </div>
  )
}

export default ArtistHomeComp