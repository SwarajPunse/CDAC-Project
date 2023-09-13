import pic1 from '../images/arjun_art.jpeg';
import pic2 from "../images/neha_art.jpg";
import pic3 from "../images/Bhagwan_Rampure_art.jpg";
import pic4 from "../images/swaraj_punse_art.jpeg";
import Button from 'react-bootstrap/Button';
import {useState, useReducer, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


export default function ArtistComp()
{ 
  const [artist,setArtist]=useState(null);

  useEffect( ()=>{
  const loginid=JSON.parse(localStorage.getItem("loggedUser")).id;
  fetch("http://localhost:8080/getArtist?loginid="+loginid)
  .then(resp => resp.json())
  .then(obj => {
    localStorage.setItem("loggedArtist",JSON.stringify(obj))
    setArtist(obj);
  })
})

// 
  const init={
    art_name:"",
    art_description:"",
    art_img:"",
    art_length:"",
    art_breadth:""
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
              //headers:{'content-type':'multipart/form-data'},
              body:fd
          }
              setMsg('You have registed sucessfully. Just wait for approval.')
             
          
      })
      .catch((error) => setMsg("Server error. Try after some time"))
          
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
    <div>
      <Button variant="dark" onClick={handleInsert}>Add Artwork</Button>
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
                   <Form.Label htmlFor="category" className="form-label"> select Artwork category : </Form.Label>
                   <Form.Select aria-label="Default select example" onChange={(e)=>{dispatch({type:'update',fld:'art_category',val:e.target.value})}}>
                   <option>Select one</option>
                   <option value="1">Painting</option>
                   <option value="2">Resin Art</option>
                   <option value="3">Sculpture</option>
                   <option value="4">Cultural Art</option>
                   <option value="5">Sketches</option>
                </Form.Select>
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
                    <Form.Control type="number" name="length" placeholder="add Breadth in cms" value={info.art_breadth}
                    onChange={(e)=>{dispatch({type:'update',fld:'art_breadth',val:e.target.value})}}/>
           </Form.Group>

           </Form>
           </div>
           <button type="submit" className="btn btn-primary mb-3" onClick={(e)=>{sendData(e)}}>SUBMIT</button>

        </div>
      )}

      <Card style={{ width: '18rem', float:'left'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Delete</Button>
        <Button variant="primary">Update</Button>
      </Card.Body>
     </Card>
      <Card style={{ width: '18rem', float:'left'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Delete</Button>
        <Button variant="primary">Update</Button>
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem', float:'left'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger" >Delete</Button>
        <Button variant="primary">Update</Button>
      </Card.Body>
     </Card>

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


   