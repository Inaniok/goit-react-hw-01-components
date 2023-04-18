import PropTypes from 'prop-types';
import { StatistLabel, StatistPercent } from './StatisticsData.styled';

export const StatisticsData = ({ label, percentage }) => {
  return (
    <>
      <StatistLabel>{label}</StatistLabel>
      <StatistPercent>{percentage}</StatistPercent>
    </>
  );
};

StatisticsData.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};