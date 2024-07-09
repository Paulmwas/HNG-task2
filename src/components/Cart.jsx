import { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import Bottom from './Bottom'
import Watch1 from '../assets/watch1.png'
import Watch4 from '../assets/watch4.png'
import Watch3 from '../assets/watch3.png'
import {Link} from 'react-router-dom'


const Cart = () => {
  const initialCartItems = [
    {
      id: 1,
      name: 'GORBEN Classic 3 Watch, Designed by Andre Gosthe (Car Wheels Edition)',
      price: 18000,
      color: 'Metallic Black',
      size: 'Adjustable',
      quantity: 1,
      image: Watch1,
      tag: 'Limited Edition',
    },
    {
      id: 2,
      name: 'JACQUES Lemans Derby 045" Metallic Series',
      price: 28000,
      color: 'Gold',
      size: 'Adjustable',
      quantity: 1,
      image: Watch4,
    },
    {
      id: 3,
      name: 'QUARTZ Silverline Day-date watch Old European Style',
      price: 16000,
      color: 'Silver',
      size: 'Medium - Large',
      quantity: 1,
      image: Watch3,
      tag: 'Special Edition',
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, delta) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + delta } : item
    ));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
    <Header/>
    <div className="cart-container">
      <div className="cart-items">
        <h1 className="cart-header">Your Cart</h1>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>Colour: {item.color}</p>
              <p>Size: {item.size}</p>
              {item.tag && <span className="cart-item-tag">{item.tag}</span>}
            </div>
            <div className="cart-item-actions">
              <div className="cart-item-quantity">
                <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </div>
              <div className="cart-item-price">
                <p>${(item.price * item.quantity).toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-sidebar">
        <div className="cart-summary">
          <h2>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} Watches):</h2>
          <p>${total.toLocaleString()}</p>
          <button> <Link to='/checkout'>Proceed to Checkout</Link>  </button>
        </div>
        <div className="cart-recommendations">
          <h2>You may like this too</h2>
          <div className="cart-recommendations-grid">
            {Array(6).fill().map((_, index) => (
              <img key={index} src={Watch1} alt="Recommendation" />
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    <Bottom/>
    </>
  );
};

export default Cart;
