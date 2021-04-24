import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function Recipe({ label, image, ingredients, url, calories, health }) {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{label}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h4>Ingredients</h4>
          <p>
            {ingredients.map((ingredients) => (
              <li key={ingredients} className="list-decoration">
                {ingredients}
              </li>
            ))}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    // <div className="arrangements">
    <div className="arrangements">
      <ul className="recipe-background">
        <img src={image} alt="" />

        {/* <span 
            style={{ width: "390px" }} 
            className="recipe-name recipe-details">
            {label}
        </span> */}

        <p className="recipe-name recipe-details">
          <b>{label}</b>{" "}
        </p>
        {/* <img src={image} alt="" /> */}
        {/* <div>label:{label} </div> */}
        <p className="recipe-details">
          <b>Calories: </b>
          {Math.round(calories)}
        </p>

        <Button
          style={{ padding: "0.2rem 0.6rem", marginLeft: "0.7rem" }}
          variant="dark"
          onClick={() => setModalShow(true)}
        >
          Ingredients
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        <p></p>

        <a className="link recipe-details" href={url}>
          View recipe
        </a>

        {/* Ingredients: */}
        {/* {ingredients.map((ingredients) => (
            <li key={ingredients} className="list-decoration">
            
            <p>{ingredients}</p>
            </li>
          ))} */}

        <p></p>
      </ul>
    </div>
    // </div>
  );
}

export default Recipe;
