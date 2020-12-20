// import React from 'react'
// import './DonatePage.css'

// export default function DonatePage() {
//   return (
//     <div>
//       Donations Here
//     </div>
//   )
// }


// import React from 'react';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './DonatePage.css';

// import { useForm } from 'react-hook-form';


function DonatePage() {
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

          {/* {valid && <div className='success-message'>Success! Thank you for registering</div>} */}
          {/* {valid && <div className='success-message'><Link>'/'</Link>} */}




          <div className="donation-container">
            {/* <div class="donation-box"> */}

            <div className="donation-title">Choose a donation amount</div>

            <div className="donation-amount">
              <div className="button">$10</div>
              <div className="button">$25</div>
              <div className="button">$50</div>
              <div className="button">$
                <input type="text" className="set-amount" placeholder="" />
              </div>
            </div>

            <div className="title">Choose a donation amount</div>

            <div className="switch">
              <input type="radio" class="switch-input" name="view" value="One-Time" id="one-time" checked="" />
              <label for="one-time" className="switch-label switch-label-off">One-Time</label>
              <input type="radio" className="switch-input" name="view" value="Monthly" id="monthly" />
              <label for="monthly" className="switch-label switch-label-on">Monthly</label>
              <span className="switch-selection"></span>
            </div>

            {/* <div className="checkboxes">
            <input type="checkbox" id="receipt" className="checkbox" />
            <label for="receipt">Email Me A Receipt</label>
            <br />
            <input type="checkbox" id="anon" className="checkbox" />
            <label for="anon">Give Anonymously</label>
            <br />
            <input type="checkbox" id="list" className="checkbox" />
            <label for="list">Add Me To Email List</label>
          </div> */}

            <div className="confirm"></div>

            <div class="donate-button"><i class="fa fa-credit-card"></i> Donate Now</div>

            <input type="submit" value="Submit" />

          </div>


          {/* </div>
        </div> */}


          {/* </div> */}


          {/* <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />
        {submitted && !values.firstName && <span id='first-name-error'>Please enter a first name</span>}
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
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInputChange}
        />
        {submitted && !values.email && <span id='email-error'>Please enter an email address</span>} */}


        </form>
      </div>
    </>
  );
}

export default DonatePage;