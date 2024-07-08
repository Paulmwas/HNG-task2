import SecureShield from '../assets/secureshield.png';
import Payment from '../assets/Payment.png';
import Support from '../assets/support.png';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <div className="quality">
        <div className="qual-desc">
            <img src={SecureShield} alt="" /> 
            <div className='dual-desc1'>
                <h3>Quality Guaranteed</h3>
                <p>100% Assurance on all products</p>
            </div>      
        </div>
        <div className="qual-desc">
            <img src={Payment} alt="" /> 
            <div className='dual-desc1'>
                <h3>Secured Payment</h3>
                <p>100% secured payment option</p>
            </div>      
        </div>
        
        <div className="qual-desc">
        <FontAwesomeIcon icon={faTruckFast} />
        <div className='dual-desc1'>
            <h3>Free Delivery</h3>
            <p>Free Deliveries across the nation</p>
        </div>      
        </div>
            <div className="qual-desc">
            <img src={Support} alt="" />
            <div className='dual-desc1'>
                <h3>Support Service</h3>
                <p>Dedicated & 24/7 online customer support service</p>
            </div>      
            </div>
        </div>
    
  )
}

export default Features
