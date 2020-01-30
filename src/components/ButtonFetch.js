import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

function ButtonFetch(props) {
  //Material UI styling components
  const useStyles = makeStyles({
    button: {
      margin: '8% 2%'
    }
  });
  // store params in another variable
  const generateAdvice = props.generateAdvice;
  const classes = useStyles(); //applies styles to variable
  return (
    <div>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={generateAdvice}
      >
        Receive Advice
      </Button>
    </div>
  );
}

export default ButtonFetch;
