import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import StatsItem from './StatsItem';

export default function Statistics({ stats }) {
  let randomColor;
 return ( 
      <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>
          <ul className={css.statList} >
            {stats.map(el => (
                <li className={css.listItem} key={el.id}  style={{backgroundColor: `#${randomColor = Math.floor(Math.random()*16777215).toString(16)}`}}>
                <StatsItem title={el.label} stats={el.percentage} />
                </li>
            ))}
        </ul>
      </section>
           )   
}