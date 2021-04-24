import React from "react";
import github from "./food-pictures/github.svg";
import linkedin from "./food-pictures/linkedin.svg";

// to get all the styles from react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from "react-bootstrap";

function Footer() {
  return (
    // <Navbar bg="dark" variant="dark">
    //   <Navbar.Brand href="#home">
    //     {/* <img
    //       alt=""
    //       src="/logo.svg"
    //       width="30"
    //       height="30"
    //       className="d-inline-block align-top"
    //     /> */}

    //     <div className="footer">
    //       Connect with me
    //       <div className="footer-link">
    //         <a href="https://github.com/nicole-mathias">GitHub </a>
    //         <a href="https://www.linkedin.com/in/nicole-mathias-1a52251aa">
    //           LinkedIn
    //         </a>
    //       </div>
    //     </div>
    //   </Navbar.Brand>
    // </Navbar>

    <div className="footer">
      <b>Connect with me</b>
      <p></p>

      <a className="footer-link" href="https://github.com/nicole-mathias">
        <img
          style={{ width: "1.5rem", height: "1.5rem", paddingRight: "0.2rem" }}
          src={github}
          alt=""
        />
        GitHub{" "}
      </a>

      <a
        className="footer-link"
        href="https://www.linkedin.com/in/nicole-mathias-1a52251aa"
      >
        <img
          style={{ width: "1.5rem", height: "1.5rem", paddingRight: "0.2rem" }}
          src={linkedin}
          alt=""
        />
        LinkedIn
      </a>
    </div>
  );
}

export default Footer;
