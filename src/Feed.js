import axios from "axios";
import React, { Image, Col, useState, useEffect } from "react";
import { Row, Button } from "react-bootstrap";
import DOMPurify from "dompurify";
import dateFormat from "dateformat";
import Comments from "./Comments";
import PostComment from "./PostComment";
import ProfilePic from "./ProfilePic";
import ShowMore from "react-show-more-button/dist/module";

export default function Feed({ selectedThread }) {
    const [data, setData] = useState([]);
    const [threadName, setThreadName] = useState(""); // State to store the thread name
  
    useEffect(() => {
        if (!selectedThread){
            selectedThread = '6603a122a6a831e355fde43d';
        }
        let postUrl = `${process.env.REACT_APP_API_URL}/posts/thread/${selectedThread}`;
        let threadUrl = `${process.env.REACT_APP_API_URL}/thread/${selectedThread}`; // Adjust according to your actual API
  
        // Fetch posts by thread
        axios.get(postUrl)
          .then((res) => {
            const posts = res.data.posts;
            if (Array.isArray(posts)) {
              setData(posts.slice(0, 10));
            } else {
              setData([]);
            }
          }) // Adjust based on your API response
          .catch(console.error);
  
        // Fetch thread name
        axios.get(threadUrl)
          .then((res) => {
            setThreadName(res.data.name); // Adjust based on your actual API response structure
          })
          .catch(console.error);
    }, [selectedThread]); // Re-fetch posts when selectedThread changes

  if (data.length > 0) {
    return (
      <React.Fragment>
        <div className="group-feed">
          <div className="group-box-feed-post">
            <div className="post-header">
              <div className="post-title-date">
                <a className="Post-text-title">
                  #{threadName} 
                </a>
              </div>
            </div>
          </div>
        </div>

        {data.map((post) => (
          <div className="group-feed">
            <div className="group-box-feed-post">
              <div className="post-header">
                <ProfilePic userParam={post.name} />
                <div className="post-title-date">
                  <a href={"/profile/" + post.name} className="Post-text-title">
                    {post.name}
                  </a>
                  <span className="post-date">
                    {dateFormat(post.date, "mmmm dS, yyyy")}
                  </span>
                </div>
              </div>
              <article
                className="Post-text"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post.body),
                }}
              />
              {post.image && (
                <img
                  className="Post-img"
                  src={`${process.env.REACT_APP_API_URL}/images/${post.image}`}
                />
              )}
              <PostComment postId={post._id} />
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
  return null;
}
