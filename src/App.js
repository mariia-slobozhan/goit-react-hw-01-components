import './App.css';
import user from './social-profile/user.json';
import statisticalData from './statistics/statistical-data.json';
import friends from './friend-list/friends.json';
import transactions from './transaction-history/transactions.json';
import SocialProfile from './social-profile/SocialProfile';
import Statistics from './statistics/Statistics';
import FriendList from './friend-list/FriendList';
import TransactionHistory from './transaction-history/TransactionHistory';

function App() {
  return (
    <>
      <SocialProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
