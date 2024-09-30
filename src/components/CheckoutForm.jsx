// src/components/CheckoutForm.js
import React, { useState } from 'react';
import { TextField, PrimaryButton, Stack } from '@fluentui/react';
import './CheckoutForm.css';

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.firstName && formData.lastName) {
      onSubmit(formData);
    } else {
      alert('Bitte Vor- und Nachnamen eingeben.');
    }
  };

  return (
    <div className="formContainer">
      <Stack tokens={{ childrenGap: 15 }}>
        <TextField
          label="Vorname"
          required
          value={formData.firstName}
          onChange={(e) => handleInputChange(e, 'firstName')}
        />
        <TextField
          label="Nachname"
          required
          value={formData.lastName}
          onChange={(e) => handleInputChange(e, 'lastName')}
        />
        <PrimaryButton className="submitButton" text="Auschecken" onClick={handleSubmit} />
      </Stack>
    </div>
  );
};

export default CheckoutForm;
