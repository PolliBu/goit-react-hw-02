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

  return (
    <>
      <Description />
      <Options handleClick={handleClick} />
      <Feedback clicks={clicks} />
    </>
  );
}
