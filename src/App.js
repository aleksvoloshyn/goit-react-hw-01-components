// import logo from './logo.svg';
import Profile from './components/Profile/Profile';
import user from './data/user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './data/statistical-data.json';

import friends from './data/friends.json';
import FriendList from './components/Friendslist/FriendList';

import transactions from './data/transactions.json';
import TransactionHistory from './components/Transactions/TransactionHistory';

import styles from './App.module.css';

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
