import React from "react";
import {Navbar, Nav, Form, Button} from "react-bootstrap"

function NavigationBar() {
  return (
    <div>
      <Navbar fixed="top" bg="light" style={{ left: "270px" }}>
        <Nav className="me-auto my-2 my-lg-1">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 ms-3"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav>
        <Form className="d-flex">
          <Button variant="primary" className="me-3">
            Tambah Data
          </Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
