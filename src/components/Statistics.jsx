import StatisticsTitle from './Statistics-title';
import StatList from './StatList';

const Statistics = ({ stats, title }) => {
  return (
    <section class="statistics">
      <StatisticsTitle title={title} />
      <StatList stats={stats} />
    </section>
  );
};

export default Statistics;
