import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { id, name, username } = friend;

    const navigate = useNavigate();

    const showFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }

    return (
        <div>
            <h2>Name: {name}</h2>
            <Link to={`/friend/${id}`}> Show Details </Link> <br />
            <button onClick={showFriendDetail}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;