// import logo from './logo.svg';
import Profile from './components/profile/Profile';
import user from './components/profile/user.json';

import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';

import friends from './components/friendslist/friends.json';
import FriendList from './components/friendslist/FriendList';

import transactions from './components/transactions/transactions.json';
import TransactionHistory from './components/transactions/TransactionHistory';

import styles from './app.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
