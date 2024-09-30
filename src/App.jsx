// src/App.jsx
import React, { useState } from 'react';
import { Pivot, PivotItem } from '@fluentui/react';
import Header from './components/Header';
import CheckinForm from './components/CheckinForm';
import CheckoutForm from './components/CheckoutForm';
import './App.css';

const App = () => {
  const [checkedInData, setCheckedInData] = useState(null);

  const handleCheckinSubmit = (formData) => {
    setCheckedInData(formData);
    alert(`Eingeloggt: ${formData.firstName} ${formData.lastName}`);
  };

  const handleCheckoutSubmit = (formData) => {
    if (checkedInData && formData.firstName === checkedInData.firstName && formData.lastName === checkedInData.lastName) {
      setCheckedInData(null);
      alert(`Ausgecheckt: ${formData.firstName} ${formData.lastName}`);
    } else {
      alert('Daten stimmen nicht überein.');
    }
  };

  return (
    <div className="appContainer">
      <Header />
      <Pivot>
        <PivotItem headerText="Check-in">
          <CheckinForm onSubmit={handleCheckinSubmit} />
        </PivotItem>
        <PivotItem headerText="Check-out">
          <CheckoutForm onSubmit={handleCheckoutSubmit} />
        </PivotItem>
      </Pivot>
    </div>
  );
};

export default App;
