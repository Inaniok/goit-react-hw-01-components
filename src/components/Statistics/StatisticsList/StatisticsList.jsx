import PropTypes from 'prop-types';
import { StatisticsData } from '../StatisticsData/StatisticsData';
import { getRandomHexColor } from '../../../helpers/randomColor';
import { StatistList, StatistItem } from './Statistics.styled';

export const StatisticsList = ({ stats }) => {
  return (
    <StatistList>
      {stats.map(({ id, label, percentage }) => (
        <StatistItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
          <StatisticsData label={label} percentage={percentage} />
        </StatistItem>
      ))}
    </StatistList>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};