import Sidenav from "./Sidenav";
import React from "react";
import Profile from "./Profile";
import SidenavRight from "./SidenavRight";
import { Col, Row, Container, Button } from "react-bootstrap";
import Header from "./components/Header";

export default function AuthComponent() {
  return (
    <div>
      <Header />
      <div className="feed-container-row">
        <Col>
          <Col className="feed-container">
            <Profile />
          </Col>
        </Col>
      </div>
    </div>
  );
}
