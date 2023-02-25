import React from 'react'
import PropTypes from 'prop-types';

const Statistic = ({good, neutral, bad, total, feedback }) => (
<ul>
  <li> Good: {good}</li>
  <li>Neutral: {neutral}</li>
  <li>Bad: {bad}</li>
  <li>Total: {total}</li>
  <li>Positive feedback: {feedback}%</li>
</ul>
)

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  feedback: PropTypes.number.isRequired,
};
export default Statistic;