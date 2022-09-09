import React, { useState, useEffect } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../../utils/constants";
import LoadingPage from "../../components/LoadingPage";
import NavigationBar from "../../components/NavigationBar";

function ViewSD() {
  const [dataGuruSD, setdataGuruSD] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    axios
      .get(API_URL + "viewgurusd")
      .then((response) => response.data)
      .then((data) => {
        if (isMounted) setdataGuruSD(data);
        setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleClick = (state) => {
    navigate("/view", { state: state });
  };

  return (
    <div>
      <Row>
        <Col>
          <NavigationBar />
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: "90px", marginBottom: "20px" }}>
          <h5>Data Guru SD</h5>
        </Col>
      </Row>
      <Row style={{ marginRight: "5px" }}>
        <Col>
          {loading ? (
            <LoadingPage />
          ) : (
            <Table bordered hover id="tabelGuruSD">
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
                {dataGuruSD.map((dataGuruSD, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{dataGuruSD.nama}</td>
                    <td>{dataGuruSD.tempatLahir}</td>
                    <td>{dataGuruSD.tanggalLahir}</td>
                    <td>0{dataGuruSD.noHP}</td>
                    <td>{dataGuruSD.noSkPertama}</td>
                    <td width="80px">
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{ marginRight: "10px", marginLeft: "10px" }}
                        onClick={() => handleClick(dataGuruSD.nama)}
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

export default ViewSD;
