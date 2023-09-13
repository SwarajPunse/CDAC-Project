import pic1 from "../images/art_for_home.jfif";
import pic2 from "../images/outdoor_art.jpg";
import pic3 from "../images/art_for_office.jpg";
export default function GalleryServicesComp()
{ 
    return(
        <div>
             <div class="container text-center">
  <div class="row">
  <div class="col">
    <img src={pic1} class="img-thumbnail" width='410cm' height='400cm'></img><br/>
    <h4><u>Art for Home</u></h4>
    </div>
    <div class="col">
    <img src={pic3} class="img-thumbnail" width='500cm' height='800cm'></img><br/>
    <h4><u>Art for Office</u></h4>
    </div>
    <div class="col">
    <img src={pic2} class="img-thumbnail" width='350cm' height='320cm'></img><br/>
    <h4><u>Art for Outdoor Installation</u></h4>
    </div>
    
  </div>
  </div>
        </div>
    )
}