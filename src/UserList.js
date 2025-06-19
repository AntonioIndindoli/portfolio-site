import axios from "axios";
import React, { useState, useEffect } from 'react';
import dateFormat from 'dateformat';
import ProfilePic from "./ProfilePic";
import ShowMore from 'react-show-more-button/dist/module';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function UserList() {
    const [data, setData] = useState([]);
    const isAdmin = cookies.get('ISADMIN') === 'true';

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/users`)
            .then((res) => setData(res.data.users))
            .catch(console.error);
    }, []);

    const verifyUser = (userId) => {
        //const token = localStorage.getItem('TOKEN'); // Assuming token is stored in local storage
        const token = localStorage.getItem('TOKEN');
        
        axios.put(`${process.env.REACT_APP_API_URL}/admin/verify-user/${userId}`, {}, {
            headers: {
                Authorization: `Bearer ${token}` // Include the token in the Authorization header
            }
        })
        .then(() => {
            // Update the local state to reflect the change
            const newData = data.map(user => {
                if (user._id === userId) {
                    return { ...user, isVerified: true };
                }
                return user;
            });
            setData(newData);
        })
        .catch(error => {
            // Handle errors here. For example, you could alert the user if they're unauthorized.
            console.error(error);
            if (error.response && error.response.status === 403) {
                alert('You are not authorized to perform this action.');
            }
        });
    };
    

    if (data.length > 0) {
        return (
            <React.Fragment>
                {data.map((user) => (
                    <div className="group-users" key={user._id}>
                        <div className="group-box-feed-post">
                            <ProfilePic userParam={user.name} />
                            <a href={"/profile/"+user.name} className="Post-text-title">{user.name}</a>
                            <p className="Post-text">Joined on: {dateFormat(user.createdAt, "mmmm dS, yyyy")}</p>
                            {isAdmin  ? (
                                user.isVerified ? 'Verified' :  (
                                    <button onClick={() => verifyUser(user._id)} className="verify-user-button">
                                        Verify
                                    </button>
                                )
                            ) : (
                                <p className="verification-status">{user.isVerified ? 'Verified' : 'Unverified'}</p>
                            )}
                        </div>
                    </div>
                ))}
            </React.Fragment>
        );
    }
    return null;
}
