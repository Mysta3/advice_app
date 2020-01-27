import React from 'react';

function ButtonFetch(props) {
  // store params in another variable
  const generateAdvice = props.generateAdvice;

  return (
    <div>
      <button onClick={generateAdvice}>Receive Advice</button>
    </div>
  );
}

export default ButtonFetch;
