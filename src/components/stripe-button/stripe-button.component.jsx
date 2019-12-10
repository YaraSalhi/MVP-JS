import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) =>{
    const priceForStripe = price *100;
    const publishablekey = "pk_test_uMJLeLkkEwRRsKZHq6daS2Lk00axZKrvVX"


    const onToken=token=>{
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='HOJOZAT.CoM'
        billingAddress
        shippingAddress
        image=''
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;