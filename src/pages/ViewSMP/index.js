import React, { useState, useEffect } from "react";
import { Nav, Navbar, Form, Button, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../../utils/constants";
import LoadingPage from "../../components/LoadingPage";

function ViewSMP() {
  const [dataGuruSMP, setdataGuruSMP] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    axios
      .get(API_URL + "viewgurusmp")
      .then((response) => response.data)
      .then((data) => {
        if (isMounted) setdataGuruSMP(data);
        setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <Navbar bg="light" style={{ marginLeft: "-15px" }}>
            <Nav
              className="me-auto my-2 my-lg-1"
              style={{ maxHeight: "100px" }}
            >
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
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: "25px", marginBottom: "20px" }}>
          <h5>Data Guru SMP</h5>
        </Col>
      </Row>
      <Row style={{ marginRight: "5px" }}>
        <Col>
          {loading ? (
            <LoadingPage />
          ) : (
            <Table bordered hover id="tabelGuruSMP">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Lengkap</th>
                  <th>Tempat Lahir</th>
                  <th>Tanggal Lahir</th>
                  <th>No HP</th>
                  <th>No SK Pertama</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dataGuruSMP.map((dataGuruSMP, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{dataGuruSMP.nama}</td>
                    <td>{dataGuruSMP.tempatLahir}</td>
                    <td>{dataGuruSMP.tanggalLahir}</td>
                    <td>0{dataGuruSMP.noHP}</td>
                    <td>{dataGuruSMP.noSkPertama}</td>
                    <td width="80px">
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{ marginRight: "10px", marginLeft: "10px" }}
                      />
                      <FontAwesomeIcon icon={faTrash} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default ViewSMP;