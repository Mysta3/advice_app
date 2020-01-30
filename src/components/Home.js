import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
const useStyles = makeStyles({
  button: {
    fontWeight: 'bold'
  },
  a: {
    textDecoration: 'none'
  }
});

let userName;

function Home() {
  const classes = useStyles();

  const [open, setOpen] = useState(false); //Modal box props
  const [name, setName] = useState();

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleChange = event => {
    userName = event.target.value;

    console.log(name);
  };
  const handleClose = () => {
    setOpen(false);
    setName(userName);
  };

  return (
    <div>
      {/* DIALOG MODAL BOX BEGIN */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Introduction</DialogTitle>
        <DialogContent>
          <DialogContentText>What's Your Name?</DialogContentText>
          <TextField
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="standard-uncontrolled"
            label="Name"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Enter
          </Button>
        </DialogActions>
      </Dialog>
      {/* DIALOG MODAL BOX END */}
      {name && <h2>Welcome, {name} </h2>}
      <h3 className="homeParagraph">To Your Personal Advice Assistant</h3>
      <Link className={classes.a} to="/advice">
        <Button
          focusRipple
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          Get Advice
        </Button>
      </Link>
    </div>
  );
}

export default Home;
