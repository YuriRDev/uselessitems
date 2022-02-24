import React, { useState } from 'react';
import Header from './Components/Header';
import Glasse from './Pages/Glasse';
import Teste from './Pages/Teste';
import ThickFork from './Pages/ThickFork';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('linear-gradient(113.47deg, #F0F0F2 5.8%, #EBEBEB 43.79%')

  return (
    // linear-gradient(113.47deg, #F0F0F2 5.8%, #EBEBEB 43.79%)
    // linear-gradient(245.21deg, #FFFFFF 18.93%, #E2E6F3 72.94%)
    <div
      style={{
        backgroundImage: backgroundColor,
        transition: '1s'
      }}
    >
      <Header />
      <Glasse
        inViewFunction={() => {
          setBackgroundColor('linear-gradient(113.47deg, #F0F0F2 5.8%, #EBEBEB 43.79%)')
        }}
      />

      {/** DIVIDER */}
      <div
        style={{
          height: 300,
          width: 1
        }}
      />

      <ThickFork
        inViewFunction={() => {
          setBackgroundColor('linear-gradient(245.21deg, #FFFFFF 18.93%, #E2E6F3 72.94%)')
        }}
      />

      {/** DIVIDER */}
      <div
        style={{
          height: 300,
          width: 1
        }}
      />

      <Teste
        inViewFunction={() => {
          setBackgroundColor('linear-gradient(245.21deg, #FFFFFF 18.93%, #E2E6F3 72.94%)')
        }}
      />
    </div>
  );
}

export default App;
