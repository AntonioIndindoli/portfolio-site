import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Threads({ onSelectThread }) {
  const [data, setData] = useState([]);
  const [threadName, setThreadName] = useState("");
  const [creatingThread, setCreatingThread] = useState(false); // State to manage showing input field and submit button

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/threads`)
      .then((res) => setData(res.data.threads))
      .catch(console.error);
  }, []);

  const handleCreateThread = () => {
    if (!threadName.trim()) {
      alert("Thread name cannot be empty.");
      return;
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/createThread`, {
        name: threadName,
      })
      .then((res) => {
        setData((prevData) => [...prevData, res.data.thread]);
        setThreadName("");
        setCreatingThread(false); // Reset to hide input and button after submission
      })
      .catch(console.error);
  };

  const toggleCreateThread = () => {
    setCreatingThread(!creatingThread);
  };

  return (
    <React.Fragment>
      {!creatingThread ? (
        // Show this button when not in creating mode
        <button className="thread-list" onClick={toggleCreateThread}>
          Make New Thread
        </button>
      ) : (
        // Show input field and submit button when in creating mode
        <div            style={{
            width: "100%",

          }}>
          <input
            className="thread-list-text-input"
            type="text"
            placeholder="Enter thread name"
            value={threadName}
            onChange={(e) => setThreadName(e.target.value)}
          />
          <div
            style={{
              width: "100%",
              display: 'flex',
            }}
          >

            <button className="thread-list-cancel" onClick={toggleCreateThread}>
              Cancel
            </button>
            <button className="thread-list-submit" onClick={handleCreateThread}>
              Submit
            </button>
          </div>
        </div>
      )}

      {data.length > 0 ? (
        data.map((thread) => (
          <button
            className="thread-list"
            onClick={() => onSelectThread(thread._id)}
            key={thread._id}
          >
            <a className="thread-list-text">#{thread.name}</a>
          </button>
        ))
      ) : (
        <p>No threads to display.</p>
      )}
    </React.Fragment>
  );
}
