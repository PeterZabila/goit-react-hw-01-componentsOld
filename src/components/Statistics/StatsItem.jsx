import PropTypes from 'prop-types';





export default function StatsItem({title, stats}) {
    return (
        <>
            <span className="label">{title}</span>
            <span className="percentage">{stats}%</span>
        </>
    )
}

StatsItem.propTypes = {
    title: PropTypes.string, 
    stats: PropTypes.number,
}