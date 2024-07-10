import Watch1 from '../assets/watch1.png';
import Watch2 from '../assets/watch2.png';
import Watch3 from '../assets/watch3.png';
import Watch4 from '../assets/watch4.png';
import Watch5 from '../assets/watch5.png';
import Watch6 from '../assets/watch6.png';
import Watch7 from '../assets/watch7.png';
import Watch8 from '../assets/watch8.png';
import { useState } from 'react';
import UpdateCart from '../functions/UpdateCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';


const ProductCard = () => {
  const [cart, setCart] = useState(0)
  function updateCart(){
    updateCart(setCart(cart + 1))
}
  console.log(cart)
  
  const products = [
    { id: 1, name: 'GORBEN Classic 3', price: '$'+18000, img: Watch1 },
    { id: 2, name: 'RIOLES Version 2', price: '$'+9770, img: Watch2 },
    { id: 3, name: 'QUARTZ Silverline', price: '$'+16000, img: Watch3 },
    { id: 4, name: 'JACQUES Lemans', price: '$'+28000, img: Watch4 },
    { id: 5, name: 'VALTRA Leonard', price: '$'+14000, img: Watch5 },
    { id: 6, name: 'JACQUES Lemans Retro', price: '$'+31000, img: Watch6 },
    { id: 7, name: 'CASIO Timeless X', price: '$'+14000, img: Watch7 },
    { id: 8, name: 'SKMEI IV', price: '$'+24000, img: Watch8 },
  ];
  return (
    <>
    <div className='product prod1'>
        <img src={Watch1} alt="" className='w-[20px]'/> 
        <div className="brand">
          <div className="brand-desc">
            <h4 className='flex-grow'>{products[0].name}</h4>
            <p>{products[0].price}0</p>   
          </div>
          <a href="/" onClick={updateCart}><FontAwesomeIcon icon={faBagShopping} className='update'/> </a>
                 
        </div>
    </div>
    <div className='product prod2'>
        <img src={Watch2} alt="" /> 
        <div className="brand">
          <div className="brand-desc">
            <h4>{products[1].name}</h4>
            <p>{products[1].price}</p>   
          </div>
          <FontAwesomeIcon icon={faBagShopping}  onClick={updateCart} />        
        </div>
    </div>
    <div className='product prod3'>
        <img src={Watch3} alt="" /> 
        <div className="brand">
          <div className="brand-desc">
            <h4>{products[2].name}</h4>
            <p>{products[2].price}</p>   
          </div>
          <FontAwesomeIcon icon={faBagShopping}  className="add_button" onClick={UpdateCart} />        
        </div>
    </div>
    <div className='product prod4'>
        <img src={Watch4} alt="" /> 
        <div className="brand">
          <div className="brand-desc">
            <h4>{products[3].name}</h4>
            <p>{products[3].price}</p>   
          </div>
          <FontAwesomeIcon icon={faBagShopping}  className="add_button" onClick={UpdateCart} />        
        </div>
    </div>
    <div className='product prod5'>
        <img src={Watch5} alt="" /> 
        <div className="brand">
          <div className="brand-desc">
            <h4>{products[4].name}</h4>
            <p>{products[4].price}</p>   
          </div>
          <FontAwesomeIcon icon={faBagShopping}  className="add_button" onClick={UpdateCart} />        
        </div>
    </div>
    <div className='product prod6'>
        <img src={Watch6} alt="" /> 
        <div className="brand">
          <div className="brand-desc">
            <h4>{products[5].name}</h4>
            <p>{products[5].price}</p>   
          </div>
          <FontAwesomeIcon icon={faBagShopping}  className="add_button" onClick={UpdateCart} />        
        </div>
    </div>
    <div className='product prod7'>
        <img src={Watch7} alt="" /> 
        <div className="brand">
          <div className="brand-desc">
            <h4>{products[6].name}</h4>
            <p>{products[6].price}</p>   
          </div>
          <FontAwesomeIcon icon={faBagShopping}  onClick={updateCart} />        
        </div>
    </div>
    <div className='product prod8'>
        <img src={Watch8} alt="" /> 
        <div className="brand">
          <div className="brand-desc">
            <h4>{products[7].name}</h4>
            <p>{products[7].price}</p>   
          </div>
          <FontAwesomeIcon icon={faBagShopping}  onClick={updateCart} />        
        </div>
    </div>   

    </>
  )
}

export default ProductCard