import pic from '../images/logo-no-background.png';
import pic1 from '../images/1917994.jpg';
export default function ContactUsComp()
{
    return(
        <div className="text-center "  >
            <img src={pic} height={"75"} width={"200"} style={{alignSelf:'center'}}/>
            <br/>
            <h1 className="text-dark bg-dark">contact</h1>
            <br/>
            <div className='container text-center'>
            <div className='row'>
            <div className='col'>
            <img src={pic1} height="400" width="600" ></img>
            </div>
            <div className='col'>
            
            <h2 >Address : </h2>
            <h4 className='lead'>S. No, AP81, 83, N Main Rd, near Hard Rock Cafe, Koregaon Park Annexe, Mundhwa, Pune, Maharashtra 411036</h4>
            <br/>
            <h2 >Email : </h2>
            <h4 className='lead'>urbangallery@gmail.com</h4>
            <br/>
            <h2>Contact us at : </h2>
            <h4 className='lead'>6738291290</h4>
            
            <br/>
            </div>
            </div>
            </div>

            
        </div>
    )
}