import { useState } from "react";
import { SectionTitle } from "./Feedback/SectionTitle";
import { FeedbackOptions } from "./Feedback/FeedbackOptions";
import { Notification } from "./Feedback/Notification";
import { Statistics } from "./Feedback/Statistics";
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
   const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
   const { good, neutral, bad } = feedback;  

  const handleLeaveFeedback = option => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback, [option]: prevFeedback[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
      return good + neutral + bad;
  }; 
  
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (total === 0) {
      return 0;
    }
    return ((good * 100) / total).toFixed(0);
  }; 
    
    return (
        <main>
           <SectionTitle title="Please leave feedback">   
           <FeedbackOptions options={Object.keys(feedback)} onLeaveFeedback={handleLeaveFeedback} />   
           </SectionTitle>                  
           <SectionTitle title="Statistics">
            {countTotalFeedback() === 0 ? (
                    <Notification message="There is no feedback" />                      
                    ) : (
                   <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                      />   
                )}                    
            </SectionTitle>  
            <GlobalStyle />
         </main>
      );
  }   




