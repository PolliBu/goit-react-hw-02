import { useState } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';

export function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleClick = type => {
    setClicks({ ...clicks, [type]: clicks[type] + 1 });
  };

  const total = clicks.good + clicks.neutral + clicks.bad;

  const handleReset = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        handleClick={handleClick}
        total={total}
        handleReset={handleReset}
      />
      <Feedback clicks={clicks} />
    </>
  );
}
