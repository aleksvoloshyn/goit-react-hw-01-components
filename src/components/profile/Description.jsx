import PropTypes from 'prop-types';

const Description = ({ name, avatar, tag, location }) => {
  return (
    <div class="description">
      <img src={avatar} alt="Аватар пользователя" class="avatar" />
      <p class="name">{name}</p>
      <p class="tag">{tag}</p>
      <p class="location">{location}</p>
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
