import React, { useState, useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import NavigationBar from "../../components/NavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../../utils/constants";
import LoadingPage from "../../components/LoadingPage";

function ViewNonAktif() {
  const [dataNonAktif, setdataNonAktif] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    axios
      .get(API_URL + "viewnonaktif")
      .then((response) => response.data)
      .then((data) => {
        if (isMounted) setdataNonAktif(data);
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
          <NavigationBar/>
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: "90px", marginBottom: "20px" }}>
          <h5>Data Guru & Staff Non Aktif</h5>
        </Col>
      </Row>
      <Row style={{ marginRight: "5px" }}>
        <Col>
          {loading ? (
            <LoadingPage />
          ) : (
            <Table bordered hover id="tabelNonAktif">
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
                {dataNonAktif.map((dataNonAktif, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{dataNonAktif.nama}</td>
                    <td>{dataNonAktif.tempatLahir}</td>
                    <td>{dataNonAktif.tanggalLahir}</td>
                    <td>0{dataNonAktif.noHP}</td>
                    <td>{dataNonAktif.noSkPertama}</td>
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

export default ViewNonAktif;