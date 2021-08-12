import PropTypes from 'prop-types';

const StatList = ({ stats }) => {
  return (
    <ul class="stat-list">
      {stats.map(data => {
        return (
          <li class="item" key={data.id}>
            <span class="label">{data.label}</span>
            <span class="percentage"> {data.percentage}% </span>
          </li>
        );
      })}
    </ul>
  );
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default StatList;
