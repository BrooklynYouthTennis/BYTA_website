// import React from 'react';
import React, { useState } from "react";
// import './DonatePage.css';


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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);


  return (
    <>

      <form className='register-form' onSubmit={handleSubmit}>

        {valid && <div className='success-message'>Success! Thank you for registering</div>}

        <input
          id="first-name"
          className="form-field"
          type="text"
          // disabled={valid}
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />
        {/* <span id="first-name-error">Please enter a first name</span> */}
        {submitted && !values.firstName && <span id='first-name-error'>Please enter a first name</span>}

        <input
          id="last-name"
          className="form-field"
          type="text"
          // disabled={valid}
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
          // disabled={valid}
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInputChange}
        />
        {submitted && !values.email && <span id='email-error'>Please enter an email address</span>}

        <input type="submit" value="Submit" />
        {/* <button type="submit">Submit</button> */}

        {/* <button>submit</button>
        <div class='success-message'>Success! Thank you for registering</div> */}
      </form>
    </>
  );
}

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }


// function DonatePage() {

//   //   const [values, setValues] = useState({
//   //     firstName: '',
//   //     lastName: '',
//   //     email: '',
//   //   });

//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }


//   return (

//     <>
//       <div className="donate">

//         <div className="donateHeader">
//           Choose Donation Amount
//         </div>

//         <div className="donateContainer">
//           <div>
//             <button className="CallAbutton">$50</button>
//           </div>

//           <button className="CallAbutton">$100</button>
//           <button className="CallAbutton">$150</button>
//           <button className="CallAbutton">OTHER</button>

//           <div className="CallToActionNotes">
//             <p>100% of your donations are invested in programs support and delivrery</p>
//             <p>Donation of all amounts are appreciated and reconized on our social media.</p>
//           </div>
//         </div>

//         <div className="DonatePageContainer">
//           <button className=""></button>
//         </div>
//       </div>
//     </>
//   )

// }
export default DonatePage;
