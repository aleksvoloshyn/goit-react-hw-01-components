import StatisticsTitle from './Statistics-title';
import StatList from './StatList';
import styles from './Statistics.module.css';

const Statistics = ({ stats, title }) => {
  return (
    <section className={styles.statistics}>
      <StatisticsTitle title={title} />
      <StatList stats={stats} />
    </section>
  );
};

export default Statistics;
