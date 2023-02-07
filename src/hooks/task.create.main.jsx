import Presentation from "../components/Presentation";
import FormLabel from "../components/Form.Label"
import Form from "../components/Form"

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const TaskCreateMain = () => {

  return (
    <Container>
      <Row>
        <Col >
          <Presentation />        
        </Col>
        <Col className="mb-3 align-self-md-baseline">
          <Form>
            <Row className="mb-3 justify-content-center text-center">
              <FormLabel 
                className="text-center" 
                label="Nombre del proyecto" 
                col={Col}
              />
            </Row>
            <Row className="mb-3 justify-content-md-center text-center">
              <FormLabel 
                className="text-center" 
                label="Nombre del proyecto" 
                col={Col}
              />
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default TaskCreateMain