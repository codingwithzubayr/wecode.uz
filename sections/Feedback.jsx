import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles';
const Feedback = () => {
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
    <section className={`${styles.paddings}`}>
      <div
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <div
          className="flex-[0.5] lg:max-w-[500px] flex justify-start flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
          <div>
            <h4 className="font-bold sm:text-[40px] text-[26px] sm:leading-[40.32px] mb-[40px] leading-[40.32px] text-white contactHeading">
            Are you interested in our services?
            </h4>
            <p className="mt-[8px] font-normal sm:text-[30px] text-[30px] sm:leading-[35.68px] leading-[35.68px]   text-white contactInfo">
            Provide introductory information, and we will start our collaboration.
            </p>
            <img className="contactImage" src="/stamp.png" alt="Contact Us" />
          </div>
        </div>

        <div
          className="relative flex-1 flex justify-center items-center"
        >
          <div className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]">
            <h1 className="flex justify-center items-center text-[50px] mb-[30px] text-white font-bold contactHeader">
            Contact Us
            </h1>
            <form className="mx-auto flex lg:flex-row flex-col gap-6 justify-center flex-wrap contactForm">
              <label className="text-[25px] text-white font-bold contactLabel">
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="text-black contactInput"
                />
              </label>
              <br />
              <label className="text-[25px] text-white font-bold contactLabel">
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-black contactInput"
                />
              </label>
              <br />
              <label className="text-[25px] text-white font-bold contactLabel">
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="text-black contactInput"
                />
              </label>
              <br />
              <button className="text-[25px] text-white font-bold contactButton" type="button" onClick={handlePut}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
