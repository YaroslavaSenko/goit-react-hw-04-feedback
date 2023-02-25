import React from 'react'

const Statistic = ({good, neutral, bad, total, feedback }) => (
<ul>
  <li> Good: {good}</li>
  <li>Neutral: {neutral}</li>
  <li>Bad: {bad}</li>
  <li>Total: {total}</li>
  <li>Positive feedback: {feedback}%</li>
</ul>
)

export default Statistic;