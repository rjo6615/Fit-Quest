import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from "react";

export default function RoutineForm() {
 const [form, setForm] = useState({
   routines: "",
   askAI: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
  API();
   return setForm((prev) => {
     return { ...prev, ...value };    
   });
  
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
   API();
   
 
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

//API call
 let options = {
  method: 'GET',
  headers: { 'x-api-key': 'UJmqxvFPZX01XFomvmpcvw==Wl0sl0iTW5S1MUpN' }
}
let workoutArr = [];

const workoutType = useRef();
 async function API() { 
  const type = workoutType.current.value;
let url = 'https://api.api-ninjas.com/v1/exercises?type=' + type;
 await fetch(url,options)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          workoutArr = data;
          return;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
        console.log("this one" + workoutArr);
        console.log("this too" + workoutType);
        // updateform here for routines as well
        updateForm({ askAI: workoutArr });
        return;        
    }

 // This following section will display the form that takes the input from the user.
 return (
<center>
      <h1 className="text-light">Create Routine</h1>
      <br></br>
    <Form onSubmit={onSubmit} className="px-5" style={{ marginBottom: 200, maxWidth: 600, minHeight: 315, borderRadius: 25}}>
     
      <Form.Group className="mb-3 pt-3" controlId="formExerciseName">
        <Form.Label className="text-light">Name of Exercise</Form.Label>
        {/* ref here */}
        <Form.Control onChange={(e) => updateForm({ routines: e.target.value })} type="text" placeholder="Enter exercise" />     
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="text-light">Workout Type</Form.Label>
        <Form.Select ref={workoutType} type="text" placeholder="Enter workout type">
          <option>cardio</option>
          <option>olympic_weightlifting</option>
          <option>plyometrics</option>
          <option>powerlifting</option>
          <option>strength</option>
          <option>stretching</option>
          <option>strongman</option>
        </Form.Select>
      </Form.Group>

      <Button className="mb-3" variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
    
    </center>
 );
}