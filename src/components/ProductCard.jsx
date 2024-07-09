import Watch1 from '../assets/watch1.png';
import Watch2 from '../assets/watch2.png';
import Watch3 from '../assets/watch3.png';
import Watch4 from '../assets/watch4.png';
import Watch5 from '../assets/watch5.png';
import Watch6 from '../assets/watch6.png';
import Watch7 from '../assets/watch7.png';
import Watch8 from '../assets/watch8.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';


const ProductCard = () => {
  return (
    <>
    <div className='product prod1'>
        <img src={Watch1} alt="" /> 
        <div className="brand">
          <div className="brand-desc">
            <h4>GORBEN Classic 3</h4>
            <p>$18,000</p>   
          </div>
          <a href=""><FontAwesomeIcon icon={faBagShopping} /> </a>
                 
        </div>
    </div>
    <div className='product prod2'>
        <img src={Watch2} alt="" /> 
        <div className="brand">
          <div className="brand-desc">
            <h4>RIOLES Version 2</h4>
            <p>$9,770</p>   
          </div>
          <FontAwesomeIcon icon={faBagShopping} />        
        </div>
    </div>
    <div className='product prod3'>
        <img src={Watch3} alt="" /> 
        <div className="brand">
          <div className="brand-desc">
            <h4>QUARTZ Silverline</h4>
            <p>$16,000</p>   
          </div>
          <FontAwesomeIcon icon={faBagShopping} />        
        </div>
    </div>
    <div className='product prod4'>
        <img src={Watch4} alt="" /> 
        <div className="brand">
          <div className="brand-desc">
            <h4>JACQUES Lemans</h4>
            <p>$28,000</p>   
          </div>
          <FontAwesomeIcon icon={faBagShopping} />        
        </div>
    </div>
    <div className='product prod5'>
        <img src={Watch5} alt="" /> 
        <div className="brand">
          <div className="brand-desc">
            <h4>VALTRA Leonard</h4>
            <p>$14,000</p>   
          </div>
          <FontAwesomeIcon icon={faBagShopping} />        
        </div>
    </div>
    <div className='product prod6'>
        <img src={Watch6} alt="" /> 
        <div className="brand">
          <div className="brand-desc">
            <h4>JACQUES Lemans Retro</h4>
            <p>$31,000</p>   
          </div>
          <FontAwesomeIcon icon={faBagShopping} />        
        </div>
    </div>
    <div className='product prod7'>
        <img src={Watch7} alt="" /> 
        <div className="brand">
          <div className="brand-desc">
            <h4>CASIO Timeless X</h4>
            <p>$14,000</p>   
          </div>
          <FontAwesomeIcon icon={faBagShopping} />        
        </div>
    </div>
    <div className='product prod8'>
        <img src={Watch8} alt="" /> 
        <div className="brand">
          <div className="brand-desc">
            <h4>SKMEI IV</h4>
            <p>$24,000</p>   
          </div>
          <FontAwesomeIcon icon={faBagShopping} />        
        </div>
    </div>   

    </>
  )
}

export default ProductCard