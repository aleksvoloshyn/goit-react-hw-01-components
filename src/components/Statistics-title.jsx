import PropTypes from 'prop-types';

const StatisticsTitle = ({ title }) => {
  return <h2 class="title">{title}</h2>;
};

StatisticsTitle.propTypes = {
  title: PropTypes.string,
};

export default StatisticsTitle;
