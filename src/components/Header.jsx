import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons/faBagShopping';
import { Link } from 'react-router-dom';
import '../App.css';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='navbar sticky top-0 z-10 shadow-'>
      <h1 className='logo'> 
        <Link to='/' className='logo'>Doclan<span> Co.</span></Link></h1>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li >
            <Link className='nav1'>Products</Link>
            </li>
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
            <li>
              <Link to='/cart'><FontAwesomeIcon icon={faBagShopping}/>
              <span className="bg-black text-xs text-white rounded-full p-[2px] w-1 h-1 relative -left-1 -top-2" id="cart_count">0</span>
              </Link>
              <h1></h1>
              </li>
          </ul>
        </div>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>
    </header>
  );
};

export default Header;
