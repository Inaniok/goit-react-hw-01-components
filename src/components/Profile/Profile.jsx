import PropTypes from 'prop-types';
import {
  UserProfile,
  UserDescription,
  UserImg,
  UserName,
  UserTag,
  UserLocation,
  UserStatsList,
  UserStatsItem,
  UserLabel,
  UserQuantity,
} from './Profile.styled';

export function Profile({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
  return (
    <UserProfile>
      <UserDescription>
        <UserImg src={avatar} alt={`${username} avatar`} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserDescription>

      <UserStatsList>
        <UserStatsItem>
          <UserLabel>Followers</UserLabel>
          <UserQuantity>{followers}</UserQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserLabel>Views</UserLabel>
          <UserQuantity>{views}</UserQuantity>
        </UserStatsItem>
        <UserStatsItem>
          <UserLabel>Likes</UserLabel>
          <UserQuantity>{likes}</UserQuantity>
        </UserStatsItem>
      </UserStatsList>
    </UserProfile>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};