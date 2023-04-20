import PropTypes from 'prop-types';

import { StatisticsList } from './StatisticsList/StatisticsList';
import { StatistSection, StatistTitle } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatistSection>
      {title && <StatistTitle>{title}</StatistTitle>}
      <StatisticsList stats={stats} />
    </StatistSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
