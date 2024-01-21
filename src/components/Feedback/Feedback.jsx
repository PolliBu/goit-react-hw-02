import { Notification } from '../Notification/Notification';
export const Feedback = ({ clicks: { good, neutral, bad } }) => {
  const totalFeedback = good + neutral + bad;
  const positive = Math.round(((good + neutral) / totalFeedback) * 100);
  return totalFeedback > 0 ? (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positive}%</li>
      </ul>
    </div>
  ) : (
    <Notification />
  );
};
