import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const StatList = ({ stats }) => {
  return (
    <ul className={styles.statisticList}>
      {stats.map(data => {
        return (
          <li className={styles.item} key={data.id}>
            <span className={styles.label}>{data.label}</span>
            <span className={styles.percentage}> {data.percentage}% </span>
          </li>
        );
      })}
    </ul>
  );
};

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatList;
