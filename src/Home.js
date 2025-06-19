import Post from "./Post";
import Feed from "./Feed";
import UserList from "./UserList";
import Threads from "./Threads";
import Header from "./components/Header";
import { Col, Row, Container, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu"; // Import the Menu icon

export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 800);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [activeSidenavComponent, setActiveSidenavComponent] = useState(null); // 'threads', 'userList', or null
  const [selectedThread, setSelectedThread] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 800);
      // Optionally close sidenav on larger screens
      if (window.innerWidth > 800) {
        setSidenavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidenav = () => setSidenavOpen(!sidenavOpen);

  return (
    <div>
      <Header />
      {!isLargeScreen && (
        <div className={`sidenav ${sidenavOpen ? "open" : ""}`}>
          <div className="sidenav-arrow" onClick={toggleSidenav}>
            {sidenavOpen ? (
              "<"
            ) : (
              <MenuIcon style={{ fontSize: 24, color: "black" }} />
            )}{" "}
            {/* Change arrow direction based on state */}
          </div>
          {sidenavOpen && ( // Only render sidenav content when it's open
            <>
              <Button
                className="nav-button-side"
                onClick={() => setActiveSidenavComponent("threads")}
              >
                Threads
              </Button>
              <Button
                className="nav-button-side"
                onClick={() => setActiveSidenavComponent("userList")}
              >
                User List
              </Button>

              {activeSidenavComponent === "threads" && (
                <Threads onSelectThread={setSelectedThread} />
              )}
              {activeSidenavComponent === "userList" && <UserList />}
            </>
          )}
        </div>
      )}
      {!isLargeScreen && (
        <div className="feed-container-row">
          <Row className="feed-container-row2">
            <Col className="feed-container2">
              <Post />
              <Feed selectedThread={selectedThread} />
            </Col>
          </Row>
        </div>
      )}

      {isLargeScreen && (
        <div className="feed-container-row">
          <Row className="feed-container-row2">
            <div className="feed-container1">
              <Threads onSelectThread={setSelectedThread} />
            </div>
            <div className="feed-container2">
              <Post />
              <Feed selectedThread={selectedThread} />
            </div>
            <div className="feed-container3">
              <UserList />
            </div>
          </Row>
        </div>
      )}
    </div>
  );
}
