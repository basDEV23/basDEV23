// src/components/CheckinForm.js
import React, { useState } from 'react';
import { TextField, PrimaryButton, Stack } from '@fluentui/react';
import './CheckinForm.css';

const CheckinForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
  });

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.firstName && formData.lastName && formData.phone && formData.email) {
      onSubmit(formData);
    } else {
      alert('Bitte alle erforderlichen Felder ausfüllen.');
    }
  };

  return (
    <div className="formContainer">
      <Stack tokens={{ childrenGap: 15 }}>
        <TextField
          label="Vorname"
          required
          className="inputField"
          value={formData.firstName}
          onChange={(e) => handleInputChange(e, 'firstName')}
        />
        <TextField
          label="Nachname"
          required
          className="inputField"
          value={formData.lastName}
          onChange={(e) => handleInputChange(e, 'lastName')}
        />
        <TextField
          label="Firma (optional)"
          className="inputField"
          value={formData.company}
          onChange={(e) => handleInputChange(e, 'company')}
        />
        <TextField
          label="Mobilnummer oder Geschäftnummer"
          required
          className="inputField"
          value={formData.phone}
          onChange={(e) => handleInputChange(e, 'phone')}
        />
        <TextField
          label="E-Mail-Adresse"
          required
          className="inputField"
          value={formData.email}
          onChange={(e) => handleInputChange(e, 'email')}
        />
        <PrimaryButton className="submitButton" text="Einchecken" onClick={handleSubmit} />
      </Stack>
    </div>
  );
};

export default CheckinForm;
