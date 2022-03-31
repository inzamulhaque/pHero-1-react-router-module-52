import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setFriends(data));
    }, []);

    return (
        <div>
            <h1>This is friends</h1>
            <p><small>{friends.length}</small></p>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend} />)
            }
        </div>
    );
};

export default Friends;