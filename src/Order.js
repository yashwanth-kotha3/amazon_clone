import './Order.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import React from 'react';
import { useStateValue } from './StateProvider';



function Order({ order = {} }) {
    const { id = '', data = {} } = order;
    const { created = 0, basket = [] } = data;

    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{id}</small>
            </p>
            {basket.map(item => (
                <CheckoutProduct 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}  
                    hideButton={true} // Hide the remove button in order history 
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className='order__total'>Order Total : {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100} // Assuming amount is in cents
                // Convert to dollars by dividing by 100
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    );
}

export default Order;