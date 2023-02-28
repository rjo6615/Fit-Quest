import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
<center>
      <h1>Create Routine</h1>
      <br></br>
    <Form className="px-5" style={{ marginBottom: 200, maxWidth: 600, minHeight: 315, backgroundColor: "lightGray", borderRadius: 25}}>
      <Form.Group className="mb-3 pt-3" controlId="formExerciseName">
        <Form.Label>Name of Exercise</Form.Label>
        <Form.Control type="text" placeholder="Enter exercise" />
        {/* {visible && <div className="text-danger">Please enter your name</div>} */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formReps">
        <Form.Label>Number of Reps</Form.Label>
        <Form.Control type="text" placeholder={"Enter reps"} />
        {/* {visible2 && <div className="text-danger">Please enter your Email</div>} */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSets">
        <Form.Label>Number of Sets</Form.Label>
        <Form.Control type="text" placeholder="Enter sets" />
        {/* {visible1 && <div className="text-danger">Please enter your message</div>} */}
      </Form.Group>

      <Button className="mb-3" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </center>
  );
}

export default BasicExample;