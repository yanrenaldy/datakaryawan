import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import NavigationBar from "../../components/NavigationBar";
import { API_URL } from "../../utils/constants";
import LoadingPage from "../../components/LoadingPage";
import { useLocation, useNavigate } from "react-router-dom";
import { useDownloadExcel } from "react-export-table-to-excel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function DataKaryawan() {
  const [dataArray, setdataArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [yangdipilih, setyangdipilih] = useState({
    tingkat: location.state,
  });
  const terpilih = yangdipilih.tingkat;
  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Tabel Staff",
    sheet: "Data",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setyangdipilih((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setLoading(true);
  };

  const handleClick = (state) => {
    navigate("/view", { state: { nama: state, tingkat: yangdipilih.tingkat } });
  };

  useEffect(() => {
    let isMounted = true;
    axios
      .get(API_URL + yangdipilih.tingkat)
      .then((response) => response.data)
      .then((data) => {
        if (isMounted) setdataArray(data);
        setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [yangdipilih]);

  return (
    <div>
      <Row>
        <Col>
          <NavigationBar yangdipilih={yangdipilih} onChange={onChange} />
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: "90px", marginBottom: "20px" }}>
          <h5>
            Data {terpilih}
            {"   "}
            <FontAwesomeIcon icon={faDownload} onClick={onDownload} />
          </h5>
        </Col>
      </Row>
      <Row style={{ marginRight: "5px" }}>
        <Col>
          {loading ? (
            <LoadingPage />
          ) : (
            <Table bordered hover id="tabelKaryawan" ref={tableRef}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Lengkap</th>
                  <th>Tempat Lahir</th>
                  <th>Tanggal Lahir</th>
                  <th>No HP</th>
                  <th>No SK Pertama</th>
                </tr>
              </thead>
              <tbody>
                {dataArray.map((dataArray, index) => (
                  <tr key={index} onClick={() => handleClick(dataArray.nama)}>
                    <td>{index + 1}</td>
                    <td>{dataArray.nama}</td>
                    <td>{dataArray.tempatLahir}</td>
                    <td>{dataArray.tanggalLahir}</td>
                    <td>0{dataArray.noHP}</td>
                    <td>{dataArray.noSkPertama}</td>
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

export default DataKaryawan;
