import { Component } from "react";
import { SectionTitle } from "./Feedback/SectionTitle";
import { FeedbackOptions } from "./Feedback/FeedbackOptions";
import { Notification } from "./Feedback/Notification";
import { Statistics } from "./Feedback/Statistics";
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
  }; 

  handleLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };
      
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state; 
      return good + neutral + bad;
      }; 

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
        
    if (total === 0) {
      return 0;
    }

    return ((good * 100) / total).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;  
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    
    return (
        <main>
           <SectionTitle title="Please leave feedback">   
           <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleLeaveFeedback} />   
           </SectionTitle>                  
           <SectionTitle title="Statistics">
            {total === 0 ? (
                    <Notification message="There is no feedback" />                      
                    ) : (
                   <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positiveFeedback}
                      />   
                )}                    
            </SectionTitle>  
            <GlobalStyle />
         </main>
      );
  }   
} 

