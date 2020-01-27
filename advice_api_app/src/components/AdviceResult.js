import React from 'react';
import '../index.css';

function AdviceResult(props) {
  const advice = props.getAdvice.advice;
  const adviceID = props.getAdvice.slip_id;

  return (
    <div>
      <h2>Today's Advice</h2>
      {advice && <h4>Tip # {adviceID}</h4>}
      <p>{advice}</p>
    </div>
  );
}

export default AdviceResult;
