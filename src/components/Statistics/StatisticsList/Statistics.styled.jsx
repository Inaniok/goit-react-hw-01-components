import styled from '@emotion/styled';

const items = 5;

export const StatistList = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatistItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  flex-basis: calc(100% / ${items});
  border-top: 1px solid #ebebeb;
`;