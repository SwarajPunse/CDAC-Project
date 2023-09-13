import React from 'react'
import img1 from '../images/img1.webp';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpeg';
import cat1 from '../images/cat1.jpg';
import cat2 from '../images/cat2.jpg';
import cat3 from '../images/sketch.jpg';
import room4 from '../images/room-4.jpg';
import room2 from '../images/room-2.jpg';
import room1 from '../images/room-1.webp';
//import { Link } from 'react-router-dom';

import {Container ,Card,Row, Col, Button} from 'react-bootstrap';  

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


const cardContent = [
  {
    variant: 'danger',
    title: 'Gold \n(Duration 3 months)',
    text: " Customer : 500 ₹ \nCorporate : 1000 ₹ \nArtist : 500 ₹"

  },
  {
    variant: 'success',
    title: 'Platinum \n(Duration 6 months)',
    text: 'Customer : 800 ₹ \nCorporate Customer : 2000 ₹ \nArtist : 800 ₹',
  },
  {
    variant: 'Dark',
    title: 'Diamond \n(Duration 12 months)',
    text: 'Customer : 1200 ₹ \nCorporate Customer : 3000 ₹ \nArtist : 1200 ₹',
  },
];

const cardTextStyle = {
  whiteSpace: 'pre-line',
};

function HomeComp() {
  

  return (
    <div>   
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-secondary mb-3">

    <div className="container-fluid">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link to="/customerHome" className="nav-link px-3">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/allProducts" className="nav-link px-3">Artworks</Link>
        </li>
        <li className="nav-item">
          <Link to="/allProducts" className="nav-link px-3">Artists</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link px-3">Cart</Link>
        </li>
        <li className='nav-item'>
            <Link to="/login" className='nav-link px-3'>Logout</Link>
            </li>

      </ul>
      {/* <span><b>Welcome {username.fname}</b></span> 
    </div>

  </nav > */}
   
    <div className='p-5'>  
  <Carousel>  
  <Carousel.Item>  
  <img style={{maxHeight:"100vh"}} className="d-block w-100" src={img1} alt="First slide" />  
    <Carousel.Caption>  
      <h2 style={{color:"yellow"}}>Art is never finished. Only abandoned.</h2>  
      
    </Carousel.Caption>  
  </Carousel.Item>  
  <Carousel.Item>  
    <img className="d-block w-100" src={img2} alt="Second slide"/>  
    <Carousel.Caption>  
      <h2>A true artist is not one who is inspired but one who inspires others </h2>  
        
    </Carousel.Caption>  
  </Carousel.Item>  
  <Carousel.Item>  
    <img  
      className="d-block w-100"  
      src={img3}  
      alt="Third slide"  
    />  
  
    <Carousel.Caption>  
      <h2>Art is nothing but humanized science.</h2>  
       
    </Carousel.Caption>  
  </Carousel.Item>  
</Carousel>  
</div> 



<div className="row" style={{marginLeft:"3rem",width:"86rem",textAlign:"center"}}>
     <div className="col-lg-4">
       <img className="d-block w-70 rounded-circle" src={cat1} height="300" width="300"/> 
       <h2 style={{fontFamily:"cursive"}}>Painting</h2>
       <p style={{fontFamily:"cursive"}}>“Painting is an illusion, a piece of magic, so what you see is not what you see.” ~ Philip Guston</p>
       {/* <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p> */}
     </div>
     <div className="col-lg-4">
     <img className="d-block w-70 rounded-circle" src={cat2} height="300rem" width="300"/> 
       <h2 style={{fontFamily:"cursive"}}>Sculptures</h2>
       <p style={{fontFamily:"cursive"}}>“A great sculpture can roll down a hill without breaking.”~ Michelangelo</p>
       {/* <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p> */}
     </div>
     <div className="col-lg-4">
     <img className="d-block w-70 rounded-circle" src={cat3} height="300rem" width="300"/> 
       <h2 style={{fontFamily:"cursive"}}>Sketches</h2>
       <p style={{fontFamily:"cursive"}}>“Drawing is rather like playing chess: your mind races ahead of the moves that you eventually make.” ~ David Hockney</p>
       {/* <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p> */}
     </div>
   </div>


   <div className="App">
   <hr className="featurette-divider"></hr>
    <br/>
    <h2 style={{backgroundColor:'#B7F1FD' ,marginLeft:"30%",marginRight:"30%",paddingBottom:"2rem",paddingTop:"2rem",borderRadius:"20%"}}><b>Membership Plans</b></h2>
      <Container className="p-4">
        <Row>
          {cardContent.map((content, idx) => (
            <Card
              bg={content.variant.toLowerCase()}
              key={idx}
              text={content.variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ width: '32%'}}
              className="m-2"
            >
              <Card.Header>Membership</Card.Header>
              <Card.Body>
                <Card.Title style={cardTextStyle}>{content.title}</Card.Title>
                <Card.Text style={cardTextStyle}>{content.text}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>




   <div style={{marginLeft:"3rem",width:"88rem",textAlign:"center"}}>  
        <hr className="featurette-divider"></hr>

       <div className="row featurette">
       <div className="col-md-7">
        <h2 className="featurette-heading">Art is the greatest form of hope. <span className="text-muted">It’ll blow your mind.</span></h2>
        <p className="lead">Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen. </p>
       </div>
      <div className="col-md-5">
        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image  mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
        <img className="d-block w-100  mx-auto" src={room4} height="500" width="500"/> 
       </div>
        </div>
 
    <hr className="featurette-divider"></hr>
 
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">Artists are just children <span className="text-muted">who refuse to put down their crayons.</span></h2>
        <p className="lead">The aim of art is to represent not the outward appearance of things, but their inward significance.</p>
      </div>
      <div className="col-md-5 order-md-1">
        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image  mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
        <img className="d-block w-100  mx-auto" src={room1} height="500" width="500"/> 
      </div>
    </div>
 
    <hr className="featurette-divider"></hr>
 
    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">Art expresses those unexplainable thoughts <span className="text-muted">
        </span> of our soul.</h2>
        <p className="lead">Art enables us to find ourselves and lose ourselves at the same time.</p>
      </div>
      <div className="col-md-5">
        {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image  mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
        <img className="d-block w-100  mx-auto" src={room2} height="500" width="500"/> 
      </div>
    </div>
 
       <hr className="featurette-divider"></hr>
    </div>
    

  </div>
  )
}

export default HomeComp;





// import React from 'react'
// import img1 from '../images/img1.webp';
// import img2 from '../images/img2.jpg';
// import img3 from '../images/img3.jpeg';
// import cat1 from '../images/cat1.jpg';
// import cat2 from '../images/cat2.jpg';
// import cat3 from '../images/sketch.jpg';
// import room4 from '../images/room-4.jpg';
// import room2 from '../images/room-2.jpg';
// import room1 from '../images/room-1.webp';
// //import { Link } from 'react-router-dom';

// import {Container ,Card,Row, Col, Button} from 'react-bootstrap';  

// import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from 'react-bootstrap/Carousel';


// const cardContent = [
//   {
//     variant: 'Secondary',
//     title: 'Gold \n(Duration 3 months)',
//     text: " Customer : 500 ₹ \nCorporate : 1000 ₹ \nArtist : 500 ₹"

//   },
//   {
//     variant: 'Light',
//     title: 'Platinum \n(Duration 6 months)',
//     text: 'Customer : 800 ₹ \nCorporate Customer : 2000 ₹ \nArtist : 800 ₹',
//   },
//   {
//     variant: 'Dark',
//     title: 'Diamond \n(Duration 12 months)',
//     text: 'Customer : 1200 ₹ \nCorporate Customer : 3000 ₹ \nArtist : 1200 ₹',
//   },
// ];

// const cardTextStyle = {
//   whiteSpace: 'pre-line',
// };

// function HomeComp() {
  

//   return (
//     <div>   
//     {/* <nav className="navbar navbar-expand-lg navbar-light bg-secondary mb-3">

//     <div className="container-fluid">
//       <ul className="navbar-nav">
//       <li className="nav-item">
//           <Link to="/customerHome" className="nav-link px-3">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/allProducts" className="nav-link px-3">Artworks</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/allProducts" className="nav-link px-3">Artists</Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/cart" className="nav-link px-3">Cart</Link>
//         </li>
//         <li className='nav-item'>
//             <Link to="/login" className='nav-link px-3'>Logout</Link>
//             </li>

//       </ul>
//       {/* <span><b>Welcome {username.fname}</b></span> 
//     </div>

//   </nav > */}
   
//     <div className='p-5'>  
//   <Carousel>  
//   <Carousel.Item>  
//   <img style={{maxHeight:"100vh"}} className="d-block w-100" src={img1} alt="First slide" />  
//     <Carousel.Caption>  
//       <h3>First Slider Image Title</h3>  
//       <p>First Slide decription.</p>  
//     </Carousel.Caption>  
//   </Carousel.Item>  
//   <Carousel.Item>  
//     <img className="d-block w-100" src={img2} alt="Second slide"/>  
//     <Carousel.Caption>  
//       <h3>Second slide Image </h3>  
//       <p>Second slide description</p>  
//     </Carousel.Caption>  
//   </Carousel.Item>  
//   <Carousel.Item>  
//     <img  
//       className="d-block w-100"  
//       src={img3}  
//       alt="Third slide"  
//     />  
  
//     <Carousel.Caption>  
//       <h3>Third Slide Image</h3>  
//       <p>Third Slide Description.</p>  
//     </Carousel.Caption>  
//   </Carousel.Item>  
// </Carousel>  
// </div> 



// <div className="row" style={{marginLeft:"3rem",width:"86rem",textAlign:"center"}}>
//      <div className="col-lg-4">
//        <img className="d-block w-70 rounded-circle" src={cat1} height="300" width="300"/> 
//        <h2 style={{fontFamily:"cursive"}}>Painting</h2>
//        <p style={{fontFamily:"cursive"}}>“Painting is an illusion, a piece of magic, so what you see is not what you see.” ~ Philip Guston</p>
//        {/* <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p> */}
//      </div>
//      <div className="col-lg-4">
//      <img className="d-block w-70 rounded-circle" src={cat2} height="300rem" width="300"/> 
//        <h2 style={{fontFamily:"cursive"}}>Sculptures</h2>
//        <p style={{fontFamily:"cursive"}}>“A great sculpture can roll down a hill without breaking.”~ Michelangelo</p>
//        {/* <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p> */}
//      </div>
//      <div className="col-lg-4">
//      <img className="d-block w-70 rounded-circle" src={cat3} height="300rem" width="300"/> 
//        <h2 style={{fontFamily:"cursive"}}>Sketches</h2>
//        <p style={{fontFamily:"cursive"}}>“Drawing is rather like playing chess: your mind races ahead of the moves that you eventually make.” ~ David Hockney</p>
//        {/* <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p> */}
//      </div>
//    </div>


//    <div className="App">
//       <Container className="p-4">
//         <Row>
//           {cardContent.map((content, idx) => (
//             <Card
//               bg={content.variant.toLowerCase()}
//               key={idx}
//               text={content.variant.toLowerCase() === 'light' ? 'dark' : 'white'}
//               style={{ width: '32%'}}
//               className="m-2"
//             >
//               <Card.Header>Membership</Card.Header>
//               <Card.Body>
//                 <Card.Title style={cardTextStyle}>{content.title}</Card.Title>
//                 <Card.Text style={cardTextStyle}>{content.text}</Card.Text>
//               </Card.Body>
//             </Card>
//           ))}
//         </Row>
//       </Container>
//     </div>




//    <div style={{marginLeft:"3rem",width:"88rem",textAlign:"center"}}>  
//         <hr className="featurette-divider"></hr>

//        <div className="row featurette">
//        <div className="col-md-7">
//         <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
//         <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
//        </div>
//       <div className="col-md-5">
//         {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image  mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
//         <img className="d-block w-100  mx-auto" src={room4} height="500" width="500"/> 
//        </div>
//         </div>
 
//     <hr className="featurette-divider"></hr>
 
//     <div className="row featurette">
//       <div className="col-md-7 order-md-2">
//         <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
//         <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
//       </div>
//       <div className="col-md-5 order-md-1">
//         {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image  mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
//         <img className="d-block w-100  mx-auto" src={room1} height="500" width="500"/> 
//       </div>
//     </div>
 
//     <hr className="featurette-divider"></hr>
 
//     <div className="row featurette">
//       <div className="col-md-7">
//         <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
//         <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
//       </div>
//       <div className="col-md-5">
//         {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image  mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
//         <img className="d-block w-100  mx-auto" src={room2} height="500" width="500"/> 
//       </div>
//     </div>
 
//        <hr className="featurette-divider"></hr>
//     </div>
    

//   </div>
//   )
// }

// export default HomeComp;