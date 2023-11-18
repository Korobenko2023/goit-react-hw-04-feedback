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

  const total = good + neutral + bad;
  const countPositivePercentage = good ? Math.round(100 * good / total) : 0;
      
    return (
        <main>
           <SectionTitle title="Please leave feedback">   
           <FeedbackOptions options={Object.keys(feedback)} onLeaveFeedback={handleLeaveFeedback} />   
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
                        positivePercentage={countPositivePercentage}
                      />   
                )}                    
            </SectionTitle>  
            <GlobalStyle />
         </main>
      );
  }   




