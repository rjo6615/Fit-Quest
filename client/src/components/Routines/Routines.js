import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
 
const Record = (props) => (
 <tr>
   <td>{props.record.routines}</td>
   <td></td>
   <td></td>
   <td>
     {/* <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> | */}
     <Button variant="danger" onClick={() => {props.deleteRecord(props.record._id);}}>Delete</Button>
     <Link className="btn btn-link" to={`/single-routine/${props.record._id}`}><Button variant="secondary">View</Button></Link>     
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`/routines`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`/delete-routine/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((routines) => {
     return (
       <Record
         record={routines}
         deleteRecord={() => deleteRecord(routines._id)}
         key={routines._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
  <center>
   <div className="px-5 w-50">
     <h3 className="text-light">Routine List</h3>
     <table className="table text-light" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Routines</th>
           <th></th>
           <th></th>
           <th></th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
   </center>
 );
}