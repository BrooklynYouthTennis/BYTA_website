// import React from 'react';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './Checkout.css';

// import { useForm } from 'react-hook-form';


function Checkout() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',

    creditCardNumber: '',
    expiration: '',
    securityCode: ''
  });

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };

  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };


  const handleStreetAddressInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      streetAddress: event.target.value,
    }));
  };

  const handleCityInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      city: event.target.value,
    }));
  };

  const handleStateInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      state: event.target.value,
    }));
  };

  const handleZipCodeInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      zipCode: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };



  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName 
      && values.streetAddress && values.city && values.state && values.zipCode && values.email) {
      setValid(true);
    }
    // setSubmitted(true);
    setSubmitted(true) && history.pushState('/');
  }


  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);


  return (
    <>
      <div className="donate">
        <form className='register-form' onSubmit={handleSubmit}>
<h1>Your Information</h1>
  
          <label> First Name
          <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        /></label>
          {submitted && !values.firstName && <span id='first-name-error'>Please enter a first name</span>}
          
          <label>Last Name
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />
            {submitted && !values.lastName && <span id='last-name-error'>Please enter a last name</span>}
          </label>
          
         

          <label>Street Address
        <input
          id="streetAddress"
          className="form-field"
          type="text"
          placeholder="Street Address"
          name="streetAddress"
          value={values.streetAddress}
          onChange={handleStreetAddressInputChange}
        />
            {submitted && !values.streetAddress && <span id='streetAddress-error'>Please enter an street address</span>}
          </label>

          <label>City
        <input
          id="city"
          className="form-field"
          type="text"
          placeholder="City"
          name="city"
          value={values.city}
          onChange={handleCityInputChange}
        />
            {submitted && !values.city && <span id='city-error'>Please enter your city</span>}
          </label>

          <label>State
        <input
          id="state"
          className="form-field"
          type="text"
          placeholder="State"
          name="state"
          value={values.state}
          onChange={handleStateInputChange}
        />
            {submitted && !values.state && <span id='state-error'>Please enter your state</span>}
          </label>

          <label>Zip Code
        <input
          id="zipCode"
          className="form-field"
          type="text"
          placeholder="Zip Code"
          name="zipCode"
          value={values.zipCode}
          onChange={handleZipCodeInputChange}
        />
            {submitted && !values.zipCode && <span id='zipCode-error'>Please enter your state</span>}
          </label>

          <label>Email
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInputChange}
        />
            {submitted && !values.email && <span id='email-error'>Please enter an email address</span>}
          </label>


          <h1>Payment Information</h1> 

          <div>Click the button to confirm your donation of $10, recurring monthly.</div>

          <Link className='go-back-link' to="/donate">Go Back</Link>


        <input className="process-payment-button" type="submit" value="Process Payment" />
        </form>
      </div>
    </>
  );
}

export default Checkout;