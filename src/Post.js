import React from 'react';
import { useState, useEffect } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import post from './post.png';

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Post() {
    var name = localStorage.getItem("USER");
    const [body, setText] = useState("");
    const [threads, setThreads] = useState([]); // Store threads
    const [selectedThread, setSelectedThread] = useState(""); // Selected thread
    const [showForm, setForm] = useState(false);
    const [showWarning, setWarning] = useState(false);
    const [file, setFile] = useState();

    useEffect(() => {
        // Fetch threads when component mounts
        axios.get(`${process.env.REACT_APP_API_URL}/threads`)
            .then((response) => {
                setThreads(response.data.threads || []);
            })
            .catch((error) => console.error("There was an error fetching the threads:", error));
    }, []);

    const fileSelected = event => {
        const file = event.target.files[0]
        setFile(file)
    }

    const handleSubmitShow = (e) => {
        if (!name) {
            setWarning(true);
            setForm(false);
        }
        else if (!showForm) {
            setForm(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the form from refreshing the whole page

        if (!selectedThread) {
            alert("Please select a thread.");
            return;
        }

        const data = new FormData();
        data.append("name", name);
        data.append("body", body);
        data.append("thread", selectedThread); // Include the selected thread
        if (file) {
            data.append("file", file);
        }
        const configuration = {
            method: "post",
            url: `${process.env.REACT_APP_API_URL}/post`,
            data: data,
        };

        axios(configuration)
            .then((result) => {
                window.location.reload(false);
            })
            .catch((error) => {
                console.error("Error posting:", error);
                alert("Error");
            });
    }

    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    return (
        <>
            <div className="group-feed">
                <div className="group-box-post">
                    {showForm &&
                        <Form className='form-struct-post' onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasictext">
                                <textarea
                                    className='form-post-input-label'
                                    type="textarea"
                                    name="text"
                                    value={body}
                                    onChange={(e) => setText(e.target.value)}
                                    placeholder="Enter text"
                                />
                            </Form.Group>

                            {/* Thread selection dropdown */}
                            <Form.Group>
                                <Form.Label>Select Thread</Form.Label>
                                <Form.Control as="select" custom onChange={(e) => setSelectedThread(e.target.value)}>
                                    <option value="">Choose...</option>
                                    {threads.map((thread) => (
                                        <option key={thread._id} value={thread._id}>
                                            {thread.name}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            {/* submit button */}
                            <Row className='button-bar'>
                                {file && <p className='text-notify'>File Attached</p>}
                                <Button className='submit-button' onClick={handleClick}>
                                    Upload a file
                                </Button>
                                <input
                                    type="file"
                                    ref={hiddenFileInput}
                                    onChange={fileSelected}
                                    style={{ display: 'none' }} />

                                <Button
                                    className='submit-button'
                                    variant="primary"
                                    type="submit"
                                >Post</Button>
                            </Row>
                        </Form>
                    }
                    {!showForm &&
                        <div>
                            <Button
                                className='post-button'
                                variant="primary"
                                onClick={handleSubmitShow}
                            ><img className='post-logo' src={post}></img>Make a Post</Button>
                        </div>
                    }
                    {showWarning && <p className='text-warning'>You must be signed in to post</p>}
                </div>
            </div>
        </>
    )

}