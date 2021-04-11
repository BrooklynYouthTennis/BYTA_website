import React, { useState } from "react";
import ReactDOM from "react-dom"
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function PaypalButton() {
  const [amount, setAmount] = useState(0)

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: "Brooklyn Youth Tennis Association Donation",
          amount: {
            currency_code: "USD",
            value: amount,
          },
        },
      ],
    });
  }

  const onApprove = (data, actions) => {
    return actions.order.capture();
  }


  return (
    <>
      <input type="number" onChange={e => setAmount(e.target.value)} value={amount} />
      <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </>
  );
}

export default PaypalButton;
