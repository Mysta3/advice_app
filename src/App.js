import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import AdviceResult from './components/AdviceResult';
import Home from './components/Home';
import Axios from 'axios';


import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  footer: {
    marginTop: '40vh',
    color: 'white',
    fontWeight: 'bold'
  }
});

function App() {
  const [getAdvice, setAdvice] = useState({}); //Api props
  const classes = useStyles();

  //build function that fetches information
  const generateAdvice = () => {
    const rootUrl = 'https://api.adviceslip.com/advice'; // store base fetch url in a variable
    Axios.get(rootUrl).then(response => {
      setAdvice(response.data.slip); //set data to getAdvice variable | userfriendlyname
    });
  };

  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />{' '}
          {/* Renders Home component */}
          <Route
            path="/advice"
            render={() => (
              <AdviceResult
                getAdvice={getAdvice}
                generateAdvice={generateAdvice}
              />
            )}
          />{' '}
          {/* Renders Advice Results component while passing setters & getters props. */}
        </Switch>
      </main>
      <footer className={classes.footer}>
        Developed By: MYSTA3 - Personal Advice App - 2020.
      </footer>
    </div>
  );
}

export default App;
