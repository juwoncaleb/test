import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { PaystackButton } from 'react-paystack';

console.log("dd");

function App() {
  const items = useSelector(selectItems);
  
let config = {
  reference: (new Date()).getTime().toString(),
  email: "user@example.com",
  amount: 20000,
  publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
  meta : {items}
};
console.log(config.meta);


  const handlePaystackSuccessAction = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const componentProps = {
    ...config,
    text: 'Paystack Button Implementation',
    onSuccess: (reference) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
};
  
  return (
    <div className="App">

    <div id="containerr">
      <br/>
      <h1>&bull;PAY WITH FLUTTERWAVE &bull;</h1>
      

      <br/>

      <div id="contact_form">

       
        
        <PaystackButton  className='flutter' {...componentProps} />

      
      </div>
    </div>


  </div>
  );
}

export default App;
