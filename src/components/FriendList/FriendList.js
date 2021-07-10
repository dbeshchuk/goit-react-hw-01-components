import React from "react";
import FriendlistItem from "./FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendlistItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id.toString()}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
