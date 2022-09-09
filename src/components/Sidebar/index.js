import React, { useEffect, useState } from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Routes, Route, Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import {
  HomePage,
  ViewData,
  ViewSD,
  ViewSDPlus,
  ViewSMA,
  ViewSMP,
  ViewStaff,
  ViewTK,
} from "../../pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

function Sidebar() {
  const [windowHeight, setwindowHeight] = useState(window.innerHeight);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth-270);

  useEffect(() => {
    window.addEventListener("resize", setwindowHeight(window.innerHeight));
  }, [windowHeight]);

  useEffect(() => {
    window.addEventListener("resize", setwindowWidth(window.innerWidth-270));
  }, [windowWidth]);

  console.log(windowWidth);

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
                  </MenuItem>
                  <SubMenu
                    title="Data Karyawan"
                    icon={<FontAwesomeIcon icon={faPeopleGroup} />}
                  >
                    <MenuItem>
                      TK
                      <Link to="/tk" />
                    </MenuItem>
                    <MenuItem>
                      SD
                      <Link to="/sd" />
                    </MenuItem>
                    <MenuItem>
                      SD Plus
                      <Link to="/sdplus" />
                    </MenuItem>
                    <MenuItem>
                      SMP
                      <Link to="/smp" />
                    </MenuItem>
                    <MenuItem>
                      SMA
                      <Link to="/sma" />
                    </MenuItem>
                    <MenuItem>
                      Staff
                      <Link to="/staff" />
                    </MenuItem>
                  </SubMenu>
                </Menu>
              }
            </SidebarContent>
          </ProSidebar>
        </Col>
        <Col lg={10}
          className="konten"
          style={{
            width: windowWidth,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/view" element={<ViewData />} />
            <Route path="/tk" element={<ViewTK />} />
            <Route path="/sd" element={<ViewSD />} />
            <Route path="/sdplus" element={<ViewSDPlus />} />
            <Route path="/smp" element={<ViewSMP />} />
            <Route path="/sma" element={<ViewSMA />} />
            <Route path="/staff" element={<ViewStaff />} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}

export default Sidebar;
