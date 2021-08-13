import PropTypes from 'prop-types';
import styles from './Friendlist.module.css';

const FriendListItem = ({ avatar, status, name }) => {
  return (
    <>
      <span
        className={status === true ? styles.isOnline : styles.isOffline}
      ></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  status: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
