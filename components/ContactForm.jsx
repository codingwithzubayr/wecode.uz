// src/ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePut = async () => {
    try {
      // Save form data to Firebase Realtime Database using axios
      await axios.post('https://wecode-b3371-default-rtdb.firebaseio.com//contact.json', formData);
      console.log('Data saved to Firebase:', formData);
    } catch (error) {
      console.error('Error saving data to Firebase:', error);
    }
  };

  return (
    <div className={`${styles.paddings}`}>
      <h1 className="flex justify-center items-center text-[50px] mb-[30px] text-white font-bold">Cвязаться с нами</h1>
      <form className="mx-auto flex lg:flex-row flex-col gap-6 justify-center flex-wrap">
        <label onChange={handleChange} className="text-[25px] text-white font-bold">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="text-black"
          />
        </label>
        <br />
        <label className="text-[25px] text-white font-bold">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-black"
          />
        </label>
        <br />
        <label className="text-[25px] text-white font-bold">
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="text-black"
          />
        </label>
        <br />
        {/* Add a submit button */}
        <button className="text-[25px] text-white font-bold" type="button" onClick={handlePut}>
          Save to Firebase
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
