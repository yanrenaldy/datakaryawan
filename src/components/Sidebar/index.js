import React, { useEffect, useState } from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Routes, Route, Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import {
  DataKaryawan,
  HomePage,
  TambahDataDiri,
  ViewData,
  TambahDataPekerjaan,
  TambahDataPendidikan,
  TambahDataSusunanKeluarga,
  UploadImage,
  UbahDataDiri,
  UbahDataKeluarga,
  UbahDataPekerjaan,
  UbahDataPendidikan,
  UbahRiwayatKerja,
} from "../../pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

function Sidebar() {
  const [windowHeight, setwindowHeight] = useState(window.innerHeight);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth - 270);

  useEffect(() => {
    window.addEventListener("resize", setwindowHeight(window.innerHeight));
  }, [windowHeight]);

  useEffect(() => {
    window.addEventListener("resize", setwindowWidth(window.innerWidth - 270));
  }, [windowWidth]);

  return (
    <div>
      <Row>
        <Col
          lg="2"
          style={{
            height: windowHeight,
          }}
          className="barsamping"
        >
          <ProSidebar>
            <SidebarHeader>
              {
                <Row>
                  <Col
                    xs={3}
                    style={{
                      paddingLeft: "25px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                  >
                    <Image src="logos.png" height={"50px"} />
                  </Col>
                  <Col style={{ paddingTop: "20px" }}>
                    <h5>YPGMI Antiokhia</h5>
                  </Col>
                </Row>
              }
            </SidebarHeader>
            <SidebarContent>
              {
                <Menu iconShape="square">
                  <MenuItem icon={<FontAwesomeIcon icon={faHome} />}>
                    Home
                    <Link to="/" />
                  </MenuItem>
                  <MenuItem icon={<FontAwesomeIcon icon={faPeopleGroup} />}>
                    Data Karyawan
                    <Link to="/datakaryawan" />
                  </MenuItem>
                </Menu>
              }
            </SidebarContent>
          </ProSidebar>
        </Col>
        <Col
          lg={10}
          className="konten"
          style={{
            width: windowWidth,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/view" element={<ViewData />} />
            <Route path="/datakaryawan" element={<DataKaryawan />} />
            <Route path="/tambahdatadiri" element={<TambahDataDiri />} />
            <Route
              path="/tambahdatapendidikan"
              element={<TambahDataPendidikan />}
            />
            <Route
              path="/tambahdatapekerjaan"
              element={<TambahDataPekerjaan />}
            />
            <Route
              path="/tambahdatakeluarga"
              element={<TambahDataSusunanKeluarga />}
            />
            <Route path="/uploadimg" element={<UploadImage />} />
            <Route path="/ubahdatadiri" element={<UbahDataDiri />} />
            <Route path="/ubahdatakeluarga" element={<UbahDataKeluarga />} />
            <Route path="/ubahpekerjaan" element={<UbahDataPekerjaan />} />
            <Route path="/ubahpendidikan" element={<UbahDataPendidikan />} />
            <Route path="/ubahriwayatkerja" element={<UbahRiwayatKerja />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default Sidebar;
