import css from "./TransactionHistory.module.css";
import Transaction from "./Transaction";
import PropTypes from 'prop-types';

export default function TransactionHistory({items}) {

    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency}) => (
                    <Transaction key={id} type={type} amount={amount} currency={currency}/>
                ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
}