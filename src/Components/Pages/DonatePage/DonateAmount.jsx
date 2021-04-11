// import React from 'react'
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './DonatePage.css';
import PaypalButton from './PaypalButton/PaypalButton'

function DonateAmount() {
  const [values, setValues] = useState({
    donation: '',
    frequency: ''
  });

  const handleDonationInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      donation: event.target.value,
    }));
  };


  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.donation && values.frequency) {
      setValid(true);
    }
    setSubmitted(true) && history.pushState('/');
  }



  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);


  return (
    <>
      <div className="donate">
        <form className='register-form' onSubmit={handleSubmit}>
            <div className="donation-title">Choose a donation amount</div>

            <div className="donation-amount">
            <div className="donation1">
              
              <input type="radio" className="switch-input" name="view" value="$10" id="$10"  />
              <label for="$10" className="switch-label switch-label-off">$10</label>
              <label for="$10" className="donation-description">This buys tennis equipment for one class</label>

            </div>

              <div className="donation2">
              <input type="radio" className="switch-input" name="view" value="$25" id="$25"  />
              <label for="$25" className="switch-label switch-label-off">$25</label>
                <label for="$25" className="donation-description">This buys tennis equipment for one class</label>
                </div>

              <div className="donation3">
              <input type="radio" className="switch-input" name="view" value="$50" id="$50"  />
              <label for="$50" className="switch-label switch-label-off">$50</label>
                <label for="$50" className="donation-description">This buys tennis equipment for one class</label>
                </div>

            <div className="donation4">
              <input
                type="radio"
                className="custom-switch-input"
                name="view"
                value="custom"
                id="custom" />
              <label
                className="switch-label 
                switch-label-off 
                donation-label"
                name="view"
                id="custom">Enter Custom Amount</label>
              <input
                for="custom"
                className="set-amount"
                placeholder="$"
                pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                data-type="currency"
                name="view"
                id="custom"/> 
              </div>            
              <PaypalButton/>
            </div>               
        </form>
      </div>
    </>
  );
}

export default DonateAmount;