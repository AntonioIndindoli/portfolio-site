import React from "react";
import { useState, useEffect } from "react";
import { Row, Form, Button } from "react-bootstrap";
import DOMPurify from "dompurify";
import dateFormat from "dateformat";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import axios from "axios";
import ProfilePic from "./ProfilePic";
import speech from "./speech.png";
import thumbup from "./thumbup.png";
import post from './post.png';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function PostComment({ postId }) {
  var name = localStorage.getItem("USER");
  const [body, setText] = useState("");
  const [showWarning, setWarning] = useState(false);
  const [showComments, setShowComments] = useState();
  const [commentData, setCommentData] = useState([]);
  const [likeData, setlikeData] = useState([]);
  const [hover, setHover] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false); 

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/comment/${postId}`)
      .then((res) => {
        setCommentData(res.data.comments);
        // Immediately check if there are comments and show them by default if so
        setShowComments(res.data.comments.length > 0);
      })
      .catch(console.error);

    axios
      .get(`${process.env.REACT_APP_API_URL}/post/${postId}`)
      .then((res) => setlikeData(res.data.posts))
      .catch(console.error);
  }, []);

  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  const handleSubmit = (e) => {
    if (!name) {
      e.preventDefault();
      setWarning(true);
    } else {
      const configuration = {
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/comment/${postId}`,
        data: {
          name,
          postId,
          body,
        },
      };
      // prevent the form from refreshing the whole page
      e.preventDefault();
      axios(configuration)
        .then((result) => {
          axios
            .get(`${process.env.REACT_APP_API_URL}/comment/${postId}`)
            .then((res) => setCommentData(res.data.comments))
            .catch(console.error);
        })
        .catch((error) => {
          error = new Error();
          alert("Error");
        });
      setText("");
    }
  };

  const handleLike = (e) => {
    if (!name) {
      e.preventDefault();
      setWarning(true);
    } else {
      const configuration = {
        method: "put",
        url: `${process.env.REACT_APP_API_URL}/likepost/${postId}`,
        data: {
          name,
        },
      };
      // prevent the form from refreshing the whole page
      e.preventDefault();
      axios(configuration)
        .then((result) => {
          axios
            .get(`${process.env.REACT_APP_API_URL}/post/${postId}`)
            .then((res) => setlikeData(res.data.posts))
            .catch(console.error);
        })
        .catch((error) => {
          error = new Error();
          alert("Error");
        });
    }
  };

  const handleShow = (e) => {
    if (!showComments) setShowComments(true);
    else setShowComments(false);
  };

  const toggleCommentForm = () => {
    setShowCommentForm(!showCommentForm);
  };

  if (showComments) {
    if (commentData) {
      return (
        <React.Fragment>
          <Row>
            <Button
              className="show-more-row-wide"
              variant="primary"
              type="submit"
              onClick={(e) => handleShow(e)}
            >
              Hide <img className="comment-logo" src={speech}></img>
            </Button>
            <Tooltip
              title={likeData.likes && "Liked By: " + likeData.likes.toString()}
            >
              <Button
                className="show-more-row-like"
                variant="primary"
                type="submit"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                onClick={(e) => handleLike(e)}
              >
                {likeData.likes && <a> {likeData.likes.length} </a>}
                <img className="comment-logo" src={thumbup} />
              </Button>
            </Tooltip>
          </Row>

          {showWarning && (
            <p className="text-warning">You must be signed in to comment</p>
          )}
          <div className="group-post-comment">
            <div className="group-post-comment-form">
              {/* Render "Post a comment" text or the comment form based on showCommentForm state */}
              {!showCommentForm && (
                <a className="Post-text-info" onClick={toggleCommentForm}>
                  <img className="post-comment-logo" src={post} alt="post" />Post a comment{name ? ` as ${name}` : ""}
                </a>
              )}
              {showCommentForm && (
                <Form onSubmit={handleSubmit} className="form-struct-post">
                  <Form.Group controlId="formBasictext">
                    <textarea
                      className="form-post-input-label-comment"
                      type="textarea"
                      name="text"
                      value={body}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Enter text"
                    />
                  </Form.Group>
                  <Row className="button-bar">
                    <Button
                      className="submit-button"
                      variant="primary"
                      type="submit"
                    >
                      Comment
                    </Button>
                  </Row>
                </Form>
              )}
            </div>
          </div>
          <div className="comments">
            <React.Fragment>
              {commentData.map((comment) => (
                <div className="group-post-comment">
                  <div className="post-header">
                  <ProfilePic userParam={comment.name} />
                                <div className="post-title-date">
                                    <a href={"/profile/" + comment.name} className="Post-text-title">{comment.name}</a>
                                    <span className="post-date">{dateFormat(comment.date, "mmmm dS, yyyy")}</span>
                                </div>
                            </div>
                  <article
                    className="Post-text"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(comment.body),
                    }}
                  />
                </div>
              ))}
            </React.Fragment>
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {showWarning && (
          <p className="text-warning">You must be signed in to comment</p>
        )}
        <div className="group-post-comment">
          <div className="group-post-comment-form">
            {!name && <a className="Post-text-info"><img className="post-logo" src={post} alt="post" />Post a comment</a>}
            {name && <a className="Post-text-info"><img className="post-logo" src={post} alt="post" />Post a comment as {name}</a>}
            <Form
              className="form-struct-post"
              onSubmit={(e) => handleSubmit(e)}
            >
              {/* text */}
              <Form.Group controlId="formBasictext">
                <textarea
                  className="form-post-input-label-comment"
                  type="textarea"
                  name="text"
                  value={body}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter text"
                />
              </Form.Group>

              {/* submit button */}
              <Row className="button-bar">
                <Button
                  className="submit-button"
                  variant="primary"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  Comment
                </Button>
              </Row>
            </Form>
          </div>
        </div>
        <Row>
          <Button
            className="show-more-row-wide"
            variant="primary"
            type="submit"
            onClick={(e) => handleShow(e)}
          >
            Hide Comments <img className="comment-logo" src={speech} />
          </Button>
          <Tooltip
            title={likeData.likes && "Liked By: " + likeData.likes.toString()}
          >
            <Button
              className="show-more-row-like"
              variant="primary"
              type="submit"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              onClick={(e) => handleLike(e)}
            >
              {likeData.likes && <a> {likeData.likes.length} </a>}
              <img className="comment-logo" src={thumbup} />
            </Button>
          </Tooltip>
        </Row>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Row>
          <Button
            className="show-more-row"
            variant="primary"
            type="submit"
            onClick={(e) => handleShow(e)}
          >
            {commentData.length} <img className="comment-logo" src={speech} />
          </Button>
          <Tooltip
            title={likeData.likes && "Liked By: " + likeData.likes.toString()}
          >
            <Button
              className="show-more-row-like"
              variant="primary"
              type="submit"
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              onClick={(e) => handleLike(e)}
            >
              {likeData.likes && <a> {likeData.likes.length} </a>}
              <img className="comment-logo" src={thumbup} />
            </Button>
          </Tooltip>
        </Row>
      </React.Fragment>
    );
  }
}
