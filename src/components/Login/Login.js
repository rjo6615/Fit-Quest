import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

async function loginUser(credentials) {
 return fetch('http://localhost:5000/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <center  className="bg-image"
    style={{
      backgroundImage: 'url(./images/black_paper.webp)', height: '100vh'}}>
     <Form  className="w-25 pt-5" onSubmit={handleSubmit}>
        <h1 className='text-light'>Login</h1>
     <Form.Group className="mb-3" controlId="formUsername">
       <Form.Label>Username</Form.Label>
       <Form.Control type="text"  onChange={e => setUserName(e.target.value)} placeholder="Enter username" />
     </Form.Group>

     <Form.Group className="mb-3" controlId="formPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
     </Form.Group>
     <Button variant="secondary" type="submit">
       Submit
     </Button>
   </Form>
   </center>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};