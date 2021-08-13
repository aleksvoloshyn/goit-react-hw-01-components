import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import styles from './Friendlist.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          <FriendListItem
            status={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};
export default FriendList;
