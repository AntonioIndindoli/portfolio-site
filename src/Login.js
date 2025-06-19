import React, { useState, useEffect } from "react";
import { Col, Row, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";

const cookies = new Cookies();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isAwaitingVerification, setIsAwaitingVerification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const location = useLocation();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
      setSuccessMessage(location.state.message || "");
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsAwaitingVerification(false);
    setIsLoading(true);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/signin`, { email, password });

      if (response.data.success && response.data.token) {
        //cookies.set("TOKEN", response.data.token, { path: "/", secure: true, httpOnly: false }); // Note: `httpOnly: true` should be set server-side for security
        //cookies.set("USER", response.data.message.name, { path: "/" });
        localStorage.setItem("TOKEN", response.data.token);
      localStorage.setItem("USER", response.data.message.name);
        cookies.set("ISADMIN", response.data.message.isAdmin, { path: "/" });
        navigate("/auth");
      } else if (response.data.awaitingVerification) {
        setIsAwaitingVerification(true);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (error.response?.status === 403) {
        setIsAwaitingVerification(true);
      } else {
        setErrorMessage(error.response?.data?.errors[0]?.user || "Login failed. Please try again.");
      }
    }
  };

  return (
    <>
    <Header />
      <div className="group">
        <Col className="group-box-login">
          <Row className="form-text">Login</Row>
          <Form onSubmit={handleSubmit}>
            

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                isInvalid={!!errorMessage}
                className='form-input-label'
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <div className="password-toggle-group d-flex">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"       
                  isInvalid={!!errorMessage}
                  className="me-2"
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </div>
              {errorMessage && <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>}
            </Form.Group>

            
            <Row className='form-text'>
            <Button className='link-header'
                            variant="primary"
                            type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Submit"}
            </Button>
            </Row>
            <p className="App-text">
              Need an account? <a className="App-link" href="/register">Register</a>
            </p>
          </Form>
          {isAwaitingVerification && <Alert variant="warning">Your account is awaiting verification.</Alert>}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
        </Col>
      </div>
    </>
  );
}
