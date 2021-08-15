import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const StatisticsTitle = ({ title }) => {
  return (
    <div className={styles.titleSection}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

StatisticsTitle.propTypes = {
  title: PropTypes.string,
};

export default StatisticsTitle;
