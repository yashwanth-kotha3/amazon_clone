import { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';
import { doc, setDoc } from "firebase/firestore";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();

    const [processing, setProcessing] = useState(false);
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");

    // 👇 Generate Stripe client secret whenever basket changes
    useEffect(() => {
    const getClientSecret = async () => {
        try {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`, // in paise
            });
            console.log("✅ Client Secret:", response.data.clientSecret);
            setClientSecret(response.data.clientSecret);
        } catch (err) {
            console.error("❌ Axios Error:", err);
            alert("Could not get payment info. Check network or server.");
        }
    };

    if (basket.length > 0) {
        getClientSecret();
    }
}, [basket]);


    // 👇 Handle submit payment
    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        if (!clientSecret) {
            alert("❌ Payment failed: No client secret found.");
            setProcessing(false);
            return;
        }

        console.log("⚡ Confirming payment with:", clientSecret);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        const paymentIntent = payload.paymentIntent;

        if (!paymentIntent) {
            alert("❌ Payment failed.");
            setProcessing(false);
            return;
        }

        // 👇 Save order in Firestore
        await setDoc(doc(db, "users", user?.uid, "orders", paymentIntent.id), {
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
        });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
            type: "EMPTY_BASKET"
        });

        navigate('/orders', { replace: true });
    };

    // 👇 Handle card field changes
    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>

                {/* Delivery Address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>1-112, 12334 Street, Kokkireni Village</p>
                        <p>Khammam, Telangana, 507103, India</p>
                    </div>
                </div>

                {/* Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment Method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div style={{ color: "red" }}>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
