import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons/faBagShopping';
import './App.css'
const Header = () => {
  return (
    <header className='navbar'>
      <h1 className='logo'>Doclan <span>Co.</span></h1>
      <ul>
        <li className='nav1'>Products</li>
        <li className='navItem'>Contacts</li>
        <li className='navItem'>Membership</li>
        <li className='navItem'>Help</li>
      </ul>
      <div className="searchbox">
        <div className="input-wrapper">
          <input type="text" placeholder='search' className='search-input'/>
          <FontAwesomeIcon icon={faSearch} className='search-icon'/>
        </div>

        <ul className='nav'>
          <li className='navItem'>Create account</li>
          <li><FontAwesomeIcon icon={faUser}/></li>
          <li><FontAwesomeIcon icon={faBagShopping}/></li>
        </ul>
      </div>



    </header>
  );
}

export default Header
