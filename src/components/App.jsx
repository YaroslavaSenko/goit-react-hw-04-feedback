import React from 'react';
import {FeedBackForm} from './App.styled';
import Statistic from './Statistics/Statistics';
import Notification from "./Notification/Notification";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends React.Component{
   state = {
      good: 0,
      neutral: 0,
      bad: 0
    } 

    onLeaveFeedback = state => {
      this.setState(prevState => ({
        [state]: prevState[state] + 1,
      }));
    };

    buttonIncrementGood = () => {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }))
    }

    buttonIncrementNeutral = () => {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      } ))
    }
    buttonIncrementBad = () => {
      this.setState(prevState => ({
        bad: prevState.bad + 1
      }))
    }
    countTotalFeedback(){
      return this.state.good + this.state.neutral + this.state.bad
    }
    countPositiveFeedbackPercentage(){
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }

  render(){  
    const options = Object.keys(this.state);
    return(
  
    <FeedBackForm>
      <h2>Please leave feedback</h2>
      <FeedbackOptions
      options={options}
      onLeaveFeedback={this.onLeaveFeedback}/>
      
      <div>
        <h3>Statistics</h3>
      {this.countTotalFeedback() > 0 ?
        (<Statistic
          good={this.state.good} 
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          feedback={this.countPositiveFeedbackPercentage()}/>)
         : 
        (<Notification
        message='There is no feedback'/>)
      }
      </div>
      </FeedBackForm>
    )
  }
}

export default App;

