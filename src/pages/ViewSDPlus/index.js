import React, { useState, useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../../utils/constants";
import LoadingPage from "../../components/LoadingPage";
import NavigationBar from "../../components/NavigationBar";

function ViewSDPlus() {
  const [dataGuruSDPlus, setdataGuruSDPlus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    axios
      .get(API_URL + "viewgurusdplus")
      .then((response) => response.data)
      .then((data) => {
        if (isMounted) setdataGuruSDPlus(data);
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
        <NavigationBar />
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: "90px", marginBottom: "20px" }}>
          <h5>Data Guru SD Plus</h5>
        </Col>
      </Row>
      <Row style={{ marginRight: "5px" }}>
        <Col>
          {loading ? (
            <LoadingPage />
          ) : (
            <Table bordered hover id="tabelGuruSDPlus">
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
                {dataGuruSDPlus.map((dataGuruSDPlus, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{dataGuruSDPlus.nama}</td>
                    <td>{dataGuruSDPlus.tempatLahir}</td>
                    <td>{dataGuruSDPlus.tanggalLahir}</td>
                    <td>0{dataGuruSDPlus.noHP}</td>
                    <td>{dataGuruSDPlus.noSkPertama}</td>
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

export default ViewSDPlus;
