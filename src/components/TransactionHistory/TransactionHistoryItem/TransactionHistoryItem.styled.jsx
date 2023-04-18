import styled from '@emotion/styled';

export const TransactionRow = styled.tr`
  :nth-of-type(2n + 1) {
    background-color: #ebebeb;
  }
`;

export const TransactionColumn = styled.td`
  padding: 10px 0;
  text-align: center;
  :not(:last-child) {
    border-right: 1px solid #ebebeb;
  }
`;