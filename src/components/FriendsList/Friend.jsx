import css from './FriendsStyle.module.css'

import PropTypes from 'prop-types';

export default function Friend({avatar, name, isOnline, id}) {
    return (
        <li className={css.item} key={id}>
            <span className={isOnline ? css.onLine : css.offLine}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" />
            <p className="name">{name}</p>
        </li>
    )
}

Friend.propTypes = {
    id: PropTypes.string,
    isOnline: PropTypes.bool,
    name: PropTypes.string,
    avatar: PropTypes.string,
}