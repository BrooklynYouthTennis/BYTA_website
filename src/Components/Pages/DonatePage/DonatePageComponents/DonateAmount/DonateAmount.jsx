// import React from 'react'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './DonateAmount.css';

function DonateAmount() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',


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
    if (values.firstName && values.lastName && values.email) {
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
         

            <div className="donation-title">Choose a donation amount</div>

            <div className="donation-amount">
              <div className="donation1">
              <input type="radio" className="switch-input" name="view" value="$10" id="$10" checked="" />
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
              <label  className="switch-label switch-label-off donation-label" name="view" id="custom">enter custom amount</label>
              <input
                for="custom"
                className="set-amount"
                placeholder="$"
                pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                data-type="currency"/> 
              </div>
              
            </div>

            
            <div className="donation-frequency">Choose a donation frequency</div>

          <div className="switch">
            
              <div className="monthly">
              <input type="radio" className="switch-input" name="view" value="One-Time" id="one-time" checked="" />
                <label for="one-time" className="switch-label2 switch-label-off">One-Time</label>
                </div>

              <div className="onetime">
              <input type="radio" className="switch-input" name="view" value="Monthly" id="monthly" />
              <label for="monthly" className="switch-label2 switch-label-on">Monthly</label>
                {/* <span className="switch-selection"></span> */}
            </div>
            
            </div>

            <input className="donate-button" type="submit" value="Go to checkout" />
                 
        </form>

      </div>
    </>
  );
}

export default DonateAmount;