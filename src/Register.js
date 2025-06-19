import React, { useState } from 'react';
import { Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Header from "./components/Header";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [register, setRegister] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // Check for basic validation (e.g., password match) before sending
        if (password !== passwordConfirmation) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        const configuration = {
            method: "post",
            url: `${process.env.REACT_APP_API_URL}/signup`,
            data: { name, email, password, password_confirmation: passwordConfirmation },
        };

        axios(configuration)
            .then(() => {
                setRegister(true);
                navigate('/login', { state: { email: email, message: 'Registration successful. Please log in.' } });
            })
            .catch((error) => {
                setError("Registration failed. Please try again."); // Adjust based on error response for better feedback
                setLoading(false);
            });
    };

    return (
        <>
        <Header />
        <div className="group">
            <Col className="group-box">
                <Row className='form-text'>Register Account</Row>
                <Form className='form-struct' onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label >Username</Form.Label>
                        <Form.Control
                            className='form-input-label'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Username"
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            className='form-input-label'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            className='form-input-label'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                        />
                    </Form.Group>

                    <Form.Group  controlId="formBasicPasswordConfirmation">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            className='form-input-label'
                            type="password"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            placeholder="Confirm Password"
                        />
                    </Form.Group>

                    

                    <Row className='form-text'>
                        <Button
                            className='link-header'
                            variant="primary"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                    <span className="sr-only">Submitting...</span>
                                </>
                            ) : (
                                "Submit"
                            )}
                        </Button>
                        <p className='App-text'> Have an account?  
                            <a className='App-link' href="/login"> Login</a>
                        </p>
                    </Row>
                    
                    {register && <Alert variant="success">You Registered Successfully</Alert>}
                </Form>
                {error && <Alert variant="danger">{error}</Alert>}
            </Col>
            
        </div></>
    );
}
