import { useState } from 'react';
import {FeedBackForm} from './App.styled';
import Statistic from './Statistics/Statistics';
import Notification from "./Notification/Notification";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [feedback, setFeedback] = useState(0)
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
 
   const onLeaveFeedback = () => {
    setFeedback((prevFeedback) => prevFeedback + 1);
    };


   const countTotalFeedback= () => {
      return good + neutral + bad
    }
   const countPositiveFeedbackPercentage= ()=> {
      return Math.round((good / countTotalFeedback()) * 100);
    }

    return(
  
    <FeedBackForm>
      <h2>Please leave feedback</h2>
      <FeedbackOptions
      options={['good', 'neutral', 'bad']}
      onLeaveFeedback={onLeaveFeedback}/>
      
      <div>
        <h3>Statistics</h3>
      {countTotalFeedback() > 0 ?
        (<Statistic
          good={good} 
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          feedback={countPositiveFeedbackPercentage()}/>)
         : 
        (<Notification
        message='There is no feedback'/>)
      }
      </div>
      </FeedBackForm>
    )
  }



