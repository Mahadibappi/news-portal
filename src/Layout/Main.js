import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftSide/LeftNav";
import RightNav from "../Shared/RightSide/RightNav";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftNav />
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
