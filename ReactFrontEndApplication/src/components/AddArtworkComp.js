import pic1 from '../images/arjun_art.jpeg';
import pic2 from "../images/neha_art.jpg";
import pic3 from "../images/Bhagwan_Rampure_art.jpg";
import pic4 from "../images/swaraj_punse_art.jpeg";
import Button from 'react-bootstrap/Button';
import {useState, useReducer} from 'react';
import Form from 'react-bootstrap/Form';
import pic from '../images/Artist_homePage_image.jpg';
import { useNavigate } from 'react-router-dom';




export default function ArtistComp()
{ 
  // const username=JSON.parse(localStrorage.getItem("loggedUser"));

  const init={
    art_name:"",
    art_description:"",
    art_img:"",
    art_length:"",
    art_breadth:"",
    category:"",
    price:""

  }

  const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'update':
            return {...state,[action.fld]:action.val}
        case 'reset':
            return init;

    }

}
const navigate = useNavigate();
const goBack =() =>{
  navigate(-1);
}

    const [info,dispatch]=useReducer(reducer,init);
    const [file,setFile]=useState();
    const [msg,setMsg]=useState(".....");

    const sendData=(e)=>{
      e.preventDefault();
      const reqOptions={
          method:'POST',
          headers:{'content-type':'application/json'},
          body:JSON.stringify(info)
      }
      fetch("http://localhost:8080/addartwork",reqOptions)
      .then(resp=>{if(resp.ok){
                      
                      return resp.json();
                  }
                  else
                  {
                      console.log(resp);
                      throw new Error("server error");
                  }
                      
      })
      //.then(text=>text.length?JSON.parse(text):{})
      .then(obj=>{
          console.log(obj.id);
          const fd=new FormData();
          fd.append("file",file);
          const reqOptions1={
              method:'POST',
              // headers:{'content-type':'multipart/form-data'},
              body:fd
          }
          fetch("http://localhost:8080/uploadArt/"+obj.id, reqOptions1)
          .then(resp=>resp.json())
          .then(obj=>{
            if(obj)
            {
              setMsg(<b className="lead" style={{color:'red'}}>"Artwork Added sucessfully!"</b>);
            }
            else
            {
              setMsg(<b className="lead" style={{color:'red'}}>"artwork added but image upload failed "</b>)
            }
          })
          setMsg(<b className="lead" style={{color:'red'}}>'You have Added image sucessfully.'</b>);
             
          
      })
      .catch((error) => setMsg(<b className="lead" style={{color:'red'}}>"Server error. Try after some time"</b>))
          
  }

  const [isShown, setIsShown] = useState(false);
 
  const handleInsert = event => {
    setIsShown(current => !current) 
  };

   const [cards, setCards] = useState([]);
  
   const [visible, setVisible] = useState(true);

   const removeElement = () => {
     setVisible((prev) => !prev);
   };


  return (
    <div style={{backgroundImage: 'url(../images/Artist_homePage_image.jpg)'}}>
      
      <Button variant="dark" onClick={handleInsert}>Add Artwork</Button>
      <br/>
      <br/>
      <Button variant="dark"onClick={goBack}>Go Back</Button>
      {/*  show elements on click */}
      {isShown && (
        <div>
        <div>
          <h3>Add details of your art work</h3>

          <Form>
                <Form.Group className="mb-3" controlId="formBasicProductName">
                    <Form.Label>Artwork name</Form.Label>
                    <Form.Control type="text" name="p_name" placeholder="Enter Product name" value={info.art_name}
                    onChange={(e)=>{dispatch({type:'update',fld:'art_name',val:e.target.value})}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicProductName">
                    <Form.Label>Artwork description</Form.Label>
                    <Form.Control type="text" name="desc" placeholder="add description" value={info.art_description}
                    onChange={(e)=>{dispatch({type:'update',fld:'art_description',val:e.target.value})}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCategoryName">
                   <Form.Label htmlFor="category" id="category" className="form-label"> select Artwork category : </Form.Label>
                   <select type="number" aria-label="Default select example" id="category" name="category"  onChange={(e)=>{dispatch({type:'update',fld:'category',val:e.target.value})}}>
                   <option id="category" value="0">Select one</option>
                   <option  id="category" value="1">Painting</option>
                   <option  id="category"  value="2">Resin Art</option>
                   <option id="category" value="3">Sculpture</option>
                   <option  id="category" value="4">Cultural Art</option>
                   <option  id="category" value="5">Sketches</option>
                 </select>
            </Form.Group>
         
            <Form.Group className="mb-3" controlId="formBasicProductName">
                    <Form.Label htmlFor="image">select image of your artwork : </Form.Label>
                    <Form.Control type="file" name="image" placeholder="Upload Photo..." 
                    onChange={(e)=>setFile(e.target.files[0])}/>
                </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicProductName">
                    <Form.Label htmlFor="length">Enter Length :</Form.Label>
                    <Form.Control type="number" name="length" placeholder="add length in cms" value={info.art_length}
                    onChange={(e)=>{dispatch({type:'update',fld:'art_length',val:e.target.value})}}/>
           </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicProductName">
                    <Form.Label htmlFor="breadth">Enter Breadth :</Form.Label>
                    <Form.Control type="number" name="breadth" placeholder="add Breadth in cms" value={info.art_breadth}
                    onChange={(e)=>{dispatch({type:'update',fld:'art_breadth',val:e.target.value})}}/>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicProductName">
                    <Form.Label htmlFor="price">Enter price :</Form.Label>
                    <Form.Control type="number" name="price" placeholder="Enter price" value={info.price}
                    onChange={(e)=>{dispatch({type:'update',fld:'price',val:e.target.value})}}/>
           </Form.Group>

           </Form>
           {/* <p>{JSON.stringify(info)}</p> */}
           </div>
           <button type="submit" className="btn btn-primary mb-3" onClick={(e)=>{sendData(e)}}>SUBMIT</button>
           <p style={{marginTop:"2%"}}> {msg}</p>

           <Button onClick={goBack}>Go Back</Button>

        </div>
      )}
      


      
     </div>
  );




 

  // return (
  //   <div>
  //     <button onClick={addCard}>Add Card</button>
  //     {cards.map(card => (
  //       <div key={card.id}>
  //         <div>{card.content}</div>
  //         <button onClick={() => removeCard(card.id)}>Remove Card</button>
  //       </div>
  //     ))}
  //   </div>
  // );
}


   