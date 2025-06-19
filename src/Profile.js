import axios from "axios";
import React, { useState, useEffect } from 'react';
//import { BrowserRouter as useParams, } from "react-router-dom";
import { useParams } from "react-router-dom"; // Corrected import
import { Button } from "react-bootstrap";
import PostComment from "./PostComment";
import DOMPurify from "dompurify";
import dateFormat from 'dateformat';
import ProfilePic from "./ProfilePic";
import EditUser from './EditUser';
import Post from './Post';
import SettingsIcon from '@mui/icons-material/Settings';
import Cookies from "universal-cookie";
const cookies = new Cookies();


export default function Profile() {
    const currentUser = localStorage.getItem("USER");
    
    const { user } = useParams();
    //alert("sex");
    const [data, setData] = useState([]);
    const [showWarning, setWarning] = useState(false);
    const [showForm, setForm] = useState(false);
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/posts/${user}`)
            .then((res) => setData(res.data.posts))
            .catch(console.error);

            axios.get(`${process.env.REACT_APP_API_URL}/users/${user}`)
            .then((res) => setUserData(res.data.user))
            .catch(console.error);
    }, [user]);

    const handleSubmitShow = (e) => {
        if (!currentUser) {
            setWarning(true);
            setForm(false);
        }
        else if (!showForm) {
            setForm(true);
        }
    }

    if (data.length) {
        var createdAt = userData.map(({ createdAt }) => createdAt)
        var bio = userData.map(({ bio }) => bio)
        console.log(createdAt.length)
        if(createdAt.length < 1){
            createdAt = ""
        }
        if(bio.length < 1){
            bio = ""
        }
        return (
            <React.Fragment>
                <div className="group-feed">
                    <div className="group-box-post">
                    <div className="post-header">
                                <ProfilePic userParam={user} />
                                <div className="post-title-date">
                                    <a className="Post-text-title">{user}</a>
                                    <span className="post-date">Joined on {dateFormat(createdAt, "mmmm dS, yyyy")}</span>
                                </div>
                            </div>
                            {currentUser === user && <EditUser bio={bio[0]} />}
                    </div>
                </div>

                {currentUser == user && <Post />}

                {data.map((post) => (
                    <div className="group-feed">
                        <div className="group-box-feed-post">
                        <div className="post-header">
                                <div className="post-title-date">
                                    <span className="post-date">@{post.name} on {dateFormat(post.date, "mmmm dS, yyyy")}</span>
                                </div>
                            </div>
                            <article className="Post-text" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.body) }} />
                            {post.image && <img className="Post-img" src={`${process.env.REACT_APP_API_URL}/images/${post.image}`} />}
                            <PostComment postId={post._id} />
                        </div>
                    </div>

                ))}
            </React.Fragment>
        );
    }else if(userData){
        const createdAt = userData.map(({ createdAt }) => createdAt)
        var bio = userData.map(({ bio }) => bio)
        if(createdAt.length > 0){
            return (
            <React.Fragment>
                <div className="group-feed">
                    <div className="group-box-post">
                    <div className="post-header">
                                <ProfilePic userParam={user} />
                                <div className="post-title-date">
                                    <a className="Post-text-title">{user}</a>
                                    <span className="post-date">Joined on {dateFormat(createdAt, "mmmm dS, yyyy")}</span>
                                </div>
                            </div>
                            {currentUser === user && <EditUser bio={bio[0]} />}

                    </div>
                </div>

                {currentUser == user && <Post />}
            </React.Fragment>
        );
        }
    }
    return null;
}