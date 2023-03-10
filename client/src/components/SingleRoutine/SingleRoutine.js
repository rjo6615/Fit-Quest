import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText} from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 
export default function SingleRoutine() {
 const [form, setForm] = useState({
   routines: "",
   askAI: [{},{},{},{},{},{},{},{},{},{}],
 });
 
 const [modalData, setModalData] = useState({
  routines: "",
  askAI: [{},{},{},{},{},{},{},{},{},{}],
 });
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`/routines/${params.id.toString()}`);
 
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
     <div className="container">
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
     {/* {el.instructions} */}
     </Card.Text>
   </Card.Body>
      <Button variant="secondary" onClick={() => {handleShow(); setModalData(el);}}>
        View Instructions
      </Button>      
 </Card>            
</Col>
  ))}
  </Row>
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalData.instructions}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
</center>
);
}