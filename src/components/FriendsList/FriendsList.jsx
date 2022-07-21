import Friend from './Friend';
import css from './FriendsStyle.module.css'

export default function FriendsList({friends}) {
    console.log(friends);
    return (
        <ul className={css.friendList}>
            { friends.map(({avatar, name, isOnline, id}) => (
                
                    <Friend avatar={avatar} name={name} isOnline={isOnline} key={id}/>
              
            ))}
        </ul>
    )
}