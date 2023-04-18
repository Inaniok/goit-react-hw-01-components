import PropTypes from 'prop-types';
import {
  TransactionRow,
  TransactionColumn,
} from './TransactionHistoryItem.styled';

export function TransactionHistoryItem({ items }) {
  return items.map(({ id, type, amount, currency }) => (
    <TransactionRow key={id}>
      <TransactionColumn>{type}</TransactionColumn>
      <TransactionColumn>{amount}</TransactionColumn>
      <TransactionColumn>{currency}</TransactionColumn>
    </TransactionRow>
  ));
}

TransactionHistoryItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};