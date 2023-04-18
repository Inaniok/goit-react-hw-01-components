import PropTypes from 'prop-types';
import { TransactionHistoryHead } from './TransactionHistoryHead/TransactionHistoryHead';
import { TransactionHistoryItem } from './TransactionHistoryItem/TransactionHistoryItem';
import { TransactionTable } from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TransactionHistoryHead />

      <tbody>
        <TransactionHistoryItem items={items} />
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};