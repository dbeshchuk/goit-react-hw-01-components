import React from "react";
// import PropTypes from 'prop-types';

const FriendlistItem = ({ avatar, name, isOnline }) => (
  <li className={isOnline ? "item online" : "item offline"}>
    <span className="status">{}</span>
    <img className="avatar" src={avatar} alt="" width="48" />
    <p className="name">{name}</p>
  </li>
);

export default FriendlistItem;
