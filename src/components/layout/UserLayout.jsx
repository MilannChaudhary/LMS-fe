import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import { SideBar } from "./SideBar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      {/* header */}
      <Header />
      {/* sidebar and main area */}
      <Container fluid>
        <Row className="h-100">
          <Col md={3} xl={2} className="bg-dark text-white">
            <div className="p-3">
              <div>Welcome Back</div>
              <h4>Milan Chaudhary</h4>
            </div>
            <hr />
            <SideBar />
          </Col>
          <Col md={9}>
            <div className="main">
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;
