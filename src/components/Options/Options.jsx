export const Options = ({ handleClick, total, handleReset }) => {
  return (
    <div>
      <button onClick={() => handleClick('good')}>Good</button>
      <button onClick={() => handleClick('neutral')}>Neutral</button>
      <button onClick={() => handleClick('bad')}>Bad</button>
      {total > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};
