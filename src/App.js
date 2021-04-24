import "./styles.css";
import React, { useState } from "react";

import { Container } from "react-bootstrap";

import Navigation from "./Navbar.js";
import FoodCarousel from "./carousel.js";
import Footer from "./Footer.js";
import TopPicks from "./TopPicks.js";

// to get all the styles from react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import './custom.scss'

export default function App() {
  // let url = `https://api.edamam.com/search?q=${query}&app_id=bdc40645&app_key=e8af485bf7f6be734de9438b901b5f37`;
  // let url = `https://api.edamam.com/search?q=${query}&app_id=bdc40645&app_key=e8af485bf7f6be734de9438b901b5f37&health=vegan`;

  // const displayDishes = [
  //   {
  //     imagesUrl:
  //       "https://uploads.codesandbox.io/uploads/user/99c9e632-adcb-4537-bf9b-b99e662da3c1/5_3e-beef+noodle+soup.jpg",
  //     imageName: "Beef noodle soup",
  //     calories: 2242,
  //     recipeUrl: "https://www.myrecipes.com/recipe/beef-noodle-soup"
  //   },
  //   {
  //     imagesUrl:
  //       "https://www.edamam.com/web-img/533/5336e3b521f31ebb4aec644f3896b6e3.jpg",
  //     imageName: "Fish tikka",
  //     calories: 2180,
  //     recipeUrl: "https://www.bbcgoodfood.com/recipes/tikka-style-fish"
  //   },
  //   {
  //     imagesUrl:
  //       "https://www.edamam.com/web-img/2c3/2c33e3b1fb812858ff2e94301174276b.jpg",
  //     imageName: "Raspberry Mousse Pie",
  //     calories: 2754,
  //     recipeUrl:
  //       "https://www.seriouseats.com/recipes/2012/09/raspberry-mousse-pie-recipe.html"
  //   }
  // ];

  return (
    <div className="App">
      <Navigation />

      <br></br>

      {/* <Container>
        <FoodCarousel />
      </Container> */}

      <br />
      <TopPicks />

      <Footer />
    </div>
  );
}
