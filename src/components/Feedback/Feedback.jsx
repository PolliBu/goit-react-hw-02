import { Notification } from '../Notification/Notification';
import css from './Feedback.module.css';

export const Feedback = ({ clicks: { good, neutral, bad } }) => {
  const totalFeedback = good + neutral + bad;
  const positive = Math.round(((good + neutral) / totalFeedback) * 100);
  return totalFeedback > 0 ? (
    <div className={css.feedback}>
      <ul className={css.item}>
        <li className={css.good}>Good: {good}</li>
        <li className={css.neutral}>Neutral: {neutral}</li>
        <li className={css.bad}>Bad: {bad}</li>
        <li className={css.total}>Total: {totalFeedback}</li>
        <li className={css.positive}>Positive: {positive}%</li>
      </ul>
    </div>
  ) : (
    <Notification />
  );
};
