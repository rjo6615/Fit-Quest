import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function RoutineForm() {
 const [form, setForm] = useState({
   routines: "",
   askAI: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newRoutine = { ...form };
 
   await fetch("http://localhost:5000/routines/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newRoutine),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ routines: "", askAI: "" });
   navigate("/routines");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
<center>
      <h1 className="text-light">Create Routine</h1>
      <br></br>
    <Form onSubmit={onSubmit} className="px-5" style={{ marginBottom: 200, maxWidth: 600, minHeight: 315, borderRadius: 25}}>
      <Form.Group className="mb-3 pt-3" controlId="formExerciseName">
        <Form.Label className="text-light">Name of Exercise</Form.Label>
        <Form.Control onChange={(e) => updateForm({ routines: e.target.value })} type="text" placeholder="Enter exercise" />     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAsk">
        <Form.Label className="text-light">Ask AI</Form.Label>
        <Form.Control onChange={(e) => updateForm({ askAI: e.target.value })} type="text" placeholder={"Enter workout params"} />        
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formSets">
        <Form.Label className="text-light">Number of Sets</Form.Label>
        <Form.Control type="text" placeholder="Enter sets" />     
      </Form.Group> */}

      <Button className="mb-3" variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
    </center>
 );
}