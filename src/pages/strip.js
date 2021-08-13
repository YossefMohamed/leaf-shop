import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Gx6fuGQ3XbNezd6esPTGY4MXRqA2791suXWNeIlZwamgUiQuq1lxgtgzwbBUfz4VCgXRRo4aSpGHFbg4SqtxmCe00i91TThhX'
    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='Leaf Shop'
        billingAddress
        shippingAddress
        description={`Your Total Is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />

        )}

export default StripeCheckoutButton