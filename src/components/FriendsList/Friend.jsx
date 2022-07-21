import css from './FriendsStyle.module.css'

export default function Friend({avatar, name, isOnline, id}) {
    return (
        <li className={css.item} key={id}>
            <span className={isOnline ? css.onLine : css.offLine}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" />
            <p className="name">{name}</p>
        </li>
    )
}
