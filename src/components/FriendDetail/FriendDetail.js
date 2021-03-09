import React from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {

    const {friendId} = useParams();
    return (
        <div>
            <h3>This is friend details component : {friendId}</h3>
        </div>
    );
};

export default FriendDetail;