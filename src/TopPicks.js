import React, { useState } from "react";
import card1 from "./food-pictures/apple pie.jpg";

import { Navbar, Container, Modal, CardGroup, Card } from "react-bootstrap";

// to get all the styles from react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function TopPicks() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container>
      <Navbar style={{ border: "1px solid black" }} bg="light">
        <Navbar.Brand href="#home">Top Picks...</Navbar.Brand>
      </Navbar>
      <br></br>

      <CardGroup>
        <Card className="card">
          <Card.Img
            variant="top"
            src="https://www.edamam.com/web-img/080/080794dec2aaba36885daabb16bcc82a.jpg"
          />
          <Card.Body>
            <Card.Title>Pork Sorpotel (Goan Pork Offal Stew) Recipe</Card.Title>
            <Card.Text>
              <b>Calories:</b> 499
              <p></p>
              <p>
                <a
                  style={{ marginLeft: "0rem" }}
                  className="link"
                  href="https://www.seriouseats.com/recipes/2014/01/pork-sorpotel-recipe.html"
                >
                  View Recipe
                </a>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img
            variant="top"
            src="https://www.edamam.com/web-img/d33/d33e1ec9380845a5123b3abe80581b6b"
          />
          <Card.Body>
            <Card.Title>Braised Beef Short Ribs recipes</Card.Title>
            <Card.Text>
              <b>Calories:</b> 8530
            </Card.Text>
            <p>
              <p></p>
              <a
                style={{ marginLeft: "0rem" }}
                className="link"
                href="https://www.foodrepublic.com/recipes/braised-beef-short-ribs-recipe/"
              >
                View Recipe
              </a>
            </p>
          </Card.Body>
        </Card>

        <Card className="card">
          <Card.Img variant="top" src={card1} />
          <Card.Body>
            <Card.Title>Apple Pie</Card.Title>
            <Card.Text>
              <b>Calories:</b> 4848
              <p></p>
              <p>
                <a
                  style={{ marginLeft: "0rem" }}
                  className="link"
                  href="https://smittenkitchen.com/2006/11/cinnamon-sigh/"
                >
                  View Recipe
                </a>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default TopPicks;
