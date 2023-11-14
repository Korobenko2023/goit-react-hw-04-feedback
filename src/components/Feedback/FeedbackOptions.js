import { ButtonFeedback } from "./FeedbackOptions.styled";
export const FeedbackOptions = ({ options, onLeaveFeedback }) => { 
  return (
    <>
      {options.map(option => (
        <ButtonFeedback  type="button" key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </ButtonFeedback>
      ))}
    </>
  )
}



