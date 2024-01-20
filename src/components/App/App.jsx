// import { useState } from 'react';
import { Description } from '../Description/Description';
import { Options } from '../Options/Options';
import { Feedback } from '../Feedback/Feedback';

function App() {
  //   const start = {
  // 	good: 0,
  // 	neutral: 0,
  // 	bad: 0
  // };
  //   const [count, setCount] = useState(0);

  return (
    <>
      <Description />
      <Options />
      <Feedback />
    </>
  );
}

export default App;
