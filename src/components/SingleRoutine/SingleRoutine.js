import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from 'mdb-react-ui-kit';
 
export default function Edit() {
 const [form, setForm] = useState({
   routines: "",
   askAI: "",
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
 // This following section will display the form that takes input from the user to update the data.
 return (
  <center>
  <MDBCard  className="w-50">
  <MDBCardBody>
    <MDBCardTitle>{form.routines}</MDBCardTitle>
    <MDBCardText>
      {form.askAI}
    </MDBCardText>
  </MDBCardBody>
</MDBCard>
</center>
);
}