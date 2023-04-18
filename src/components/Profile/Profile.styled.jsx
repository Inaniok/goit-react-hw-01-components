import styled from '@emotion/styled';

export const UserProfile = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  background-color: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const UserDescription = styled.div`
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

export const UserImg = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
  background-color: #bababa;
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0.03em;
`;

export const UserTag = styled.p`
  margin-bottom: 5px;
  color: #bababa;
`;

export const UserLocation = styled.p`
  color: #bababa;
`;

export const UserStatsList = styled.ul`
  display: flex;
  width: 100%;
  background-color: #f3f9fa;
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 33.333%;
  border-top: 1px solid #ebebeb;
  :not(:last-child) {
    border-right: 1px solid #ebebeb;
  }
`;

export const UserLabel = styled.p`
  margin-bottom: 5px;
  color: #bababa;
`;

export const UserQuantity = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0.03em;
`;
