import pic from '../images/image1_AboutUs.jpg';
import pic1 from '../images/resin_art_image.jpg';
export default function AboutUsComp()
{ 
    return(
        <div>
        <h2 style={{color:'black'}}>About Us</h2><br/>
        <div class="container text-center">
  <div class="row">
    <div class="col">
    <p class="lead">Urban-Gallery is an ecommerce site for selling and purchasing the artworks.
             This system’s main objective is to reduce the gap between Customers and Artworks.
             by providing a robust, user-friendly platform that connects artists with customers directly.
             Our entire collection is available online to view and browse from the comfort of your home.</p>

             <br/>
             <p class="lead">Urban Gallery is born with a vision to enrich artist’s careers by showcasing their artworks both at the local and international levels.
             Buying art should be an experience and we understand that. </p>

             <br/>
    </div>
    <div class="col">
    <img src={pic} class="img-thumbnail" width='350cm' height='250cm'></img><br/>
    </div>
  </div>
  </div>

  <br/>
  <br/>

  <div class="container text-center">
  <div class="row">
  <div class="col">
    <img src={pic1} class="img-thumbnail" width='350cm' height='350cm'></img>
    </div>
    <div class="col">
    <p class="lead">Our aims to make this process as simple and fun as it can get. 
              Through our knowledge and expertise we strive to guide our clients in the best way to find the perfect piece of art for their personal spaces. 
              At Urban Gallery you will find unique artworks of both young and mid-career artists along with works of senior artists as well.<br/>
              <br/>
              Vision:
            - Showcase paintings and sculptures of young Indian artist's.<br/>
            - Introduce clients to the best of Indian art.</p>
             <br/>
    </div>
    
  </div>
  </div>
  <br/>

  <br/>

  <div className="container text-center text-white bg-secondary">
  <div class="row">
  <div class="col">
    
  <h4>Easy Payment Options
  For Fast Transactions</h4>
    </div>
    <div class="col">
    <h4>Safe & Secure Packaging
    For Your Paintings & Sculptures</h4>
    </div>
    <div class="col">
    <h4>  Shipping<br/>
     At Your Door Step.</h4>
    <br/>
             
    </div>
    
  </div>
  </div>

        
{/* <div>
        
             <h6>Urban-Gallery is an ecommerce site for selling and purchasing the artworks.</h6> 
             <h6>This system’s main objective is to reduce the gap between Customers and Artworks</h6>
             <h6>by providing a robust, user-friendly platform that connects artists with customers directly</h6>

             <br/>
             <img src={pic} width='500cm' height='500cm'></img><br/>
             <h6>Urban Gallery is born with a vision to enrich artist’s careers by showcasing their artworks both at the local and international levels.</h6>
             <h6>Buying art should be an experience and we understand that. Our aims to make this process as simple and fun as it can get. </h6>
             <h6>  Through our knowledge and expertise we strive to guide our clients in the best way to find the perfect piece of art for their personal spaces. </h6>
             <h6>  At Urban Gallery you will find unique artworks of both young and mid-career artists along with works of senior artists as well.</h6>
             <br/>
             <img src={pic1} width='500cm' height='500cm'></img>
        </div> */}
        </div>

       
    )
}