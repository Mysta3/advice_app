import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import AdviceResult from './components/AdviceResult';
import Home from './components/Home';
import Axios from 'axios';

function App() {
  const [getAdvice, setAdvice] = useState({}); //Api props

  //build function that fetches information
  const generateAdvice = () => {
    const rootUrl = 'https://api.adviceslip.com/advice'; // store base fetch url in a variable
    Axios.get(rootUrl).then(response => {
      setAdvice(response.data.slip);
    });
  };

  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/advice"
            render={() => (
              <AdviceResult
                getAdvice={getAdvice}
                generateAdvice={generateAdvice}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;