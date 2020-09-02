import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;
    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    const history = useHistory();
    const handleClick = (friendId) => {
        history.push(`/friend/${friendId}`);
    }
    return (
        <div style={friendStyle}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <button onClick={() => handleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;