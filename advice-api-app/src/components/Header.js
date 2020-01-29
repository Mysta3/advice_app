import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  h1: {
    marginTop: '0',
    background: '#F7F7F7',
    color: 'black',
    fontFamily: 'Copperplate, Arial',
    fontSize: '4rem',
    fontWeight: 'lighter',
    textShadow: '1px 1px 3px grey',
    padding: '1%'
  }
});

function Header() {
  const classes = useStyles();
  return (
    <div>
      <Link to="/">
        <h1 className={classes.h1}>Ad-Vice App</h1>
      </Link>
    </div>
  );
}

export default Header;
