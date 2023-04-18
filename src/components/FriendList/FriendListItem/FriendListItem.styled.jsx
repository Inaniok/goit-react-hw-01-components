import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const FriendStatus = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${isOnline};
`;

function isOnline({ status }) {
  switch (status) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return 'gray';
  }
}

export const FriendImg = styled.img`
  margin-left: 10px;
`;

export const FriendName = styled.span`
  margin-left: 15px;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.4;
`;