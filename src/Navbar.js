import "./styles.css";
import React, { useState } from "react";
import FoodCarousel from "./carousel.js";

import {
  Navbar,
  Form,
  FormControl,
  Button,
  Dropdown,
  DropdownButton,
  Container
} from "react-bootstrap";

import Recipe from "./Recipe.js";

// to get all the styles from react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

export const ListContext = React.createContext([]);
// export const ItemContext = React.createContext([]);

function Navigation() {
  const [recipes, setRecipes] = useState([]);
  // const [foodName, setFoodName] = useState("");
  const [query, setQuery] = useState("");

  let url = `https://api.edamam.com/search?q=${query}&app_id=bdc40645&app_key=e8af485bf7f6be734de9438b901b5f37`;

  function dataFetch() {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setRecipes(json.hits);
      })
      .catch(errorHandler);
    // return url;
  }

  function errorHandler(error) {
    alert("Something went wrong with the server! try again after sometime");
  }

  function onChange(event) {
    setQuery(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(url);
    dataFetch();
    // console.log("hello");
  }

  function American() {
    url = url + `&cuisineType=American`;
    console.log(url);
    dataFetch();
  }

  function Indian() {
    url = url + `&cuisineType=Indian`;
    console.log(url);
    dataFetch();
    return url;
  }

  function Asian() {
    url = url + `&cuisineType=Asian`;
    console.log(url);
    dataFetch();
  }

  function French() {
    url = url + `&cuisineType=French`;
    console.log(url);
    dataFetch();
  }

  function Chinese() {
    url = url + `&cuisineType=Chinese`;
    console.log(url);
    dataFetch();
  }

  function British() {
    url = url + `&cuisineType=British`;
    console.log(url);
    dataFetch();
  }

  function Italian() {
    url = url + `&cuisineType=Italian`;
    console.log(url);
    dataFetch();
  }

  return (
    <div>
      <Navbar
        fixed="top"
        className="navigation"
        bg="dark"
        variant="dark"
        expand="md"
      >
        <Navbar.Brand href="#home">Recipe App</Navbar.Brand>

        <Form className="nav-form" inline onSubmit={onSubmit}>
          <FormControl
            type="text"
            className="form-control"
            placeholder="Enter Food item..."
            onChange={onChange}
            value={query}
          />

          <Button
            variant="light"
            className="btn btn-primary btn-large centerButton"
            // variant="outline-info"
            type="submit"
          >
            Search
          </Button>
        </Form>

        {/* <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}

        <DropdownButton variant="light" id="dropdown-basic-button" title="">
          <Dropdown.Item onClick={American}> American </Dropdown.Item>
          <Dropdown.Item onClick={Asian}> Asian</Dropdown.Item>
          <Dropdown.Item onClick={British}> British</Dropdown.Item>
          <Dropdown.Item onClick={Chinese}> Chinese</Dropdown.Item>
          <Dropdown.Item onClick={French}> French</Dropdown.Item>
          <Dropdown.Item onClick={Indian}> Indian</Dropdown.Item>
          <Dropdown.Item onClick={Italian}> Italian</Dropdown.Item>
        </DropdownButton>
      </Navbar>

      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={carousel1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}

      <Container>
        <FoodCarousel />

        <div className="recipes">
          {recipes.map((recipes) => (
            <Recipe
              key={recipes.recipe.label}
              label={recipes.recipe.label}
              calories={recipes.recipe.calories}
              image={recipes.recipe.image}
              url={recipes.recipe.url}
              ingredients={recipes.recipe.ingredientLines}
              health={recipes.healthLabels}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Navigation;
