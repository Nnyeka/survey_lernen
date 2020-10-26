import React, {Component } from 'react'
import { usePaystackPayment } from 'react-paystack';
import { connect } from 'react-redux';
import * as actions from '../actions';



const config = {
    reference: (new Date()).getTime(),
    email: "user@example.com",
    amount: 20000,
    publicKey: 'pk_test_2bcf1a1f82f8a04a204c105f4c2182e047c939ba',
};

const onSuccess = (reference) => {
    actions.handleSuccess(reference)
    
    console.log(reference);
  };

  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
        
        <div>
            <button className="btn" onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Add Credits</button>
        </div>
        
    );
};


class Payments extends Component {
  render() {
    return (
      <div>
        <PaystackHookExample/>
      </div>
    );
  }
}

export default connect(null, actions)(Payments);