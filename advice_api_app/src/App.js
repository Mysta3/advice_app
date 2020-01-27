import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import AdviceResult from './components/AdviceResult';
import ButtonFetch from './components/ButtonFetch';
import Axios from 'axios';

function App() {
  const [getAdvice, setAdvice] = useState({});

  //build function that fetches information
  const generateAdvice = () => {
    const rootUrl = 'https://api.adviceslip.com/advice'; // store base fetch url in a variable
    Axios.get(rootUrl).then(response => {
      setAdvice(response.data.slip);
      console.log(response.data.slip.slip_id);
    });
  };

  console.log(getAdvice.advice);
  return (
    <div>
      <Header />
      <AdviceResult getAdvice={getAdvice} generateAdvice={generateAdvice} />
      {/* <ButtonFetch generateAdvice={generateAdvice} /> */}
    </div>
  );
}

export default App;
