import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams()
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, []);

    return (
        <div>
            {/* <h2>This is detail of a Dosto: {params.friendId}</h2> */}
            <h2>This is detail of a Dosto: {friendId}</h2>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <p>Website: {friend.website}</p>
            <p>Phone: {friend.phone}</p>
            <p><small>City: {friend.address?.city}</small></p>
        </div>
    );
};

export default FriendDetail;