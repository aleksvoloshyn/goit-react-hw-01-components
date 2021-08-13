import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Description = ({ name, avatar, tag, location }) => {
  return (
    <div className={styles.description}>
      <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};

Description.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
};

export default Description;
