import React from 'react';
import Button from '@material-ui/core/Button';


function ButtonFetch(props) {
  // store params in another variable
  const generateAdvice = props.generateAdvice;

  return (
    <div>
      <Button variant="contained" color="primary" onClick={generateAdvice}>
        Receive Advice
      </Button>
    </div>
  );
}

export default ButtonFetch;
