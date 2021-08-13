import Stats from './Stats';
import Description from './Description';
import styles from './Profile.module.css';

const Profile = ({ name, avatar, tag, location, followers, views, likes }) => {
  return (
    <div className={styles.profile}>
      <Description name={name} avatar={avatar} tag={tag} location={location} />
      <Stats followers={followers} views={views} likes={likes} />
    </div>
  );
};
export default Profile;
