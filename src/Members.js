import Sidenav from "./Sidenav";
import React from "react";
import Profile from "./Profile";
import UserList from "./UserList";
import { Col, Row, Container, Button } from "react-bootstrap";
import Header from "./components/Header";

export default function Members() {
  return (
    <div>
      <Header />
      <div className="feed-container-row">
        <Col>
          <Col className="feed-container">
            <UserList />
          </Col>
        </Col>
      </div>
    </div>
  );
}
