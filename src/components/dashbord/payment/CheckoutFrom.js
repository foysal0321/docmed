import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutFrom = ({bookings}) => {
    const [cardErr,setcardErr] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [success, setsuccess] = useState("");
    const [transId, settransId] = useState("");
    const [procing, setprocing] = useState(false);
    
    const {price, email, patient,_id} = bookings;

    useEffect(() => {
        fetch('https://doctors-protal-server-eight.vercel.app/create-payment-intent',{
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            'authrazation': `bearer ${localStorage.getItem('token')}`
         },
          body: JSON.stringify({ price }),
        })
          .then((res) => res.json())
          .then((data) => setClientSecret(data.clientSecret));

      }, [price]);

    const handleSubmit= async (event)=>{
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            //console.log( error.message);
            setcardErr(error.message)
        }
        else{
            setcardErr('')
        }

        setsuccess('')
        setprocing(true);

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patient,
                  email: email
                },
              },
            },
          );

          if(confirmError){
            setcardErr(confirmError.message)
            return;
          }
          
             console.log('paymentIntent', paymentIntent);
             
             
          if(paymentIntent.status === 'succeeded'){

                const payment ={
                    price,
                    transId: paymentIntent.id,
                    email,
                    bookingId: _id
                }
                //store payment database
                fetch(`https://doctors-protal-server-eight.vercel.app/payments`,{
                    method: 'POST',
                    headers:{
                        "content-type": "application/json",
                        'authrazation': `bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(payment)
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.insertedId){
                         setsuccess('Congralation!')
                         settransId(paymentIntent.id)
                    }
                })
          }

          setprocing(false)

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-sm btn-success mt-4' type="submit" disabled={!stripe || !clientSecret || procing}>
          Pay
        </button>
      </form>
      <p className="text-red-600 mt-4">{cardErr}</p>

      {success && 
      <div className="">
        <p className='text-green-500'>{success}</p>
        <p>TransId: {transId}</p>
      </div>
      }
      </>
    );
};

export default CheckoutFrom;

