import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import FriendAbout from '../FriendAbout/FriendAbout';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friendDetails, setFriendDetails] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(response => response.json())
            .then(data => setFriendDetails(data))
    }, [])
    return (
        <div>
            <FriendAbout friend = {friendDetails} friendAddresses = {friendDetails.address}></FriendAbout>
        </div>
    );
};

export default FriendDetail;