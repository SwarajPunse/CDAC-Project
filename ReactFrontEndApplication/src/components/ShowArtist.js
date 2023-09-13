import pic1 from '../images/arjun_art.jpeg';
import pic2 from "../images/neha_art.jpg";
import pic3 from "../images/Bhagwan_Rampure_art.jpg";
import pic4 from "../images/swaraj_punse_art.jpeg";


export default function ArtistComp()
{ 
    return(
        <div>
            <br/>
            <div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{width:50} }/>
  <button type="button" class="btn btn-outline-primary">search</button>
</div>
            <br/>
             <div class="container text-center">
  <div class="row">
  <div class="col">
    <img src={pic1} class="img-thumbnail" width='310cm' height='310cm'></img><br/>
    <h4><u>Arjun Choudhary</u></h4>
    </div>
    <div class="col">
    <img src={pic2} class="img-thumbnail" width='400cm' height='400cm'></img><br/>
    <h4><u>Neha Hiray</u></h4>
    </div>
    
    </div>
    <br/>
    <div class="row">
    <div class="col">
    <img src={pic3} class="img-thumbnail" width='400cm' height='400cm'></img><br/>
    <h4><u>Bhagwan Rampure</u></h4>
    </div>
    <div class="col">
    <img src={pic4} class="img-thumbnail" width='300cm' height='300cm'></img><br/>
    <h4><u>Swaraj Punse</u></h4>
    </div>
    </div>
    
  
  </div>

        </div>
    )
}