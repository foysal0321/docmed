import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutFrom from './CheckoutFrom';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const bookings = useLoaderData()
    const navigation = useNavigation()
    const {price,slot} = bookings;

    // if(navigation.state === 'loading'){
    //     return <progress className="progress w-56"></progress>
    // }

    return (
        <div>
            <h3 className='text-2xl'>Payment for {bookings.treatment} </h3>
            <h5>pay {price} at {slot} </h5>

            <div className="w-96 my-12">
             <Elements stripe={stripePromise}>
                <CheckoutFrom 
                bookings={bookings}
                />
             </Elements>
            </div>
        </div>
    );
};

export default Payment;

