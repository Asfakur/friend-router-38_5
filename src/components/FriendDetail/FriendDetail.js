import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {

    const {friendId} = useParams();
    const [friend, setFriend] = useState({}); //for object empty object

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])

    return (
        <div>
            
            <h3>{friend.name}</h3>

            <p>This is friend details component : {friendId}</p>
            <p>email : {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>Website : {friend.website}</p>

        </div>
    );
};

export default FriendDetail;