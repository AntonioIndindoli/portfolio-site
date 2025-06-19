import Sidenav from "./Sidenav";
import React from "react";
import SidenavRight from "./SidenavRight";
import { Col, Row, Container, Button } from "react-bootstrap";
import EditUser from "./EditUser";
import Profile from "./Profile";
import Post from "./Post";
import Header from "./components/Header";

export default function MyProfile() {
    return (

        <div>
            <Header />
            <Container>
                <Row>
                    <Col sm={2}>

                    </Col>
                    <Col className="feed-container" sm={8}>
                        <Profile/>
                    </Col>
                    <Col sm={2}>

                    </Col>
                </Row>
            </Container>
        </div>

    );
}

