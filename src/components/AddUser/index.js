import React from "react";
import { Form, Button } from "react-bootstrap";

const AddUser = () => {
  return (
    <div className="container my-3">
      <Form>
        <Form.Group className="mb-3" controlId="fisrtName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" value={""} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="userName">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="User Name" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddUser;
