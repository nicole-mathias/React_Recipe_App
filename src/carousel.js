// import "./styles.css";
import React from "react";

import { Carousel } from "react-bootstrap";

// to get all the styles from react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function FoodCarousel() {
  return (
    <div>
      <Carousel className="carousel">
        {/* anchor is used to put recipe address on the images */}
        <Carousel.Item className="size" interval={1000}>
          <a href="http://www.seriouseats.com/recipes/2012/04/mango-mousse-pie-recipe.html">
            <img
              className="d-block w-100"
              src="https://www.edamam.com/web-img/23a/23a076d2582f4c8e1fca8134b61fe04a.jpg"
              alt="Third slide"
            />
          </a>

          <Carousel.Caption>
            <h3 className="carousel-name">Mango Mousse Pie Recipe</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="size" interval={1000}>
          <a href="http://www.bbcgoodfood.com/recipes/4568/">
            <img
              className="d-block w-100"
              src="https://www.edamam.com/web-img/533/5336e3b521f31ebb4aec644f3896b6e3.jpg"
              alt="First slide"
            />
          </a>

          <Carousel.Caption>
            <h3 className="carousel-name">Fish Tikka</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="size" interval={1000}>
          <a href="https://www.edamam.com/web-img/855/855b4d68b6159a0e374870d041d49edf.jpg">
            <img
              className="d-block w-100"
              src="https://www.edamam.com/web-img/855/855b4d68b6159a0e374870d041d49edf.jpg"
              alt="Second slide"
            />
          </a>
          <Carousel.Caption>
            <h3 className="carousel-name">Beef Noodle Soup</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="size" interval={1000}>
          <a href="http://www.chowhound.com/recipes/cake-pops-30434">
            <img
              className="d-block w-100"
              src="https://www.edamam.com/web-img/7d2/7d2b7c1a987e84bfd9c49519444b140e"
              alt="Third slide"
            />
          </a>
          <Carousel.Caption>
            <h3 className="carousel-name">Cake Pops recipes</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="size" interval={1000}>
          <a href="https://food52.com/recipes/16852-april-fool-s-day-rock-cupcakes">
            <img
              className="d-block w-100"
              src="https://www.edamam.com/web-img/923/923b7345f80d295b4893235eb245b420.jpg"
              alt="Second slide"
            />
          </a>

          <Carousel.Caption>
            <h3 className="carousel-name">April Fool's Day Rock Cupcakes</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default FoodCarousel;
