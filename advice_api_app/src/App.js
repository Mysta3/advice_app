import React from 'react';
import './index.css';
import Header from './components/Header';
import AdviceResult from './components/AdviceResult';
import ButtonFetch from './components/ButtonFetch';

function App() {
  return (
    <div>
      <Header />
      <AdviceResult />
      <ButtonFetch />
    </div>
  );
}

export default App;
