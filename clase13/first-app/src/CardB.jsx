import { Counter } from "./Counter";
import Card from "react-bootstrap/Card";

function CardB(){
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Ejemplo</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Counter></Counter>
            </Card.Body>
            </Card>
        </div>
    );
}

export default CardB