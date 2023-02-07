import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const FormLabel = (props) => {

	let control = props.typeControl || "text"
	let feedback = props.typeFeedback || "invalid"
	let required = props.required || true

	return(
    
		<Form.Group as={ props.col } md="6" controlId="validationCustom03">
			<FloatingLabel controlId="floatingInputGrid" label={ props.label }>
				<Form.Control 
					type = { control } 
					required = { required }
				/>
			</FloatingLabel>
			<Form.Control.Feedback type={ feedback } />
		</Form.Group>
	);
}

export default FormLabel;

