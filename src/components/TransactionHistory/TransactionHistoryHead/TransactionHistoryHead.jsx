import {
    TransactionHeadRow,
    TransactionTitles,
  } from './TransactionHistoryHead.styled';
  
  export function TransactionHistoryHead(props) {
    return (
      <thead>
        <TransactionHeadRow>
          <TransactionTitles>Type</TransactionTitles>
          <TransactionTitles>Amount</TransactionTitles>
          <TransactionTitles>Currency</TransactionTitles>
        </TransactionHeadRow>
      </thead>
    );
  }