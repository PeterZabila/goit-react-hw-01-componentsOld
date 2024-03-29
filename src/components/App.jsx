import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendsList from "./FriendsList/FriendsList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import user from "../data/user.json";
import data from "../data/data.json"
import friends from "../data/friends.json"
import transactions from "../data/transactions.json"


export const App = () => {
  return (
    <div
      style={{

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        padding: '15px',
      }}
    >

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
           data={data} title
      />

      <FriendsList
        friends={friends}
      />

      <TransactionHistory 
        items={transactions} 
      />

    </div>
  );
};
