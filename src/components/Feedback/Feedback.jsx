import { Notification } from '../Notification/Notification';
export const Feedback = ({ clicks: { good, neutral, bad } }) => {
  const totalFeedback = good + neutral + bad;
  return totalFeedback > 0 ? (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
    </div>
  ) : (
    <Notification />
  );
};
