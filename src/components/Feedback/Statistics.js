import { SpanStatistics } from "./Statistics.styled";
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  (
    <>
      <p>Good : <SpanStatistics>{good}</SpanStatistics></p>
      <p>Neutral : <SpanStatistics>{neutral}</SpanStatistics></p>
      <p>Bad : <SpanStatistics>{bad}</SpanStatistics></p>
      <p>Total : <SpanStatistics>{total}</SpanStatistics></p>
      <p>Positive feedback : <SpanStatistics>{positivePercentage}</SpanStatistics>%</p>
    </>
  );