import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavigationBar({onChange, yangdipilih}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/tambahdatadiri")
  }

  return (
    <div>
      <Navbar fixed="top" bg="light" style={{ left: "270px" }}>
        <Nav className="me-auto my-2 my-lg-1">
          <Form className="d-flex">
            <Form.Select
              aria-label="Default select example"
              className="me-2 ms-3"
              name="tingkat"
              value={yangdipilih.tingkat}
              onChange={onChange}
            >
              <option value="null">Silahkan pilih tingkat</option>
              <option value="TK">TK</option>
              <option value="SD">SD</option>
              <option value="SDPLUS">SD Plus</option>
              <option value="SMP">SMP</option>
              <option value="SMA">SMA</option>
              <option value="STAFF">Staff</option>
              <option value="NONAKTIF">Non Aktif</option>
            </Form.Select>
          </Form>
        </Nav>
        <Form className="d-flex">
          <Button variant="primary" className="me-3" onClick={() => handleClick()}>
            Tambah Data
          </Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
