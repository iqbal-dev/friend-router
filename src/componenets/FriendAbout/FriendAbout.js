import React from 'react';

const FriendAbout = (props) => {
    console.log(props.friend);
    const { name, username, email, phone,website,address } = props.friend;
    console.log(props.friendAddresses)
    return (
        <div>
            <h1>Name: {name} </h1>
            <h3>userName : {username}</h3>
            <p>Email: {email}</p>
            <p>WebSite: <a href={website}>{website}</a></p>
        </div>
    );
};

export default FriendAbout;