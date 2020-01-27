import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    fontWeight: 'bold'
  },
  a:{
    textDecoration: 'none'
  }
})


function Home() {
  const classes = useStyles();
  
  return (
    <div>
      <h2>Welcome</h2>
      <h3 className="homeParagraph">To Your Personal Advice Assistant</h3>
      <Link className={classes.a}to="/advice">
        <Button focusRipple variant='outlined' color='primary' className={classes.button}>Get Advice</Button>
      </Link>
    </div>
  );
}

export default Home;
