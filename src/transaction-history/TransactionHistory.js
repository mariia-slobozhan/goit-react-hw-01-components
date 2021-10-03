import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.container}>
      <thead className={s.header}>
        <tr>
          <th className={s.header_item}>Type</th>
          <th className={s.header_item}>Amount</th>
          <th className={s.header_item}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.table}>
        {items.map((item, index) => (
          <tr
            key={item.id}
            style={
              index % 2 === 0
                ? { backgroundColor: '#fff' }
                : { backgroundColor: 'rgba(177, 190, 196, 0.5)' }
            }
          >
            <td className={s.item}>{item.type}</td>
            <td className={s.item}>{item.amount}</td>
            <td className={s.item}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};
