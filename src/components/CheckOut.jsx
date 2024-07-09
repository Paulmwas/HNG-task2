

const CheckoutPage = () => {
  return (
    <div className="checkout-container">
      <div className="order-details">
        <h2>Products</h2>
        <div className="order-item">
          <div className="product-image">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
          </div>
          <div className="product-details">
            <p>GORBEN Classic 3 Watch, Designed by Andre Cosche (Car Wheels Edition)</p>
            <p>Gray: 1</p>
            <p>$18,000</p>
          </div>
        </div>
        <div className="order-item">
          <div className="product-image">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
          </div>
          <div className="product-details">
            <p>JACQUES Lemans Derby 046 Metallic Series</p>
            <p>$28,000</p>
          </div>
        </div>
        <div className="order-item">
          <div className="product-image">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
          </div>
          <div className="product-details">
            <p>QUARTZ Silverline Day-date watch Old European Style</p>
            <p>$16,000</p>
          </div>
        </div>
      </div>
      <div className="modify-cart">
        <button>MODIFY CART</button>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="summary-item">
          <p>Subtotal</p>
          <p>$62,000</p>
        </div>
        <div className="summary-item">
          <p>Tax</p>
          <p>$612</p>
        </div>
        <div className="summary-item">
          <p>Delivery</p>
          <p>$0</p>
        </div>
        <div className="summary-total">
          <p>Total</p>
          <p>$62,612</p>
        </div>
      </div>
      <div className="payment-details">
        <h2>Payment Details</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" placeholder="1111-2222-3333-4444" />
          </div>
          <div className="form-group">
            <label htmlFor="expiry-date">Expiry Date</label>
            <input type="text" id="expiry-date" placeholder="MM/YY" />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="123" />
          </div>
          <div className="form-group">
            <label htmlFor="membership-number">Membership Number (optional)</label>
            <input type="text" id="membership-number" placeholder="Enter membership number" />
          </div>
          <button type="submit">Make Payment</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;

