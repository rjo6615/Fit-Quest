import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText} from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
 
export default function SingleRoutine() {
 const [form, setForm] = useState({
   routines: "",
   askAI: [{},{},{},{},{},{},{},{},{},{}],
 });
 
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/routines/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
   fetchData();
   
   
   return;
   
 }, [params.id, navigate]);
 // This following section will display the workout data from the db.
 return (
  <center className="pb-4">
     <div class="container">
     <h1 className="text-light">{form.routines}</h1>
     <h2 className="text-light">{form.askAI[0].type}</h2>
     <Row xs={1} md={2} lg={3} xl={5} className="g-4 mx-4">  
  {form.askAI.map((el) => (  
 <Col>          
 <Card style={{ maxWidth: 600, minHeight: 250, maxHeight: 250, backgroundColor: "lightGray"}}>
   {/* <Card.Img className="mx-auto" style={{ marginBottom: '20px', marginTop: '15px', maxWidth: '16rem', borderRadius: '25px'}} variant="top" src={el.image} />               */}
   <Card.Body>
     <Card.Title>{el.name}</Card.Title>
     <Card.Subtitle className="mb-2 text-muted">Muscle: {el.muscle}</Card.Subtitle>
     <Card.Subtitle className="mb-2 text-muted">Equipment: {el.equipment}</Card.Subtitle>
     <Card.Subtitle className="mb-2 text-muted">Difficulty: {el.difficulty}</Card.Subtitle>
     <Card.Text>
      <h5>
      <center>Instructions</center>
      </h5>
     {/* {el.instructions} */}
     </Card.Text>
   </Card.Body>
   {/* <a href={el.link} >
   <button type="button" class="btn btn-sm mb-3 px-5"
   style={{color: "white", backgroundColor: "darkblue", borderRadius: 25}}>
     <strong>View Live Site</strong></button>
     </a> */}
 </Card>            
</Col>
  ))};
  </Row>
  </div>
</center>
);
}