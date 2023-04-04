import React, { useState } from 'react';
import './App.css';
import CastomSelect from './components/CastomSelect/CastomSelect';

function App() {
  let countries = [
    {
      id: 1,
      name: 'Afghanistan',
      code: '+93',
      iso: 'AF',
      img: '/countries/afghanistan.svg',
      mask: '##-###-####',
    },
    {
      id: 2,
      name: 'Aland Islands',
      code: '+358',
      iso: 'AX',
      img: '/countries/alandIslands.svg',
      mask: '(###)###-##-##',
    },
    {
      id: 3,
      name: 'Albania',
      code: '+355',
      iso: 'AL',
      img: '/countries/albania.svg',
      mask: '(###)###-###',
    },
    {
      id: 4,
      name: 'Algeria',
      code: '+213',
      iso: 'DZ',
      img: '/countries/algeria.svg',
      mask: '##-###-####',
    },
    {
      id: 5,
      name: 'American Samoa',
      code: '+1',
      iso: 'AS',
      img: '/countries/americanSamoa.svg',
      mask: '(684)###-####',
    },
  ];
  return (
    <div className="container">
      <CastomSelect countries={countries} />
    </div>
  );
}

export default App;
