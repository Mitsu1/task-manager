import CardComponent from "react-bootstrap/Card";
import Button from "./Button";

const Card = () => {
  return (
    <>
      <CardComponent.Img
        variant="top"
        src="scrum_board.svg"
        title="scrum_board_image"
      />
      <CardComponent.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </CardComponent.Text>
      <CardComponent.Body className="text-center">
        <Button icon="arrow-left" text="Volver" />
      </CardComponent.Body>
    </>
  );
};

export default Card;
