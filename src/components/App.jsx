import { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';

export function App() {
  const [clicks, setClicks] = useState(
    JSON.parse(window.localStorage.getItem('saved-clicks')) || {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  );

  // const [clicks, setClicks] = useState(() => {
  //   const savedClicks = window.localStorage.getItem('saved-clicks');
  //   if (savedClicks !== null) {
  //     return savedClicks;
  //   }
  //   return 0;
  // });

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

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', JSON.stringify(clicks));
  }, [clicks]);

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
