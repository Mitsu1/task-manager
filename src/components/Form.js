import { useState } from "react";
import Button from "./Button";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const FormComponent = ({ children }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
      {children}

      <Row className="mb-3 justify-content-md-center text-center">
        <Form.Group md="6" controlId="validationCustom03">
          <Button type="submit" text="Submit form"/>
        </Form.Group>
      </Row>
    </Form>
  );
};

export default FormComponent;
