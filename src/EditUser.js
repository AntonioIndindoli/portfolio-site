import React from "react";
import { useState } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit"; // For the bio update
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera"; // For the picture update

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function EditUser({ bio: initialBio }) {
  var name = localStorage.getItem("USER");
  const [bio, setText] = useState(initialBio);
  const [showForm, setForm] = useState(false);
  const [showWarning, setWarning] = useState(false);
  const [file, setFile] = useState();

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleSubmitShow = (e) => {
    if (!name) {
      setWarning(true);
      setForm(false);
    } else if (!showForm) {
      setForm(true);
    }
  };

  const handleSubmit = (e) => {
    // set configurations
    const data = new FormData();
    data.append("name", name);
    data.append("bio", bio);
    if (file) {
      data.append("file", file);

      const configuration = {
        method: "put",
        url: `${process.env.REACT_APP_API_URL}/users/${name}`,
        data: data,
      };

      // prevent the form from refreshing the whole page
      e.preventDefault();
      axios(configuration)
        .then((result) => {
          window.location.reload(false);
        })
        .catch((error) => {
          error = new Error();
          alert("Error");
        });
    } else {
      const configuration = {
        method: "put",
        url: `${process.env.REACT_APP_API_URL}/users/${name}`,
        data: data,
      };

      // prevent the form from refreshing the whole page
      e.preventDefault();
      axios(configuration)
        .then((result) => {
          window.location.reload(false);
        })
        .catch((error) => {
          error = new Error();
          alert("Error");
        });
    }
  };
  return (
    <>
      {showForm && (
        <Form className="form-struct-post" onSubmit={(e) => handleSubmit(e)}>
          <p className="edit-profile">
            <EditIcon /> Update Bio
          </p>

          {/* bio */}
          <Form.Group controlId="formBasictext">
            <textarea
              className="form-post-input-profile"
              type="textarea"
              name="text"
              value={bio}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text"
            />
          </Form.Group>
          {/* submit button */}
          <Row className="button-bar">
            
            <Button className="edit-profile-picture" onClick={handleClick}>
              <PhotoCameraIcon /> Upload Profile Picture
            </Button>
{file && <p className="text-notify">File Attached</p>}
            <input
              type="file"
              ref={hiddenFileInput}
              onChange={fileSelected}
              style={{ display: "none" }}
            />

            <Button
              className="submit-button"
              variant="primary"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Save Changes
            </Button>
          </Row>
        </Form>
      )}
      {!showForm && <p className="Post-text">{bio}</p>}
      {!showForm && (
        <Button
          className="show-more-row-wide"
          variant="primary"
          onClick={(e) => handleSubmitShow(e)}
        >
          <SettingsIcon fontSize="medium"></SettingsIcon> Edit
        </Button>
      )}
      {showWarning && (
        <p className="text-warning">You must be signed in to edit</p>
      )}
    </>
  );
}
