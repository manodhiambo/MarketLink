import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = ({ amount, onPaymentSuccess }) => {
	  const [paymentMethod, setPaymentMethod] = useState('mpesa');
	  const [loading, setLoading] = useState(false);

	  const handlePayment = async () => {
		      setLoading(true);
		      try {
			      const response = await axios.post('/api/payment', { amount, paymentMethod });
			            onPaymentSuccess(response.data);
			          } catch (error) {
					        console.error("Payment failed:", error);
					      } finally {
						            setLoading(false);
						          }
		    };

	  return (
		      <div className="payment-form">
		        <h3>Pay {amount}</h3>
		        <label>
		          Payment Method:
		          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
		            <option value="mpesa">Mpesa</option>
		            <option value="credit-card">Credit Card</option>
		          </select>
		        </label>
		        <button onClick={handlePayment} disabled={loading}>
		          {loading ? 'Processing...' : 'Pay Now'}
		        </button>
		      </div>
		    );
};

export default PaymentForm;
