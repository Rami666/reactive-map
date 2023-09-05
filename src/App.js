import React, { useState } from 'react';
import SaudiArabiaMap from './components/SaudiArabiaMap';
import CityModal from './components/CityModal';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div>
      <SaudiArabiaMap />
      <CityModal city={selectedCity} onHide={() => setSelectedCity(null)} />
    </div>
  );
};

export default App;
