import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Nav({ total }) {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>{total}</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Nav;
