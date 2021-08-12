import PropTypes from 'prop-types';
const FriendListItem = ({ avatar, status, name }) => {
  return (
    <>
      <span class="status">{status}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  status: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
