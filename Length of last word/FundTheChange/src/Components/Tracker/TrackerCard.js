import React from "react";


import { Button, CardDeck,Card } from "react-bootstrap";

const TrackerCard = (props) => {
  return (
    <div className="cardHolder">
    <CardDeck>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        {props.data.amount}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">Donate Again</Button>
    </Card.Footer>
  </Card>


</CardDeck>
    </div>
  );
};

export default TrackerCard;
