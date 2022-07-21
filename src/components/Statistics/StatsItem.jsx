import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function StatsItem({title, stats}) {
    return (
        <>
            <span className={css.title}>{title}</span>
            <span className={css.percentage}>{stats}%</span>
        </>
    )
}

StatsItem.propTypes = {
    title: PropTypes.string, 
    stats: PropTypes.number,
}