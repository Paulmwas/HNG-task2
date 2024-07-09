// Cart.jsx
import { useCart } from '../CartContext';

function Cart() {
  const { cart, dispatch } = useCart();

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { id, quantity } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <input 
            type="number" 
            value={item.quantity} 
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
          />
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
