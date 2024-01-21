import css from './Option.module.css';

export const Options = ({ handleClick, total, handleReset }) => {
  return (
    <div className={css.options}>
      <button className={css.good} onClick={() => handleClick('good')}>
        Good
      </button>
      <button className={css.neutral} onClick={() => handleClick('neutral')}>
        Neutral
      </button>
      <button className={css.bad} onClick={() => handleClick('bad')}>
        Bad
      </button>
      {total > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};
