import React, { useState } from 'react';
import Header from './Components/Header';
import DoubleMug from './Pages/DoubleMug';
import Glasse from './Pages/Glasse';
import ThickFork from './Pages/ThickFork';
import WholeKit from './Pages/WholeKit';

function App() {
  const [backgroundColor, setBackgroundColor] = useState(0)

  return (
    // linear-gradient(113.47deg, #F0F0F2 5.8%, #EBEBEB 43.79%)
    // linear-gradient(245.21deg, #FFFFFF 18.93%, #E2E6F3 72.94%)
    <div>

      {/** FIRST BACKGROUND */}
      <div
        style={{
          zIndex: -5,
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          background: 'linear-gradient(113.47deg, #F0F0F2 5.8%, #EBEBEB 43.79%)',
          opacity: 1,
        }}
      />

      {/** SECCOND BACKGROUND */}
      <div
        style={{
          zIndex: -4,
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          background: 'linear-gradient(245.21deg, #FFFFFF 18.93%, #E2E6F3 72.94%)',
          opacity: (backgroundColor == 1) ? 1 : 0,
          transition: '1s'
        }}
      />

      {/** TERCEIRO BACKGROUND */}
      <div
        style={{
          zIndex: -3,
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          background: 'linear-gradient(105.84deg, #FFFDFD 0%, #F9DFDF 77.84%)',
          opacity: (backgroundColor == 2) ? 1 : 0,
          transition: '1s'
        }}
      />
      
      {/** QUARTO BACKGROUND */}
      <div
        style={{
          zIndex: -3,
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          background: 'linear-gradient(107.56deg, #FFFFFF 0%, #DFD6C5 100%)',
          opacity: (backgroundColor == 3) ? 1 : 0,
          transition: '1s'
        }}
      />

      <Header />
      <Glasse
        inViewFunction={() => {
          setBackgroundColor(0)
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
          setBackgroundColor(1)
        }}
      />

      {/** DIVIDER */}
      <div
        style={{
          height: 300,
          width: 1
        }}
      />

      <WholeKit
        inViewFunction={() => {
          setBackgroundColor(2)
        }}
      />

      {/** DIVIDER */}
      <div
        style={{
          height: 300,
          width: 1
        }}
      />

      <DoubleMug
        inViewFunction={() => {
          setBackgroundColor(3)
        }}
      />

    </div>
  );
}

export default App;
